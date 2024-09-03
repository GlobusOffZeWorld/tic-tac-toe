import { FC } from 'react';

import styles from './WinnerModal.module.scss';

interface WinnerModalProps {
  result: string;
  onRestart: VoidFunction;
}

export const WinnerModal: FC<WinnerModalProps> = ({ result, onRestart }) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={styles.winnerModalFullscreenWrapper}
    >
      <div className={styles.winnerModal}>
        <span className={styles.modalTitle}>{result}</span>
        <button
          className={styles.modalButton}
          onClick={onRestart}
        >
          Restart!
        </button>
      </div>
    </div>
  );
};
