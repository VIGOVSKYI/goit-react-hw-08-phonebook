import { useSelector, useDispatch } from 'react-redux';
import { filterChange } from 'redux/filtersSlice';
import { getFilter } from 'redux/selectors';
import styles from "./filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const handleFilter = e => {
    dispatch(filterChange(e.currentTarget.value));
  };

    return (
      <label>
        <input
          className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={value}
          onChange={handleFilter}
        />
      </label>
    );
  };
  
  export default Filter;