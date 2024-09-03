import { FC } from 'react';
import classNames from 'classnames';

import circleImage from '../../assets/circle.png';
import crossImage from '../../assets/cross.png';
import { TicTacToeEnum } from '../../enums/TicTacToeEnum';

import styles from './Cell.module.scss';

export type CellValues = TicTacToeEnum;

interface CellProps {
  cellContent: TicTacToeEnum;
  onClick: VoidFunction;
}

export const Cell: FC<CellProps> = ({ cellContent = TicTacToeEnum.EMPTY, onClick }) => {
  return (
    <div
      className={classNames(styles.cell, cellContent !== TicTacToeEnum.EMPTY && styles.filled)}
      onClick={onClick}
    >
      {cellContent === TicTacToeEnum.X && <img src={crossImage} />}
      {cellContent === TicTacToeEnum.O && <img src={circleImage} />}
    </div>
  );
};
