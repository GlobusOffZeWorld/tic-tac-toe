import { FC, useEffect, useState } from 'react';
import { Cell, CellValues } from '../Cell/Cell';
import styles from './Grid.module.scss';
import { calculateWinner } from '../../utils/calculateWinner';
import { WinnerModal } from '../WinnerModal/WinnerModal';

const cells = new Array<CellValues>(3 * 3).fill(0);

interface GridProps {
  onChange: (cell: [number?, number?]) => void;
  onRestart?: VoidFunction;
}

export const Grid: FC<GridProps> = ({onChange, onRestart}) => {
  const [currentGameStage, setCurrentGameStage] = useState<CellValues[]>(cells);
  const [currentFigure, setCurrentFigure] = useState<boolean>(true);
  const [winnerId, setWinnerId] = useState<number| null>(null);

  useEffect(() => {
    const winner = calculateWinner(currentGameStage);
    if (winner) {
      setWinnerId(winner);
    }
  }, [currentGameStage]);

  const handleCellClick = (cellId: number) => {
    if (currentGameStage[cellId]) {
      return;
    }
    setCurrentGameStage((prevState) => {
      if (prevState[cellId]) {
        return prevState;
      }
        const newState = [...prevState];
        newState[cellId] = currentFigure ? 1 : 2;
        return newState;
      });
    setCurrentFigure(!currentFigure);
    onChange?.([Math.floor(cellId / 3), cellId % 3]);
  };

  const handleRestart = () => {
    setCurrentFigure(true);
    setCurrentGameStage(cells);
    setWinnerId(null);
    onRestart?.();
  };

  const winnerTitle = (winnerId: number | null): string => {
    switch (winnerId) {
      case 1: {
        return 'X won!';
      }
      case 2: {
        return 'O won!';
      }
    }
    return 'Draw :(';
  };

  return (
    <>
      {(winnerId || (currentGameStage.indexOf(0) === -1)) && <WinnerModal result={winnerTitle(winnerId)} onRestart={handleRestart}></WinnerModal>}
      <div className={styles.grid}>
        {currentGameStage.map((value, i) => <Cell cellContent={value} onClick={() => handleCellClick(i)}/>) }
      </div>
    </>
  );
};
