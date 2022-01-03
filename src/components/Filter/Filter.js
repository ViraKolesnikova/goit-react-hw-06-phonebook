import { useSelector, useDispatch } from 'react-redux';   
import PropTypes from 'prop-types';

import {changeFilter} from '../../redux/phonebook/phonebook-actions'
import s from './Filter.module.css';

export default function Filter() {
  const filterValue = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  console.log(filterValue);
  
  return (
    <label className={s.filterLabel}>
      Find contacts by name
      <input
        type="text"
        value={filterValue}
        className={s.filterInput}
        onChange={e => dispatch(changeFilter(e.target.value))}
        onBlur={e => dispatch(changeFilter(''))}
      />
    </label>
  );
}

Filter.propTypes = {
  onFilterInputEnter: PropTypes.func.isRequired,
  onFilterOut: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};
