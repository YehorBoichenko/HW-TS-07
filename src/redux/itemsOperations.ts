import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContacts,
  addNewContact,
  deleteContact,
} from '../API/contactsAPI';

export const fetchUsers = createAsyncThunk('contacts/fetchUsers', async () => {
  const response = await getContacts();
  return response.data;
});

export const addUsers = createAsyncThunk(
  'contacts/addUser',
  async (contact: { name: string, number: string }) => {
    const response = await addNewContact(contact);
    return response.data;
  }
);

export const deleteUser = createAsyncThunk(
  'contacts/deleteUsers',
  async (id: string) => {
    const response = await deleteContact(id);
    return response.data.id;
  }
);
