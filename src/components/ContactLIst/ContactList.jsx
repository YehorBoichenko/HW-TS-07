import styles from '../ContactLIst/ContactList.module.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts-selectors';
import { get } from 'redux/contacts-actions';
import ContactListItem from './ContactsListItem';
export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  console.log(contacts);
  const normalizedContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  useEffect(() => {
    dispatch(get());
  }, [dispatch]);

  return (
    <ul className={styles.list}>
      {normalizedContacts.map(({ name, number, id }) => (
        <ContactListItem name={name} number={number} id={id} key={id} />
      ))}
    </ul>
  );
}
