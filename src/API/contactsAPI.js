import axios from 'axios';

axios.defaults.baseURL = 'https://62f25c79b1098f1508112d73.mockapi.io';

export const getContacts = async () => {
  return await axios.get('/contacts');
};

export const addNewContact = async contact => {
  console.log(contact);
  return axios.post('/contacts', contact);
};
export const deleteContact = async id => {
  return axios.delete(`/contacts/${id}`);
};
