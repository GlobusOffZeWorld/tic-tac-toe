import { FC } from 'react';
import styles from './Cell.module.scss';
import classNames from 'classnames';
import circleImage from '../../assets/circle.png';
import crossImage from '../../assets/cross.png';

export type CellValues = 0 | 1 | 2;

interface CellProps {
  cellContent: CellValues;
  onClick: VoidFunction;
}

export const Cell: FC<CellProps> = ({cellContent = 0, onClick}) => {
  return (
    <div className={classNames(styles.cell)} onClick={onClick}>
      {cellContent === 1 && <img src={crossImage}/> }
      {cellContent === 2 && <img src={circleImage}/> }
    </div>
  );
};
