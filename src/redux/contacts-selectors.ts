export const getContacts =(state: { items: { name: string, number: string, id: string }[] }) =>
  state.items;
export const getFilter = (state: {filter:string})=> state.filter;
