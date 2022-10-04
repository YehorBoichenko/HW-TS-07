import React from 'react';
import styles from '../ContactLIst/ContactList.module.css';
import {Button} from '../Button/Button';

export const ContactListItem = ({ name, number, onDelete, id }: { name: string, number: string, onDelete: (arg: string)=> void, id:string }):JSX.Element =>  {
  return (
    <li className={styles.item} key={id}>
      <p className={styles.p}>{name}</p>
      <p className={styles.rightP}>{number}</p>
      <Button text="Delete" onClick={() => onDelete(id)} />
    </li>
  );
};
