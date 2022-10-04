import React from 'react';
import styles from '../Title/Title.module.css';

export const Title = ({ text }: { text: string }): JSX.Element => {
  return <h2 className={styles.title}>{text}</h2>;
};
