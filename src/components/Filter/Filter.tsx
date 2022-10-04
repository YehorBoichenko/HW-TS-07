import React, { ChangeEventHandler } from 'react';
import styles from '../Filter/Filter.module.css';

export const Filter = ({
  value,
  onChange,
}: {
  value: string,
  onChange: ChangeEventHandler,
}): JSX.Element => {
  return (
    <label className={styles.label}>
      <input
        className={styles.input}
        name="filter"
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
