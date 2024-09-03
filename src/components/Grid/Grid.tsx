import { FC, useEffect, useState } from 'react';

import { Cell, CellValues } from '../Cell/Cell';
import { calculateWinner } from '../../utils/calculateWinner';
import { WinnerModal } from '../WinnerModal/WinnerModal';
import { TicTacToeEnum } from '../../enums/TicTacToeEnum';

import styles from './Grid.module.scss';

const cells = new Array<CellValues>(3 * 3).fill(TicTacToeEnum.EMPTY);

interface GridProps {
  onChange: (cell: [number?, number?]) => void;
  onRestart?: VoidFunction;
}

const WinnerTitle = {
  [TicTacToeEnum.X]: 'X won!',
  [TicTacToeEnum.O]: 'O won!',
  [TicTacToeEnum.EMPTY]: 'Tie:(',
};

export const Grid: FC<GridProps> = ({ onChange, onRestart }) => {
  const [currentGameStage, setCurrentGameStage] = useState<CellValues[]>(cells);
  const [currentFigure, setCurrentFigure] = useState<boolean>(true);
  const [winner, setWinner] = useState<TicTacToeEnum | null>(null);

  useEffect(() => {
    const winner = calculateWinner(currentGameStage);
    if (winner) {
      setWinner(winner);
    }
  }, [currentGameStage]);

  const handleCellClick = (cellId: number) => {
    if (currentGameStage[cellId] !== TicTacToeEnum.EMPTY) {
      return;
    }
    setCurrentGameStage((prevState) => {
      if (prevState[cellId] !== TicTacToeEnum.EMPTY) {
        return prevState;
      }

      const newState = [...prevState];
      newState[cellId] = currentFigure ? TicTacToeEnum.X : TicTacToeEnum.O;
      return newState;
    });
    setCurrentFigure(!currentFigure);
    onChange?.([Math.floor(cellId / 3), cellId % 3]);
  };

  const handleRestart = () => {
    setCurrentFigure(true);
    setCurrentGameStage(cells);
    setWinner(null);
    onRestart?.();
  };

  const isDraw = currentGameStage.indexOf(TicTacToeEnum.EMPTY) === -1;

  return (
    <>
      {(winner || isDraw) && (
        <WinnerModal
          result={!winner ? WinnerTitle[TicTacToeEnum.EMPTY] : WinnerTitle[winner]}
          onRestart={handleRestart}
        ></WinnerModal>
      )}
      <div className={styles.grid}>
        {currentGameStage.map((value, i) => (
          <Cell
            key={value.toString() + i}
            cellContent={value}
            onClick={() => handleCellClick(i)}
          />
        ))}
      </div>
    </>
  );
};
