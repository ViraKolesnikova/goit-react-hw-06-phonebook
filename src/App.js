import { useEffect } from 'react';


import Form from './components/Form';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import { saveToLS, getFromLS } from './utils/localStorage';


export default function App() {
  
  // useEffect(() => {
  //   const savedContacts = getFromLS('contacts');
  //   savedContacts &&  setContacts(savedContacts);
  // }, []);

  // useEffect(() => {
  //   saveToLS('contacts', contacts);
  // }, [contacts]);

  return (
      <>
        <h1>Phonebook</h1>
        <Form />

        <h2>Contacts</h2>
        <Filter />

        <ContactList />
      </>
    );
}

