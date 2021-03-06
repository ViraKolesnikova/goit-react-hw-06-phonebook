import {  useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/phonebook/phonebook-actions';
import PropTypes from 'prop-types';

import s from './ContactItem.module.css';

export default function ContactItem({ id, name, phoneNumber }) {
  const dispatch = useDispatch();
  return (
    <li className={s.contactListItem}>
      <p>
        {name}: <span>{phoneNumber}</span>
      </p>
      <button
        className={s.deleteContactBtn}
        type="button"
        onClick={()=>dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
