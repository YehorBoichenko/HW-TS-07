import React from 'react';
import styles from '../ContactForm/ContactForm.module.css';
import  {addUsers}  from '../../redux/itemsOperations';
import { getContacts } from '../../redux/contacts-selectors';
import {useAppDispatch, useAppSelector} from '../../customHooks'
import { useState } from 'react';

export const ContactForm = () => {
  const [nameItem, setNameItem] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const contacts = useAppSelector(getContacts);
  const dispatch = useAppDispatch();
  
  const formSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const isContactExist = contacts.some(
      ({ name }: { name: string }) => nameItem === name
    );
    if (isContactExist) {
      alert(`Name is already in contact`);
      return;
    }
    const contact = { name: nameItem, number };
    dispatch(addUsers(contact));
    setNameItem('');
    setNumber('');
  };
  const handleChanger = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'name') {
      setNameItem(value);
    } else if (name === 'phone') {
      setNumber(value);
    }
  };


  return (
    <>
      <form className={styles.form} onSubmit={formSubmit}>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={nameItem}
            onChange={handleChanger}
            placeholder="Name"
          />
        </label>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChanger}
            placeholder="Phone"
          />
        </label>
        <button type="submit" className={styles.button}>
          Add contacts
        </button>
      </form>
    </>
  );
};

export default ContactForm;
