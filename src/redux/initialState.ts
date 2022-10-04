interface IState {
  add: { name: string, number: string, id: string }[];
  filter: string;
}

export const initialState = {
  add: [],
  filter: '',
} as IState