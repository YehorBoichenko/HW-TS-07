import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = 'https://62f25c79b1098f1508112d73.mockapi.io';

export const getContacts = (): Promise<AxiosResponse<{ id: string, name:string, phone:string }[]>> => {
  return axios.get('/contacts');
};

export const addNewContact =(contact: { name:string, number: string}) => {
  return axios.post('/contacts', contact);
};
export const deleteContact = (id: string) => {
  return axios.delete(`contacts/${id}`);
};