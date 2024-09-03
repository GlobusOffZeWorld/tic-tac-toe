import { FC } from 'react';

import listIcon from '../../assets/list.png';

import styles from './History.module.scss';

export interface HistoryProps {
  moves: [number?, number?][];
}

export const History: FC<HistoryProps> = ({ moves }) => {
  const renderHistory = () => {
    return [...moves].reverse().map((move, id, arr) => {
      const row = move[0] || 0;
      const column = move[1] || 0;
      return (
        <span
          className={styles.move}
          key={move.toString() + id}
        >
          {arr.length - id} move: ({row + 1}, {column + 1})
        </span>
      );
    });
  };

  return (
    <div className={styles.historyBlock}>
      <div className={styles.title}>
        <img
          className={styles.titleIcon}
          src={listIcon}
        />
        <span className={styles.titleText}>Moves History:</span>
      </div>
      <div className={styles.history}>{renderHistory()}</div>
    </div>
  );
};
