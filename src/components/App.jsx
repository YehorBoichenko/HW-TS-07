import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactLIst/ContactList';
import Filter from './Filter/Filter';
import Title from './Title/Title';
import styles from '../App.module.css';

export default function App() {
  return (
    <>
      <section className={styles.section}>
        <Title text="PhoneBook" />
        <ContactForm />
        <Title text="Contacts" />
        <Filter />
        <ContactList />
      </section>
    </>
  );
}
