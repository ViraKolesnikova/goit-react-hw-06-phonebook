import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {saveContact, deleteContact, changeFilter } from './phonebook-actions';

const itemsReducer = createReducer([], {
  [saveContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) => state.filter(contact => contact.id !== action.payload),  
})
  
const filterReducer = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
})

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
})
