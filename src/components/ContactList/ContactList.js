import { useSelector } from 'react-redux';

import ContactItem from '../ContactItem';
import s from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filterWord = useSelector(state => state.contacts.filter);
  
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterWord.toLowerCase()),
  );

  return (
    <ul className={s.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          phoneNumber={number}          
        />
      ))}
    </ul>
  );
}
