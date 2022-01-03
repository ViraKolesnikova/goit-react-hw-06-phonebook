import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './phonebook/phonebook-reducer';

export const store = configureStore({
  reducer: rootReducer
})