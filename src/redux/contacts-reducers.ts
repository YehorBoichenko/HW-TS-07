import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { checkContact } from './contacts-actions';
import {fetchUsers,addUsers, deleteUser} from './itemsOperations'

const itemsSlice = createSlice({
  name: 'contacts',
  initialState: initialState.add,
  extraReducers: {
    [fetchUsers.fulfilled.toString()]: (_, action) => action.payload,
    [addUsers.fulfilled.toString()]: (state, action) => [...state, action.payload],
    [deleteUser.fulfilled.toString()]: (state, action) => state.filter(item => item.id !== action.payload),
  },
  reducers: {}
});

const filterReducer = createReducer(initialState.filter, {
  [checkContact.toString()]: (_, action) => action.payload,
});

export const contactsReducer = combineReducers({
  items: itemsSlice.reducer,
  filter: filterReducer,
});


