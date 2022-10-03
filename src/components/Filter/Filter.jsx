import React from 'react';
import styles from '../Filter/Filter.module.css';
import { getFilter } from 'redux/contacts-selectors';
import { checkContact } from 'redux/contacts-actions';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const changeFilter = event => dispatch(checkContact(event.target.value));
  return (
    <label className={styles.label}>
      <input
        className={styles.input}
        name="filter"
        type="text"
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
};

export default Filter;
