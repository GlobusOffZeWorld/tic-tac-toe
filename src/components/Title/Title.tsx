import { FC } from 'react';

import styles from './Title.module.scss';

interface TitleProps {
  title: string;
}
export const Title: FC<TitleProps> = ({ title }) => {
  return <span className={styles.title}>{title}</span>;
};
