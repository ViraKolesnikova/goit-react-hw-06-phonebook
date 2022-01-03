import { createAction } from "@reduxjs/toolkit";

export const saveContact = createAction('phonebook/save');
export const deleteContact = createAction('phonebook/delete');
export const filterContacts = createAction('phonebook/filter');
export const changeFilter=createAction('phonebook/changeFilter')

 