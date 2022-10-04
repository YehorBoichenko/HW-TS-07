import React from 'react';
import { ChangeEvent, useEffect } from 'react';
import {ContactForm} from './ContactForm/ContactForm';
import { ContactList } from './ContactLIst/ContactList';
import { useAppDispatch, useAppSelector } from '../customHooks'
import { getContacts, getFilter } from '../redux/contacts-selectors';
import { deleteUser, fetchUsers } from '../redux/itemsOperations';
import { checkContact } from '../redux/contacts-actions';
import { Filter } from './Filter/Filter';
import { Title } from './Title/Title';
import styles from '../App.module.css';

export const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(getContacts);
  const filteritem = useAppSelector(getFilter);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const handleChange = (event:ChangeEvent<HTMLInputElement>):void => {
    const { value } = event.target as EventTarget & {value: string}
    dispatch(checkContact(value));
  };

  const handleFilters = ():{name:string, number:string, id:string}[] => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filteritem.toLowerCase())
    );
  };

  const handleDelete = (id:string):void => {
    dispatch(deleteUser(id));
  };
  return (
    <>
      <section className={styles.section}>
        <Title text="PhoneBook" />
        <ContactForm />
        <Title text="Contacts" />
        <Filter value={filteritem} onChange={handleChange}/>
        <ContactList contact={handleFilters()} onDelete={handleDelete}/>
      </section>
    </>
  );
}
