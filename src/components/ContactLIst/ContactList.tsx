import styles from '../ContactLIst/ContactList.module.css';
import {ContactListItem} from '../ContactLIst/ContactsListItem';
import React from 'react';

export const ContactList = ({ contact, onDelete}: { contact: { name: string, id: string, number: string }[], onDelete: (arg:string) => void }):JSX.Element => {
  return (
    <ul className={styles.list}>
      {contact.map(
        ({
          name,
          number,
          id,
        }) => (
          <ContactListItem name={name} number={number} onDelete={onDelete} id={id} key={id} />
        )
      )}
    </ul>
  );
}