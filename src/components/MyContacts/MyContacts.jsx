import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import MyContactList from '../MyContactList/MyContactList.jsx';
import MyContactFilter from '../MycontactFilter/MyContactFilter.jsx';
import MyContactForm from '../MyContcatForm/MyContactForm.jsx';

import { fetchAllContacts, fetchAddContact, fetchDeleteContact } from '../../redux/contacts/contacts-operations';
import { setFilter } from '../../redux/filter/filter-slice';

import { getFilteredContact } from '../../redux/contacts/contacts-selectors';
import { getFilter } from '../../redux/filter/filter-selectors';

import styles from './my-contacts.module.css';

const MyContacts = () => {
  const filteredContacts = useSelector(getFilteredContact);

  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const onAddContact = ({ name, phone }) => {
    dispatch(fetchAddContact({ name, phone }));
  };

  const onDeleteContact = (id) => {
    const action = fetchDeleteContact(id);
    dispatch(action);
  };

  const handlFilter = ({ target }) => {
    const action = setFilter(target.value);
    dispatch(action);
  };

  return (
    <div>
      <h3 className={styles.title}>My contacts</h3>
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <h4 className={styles.title}>Name</h4>
          <MyContactForm onSubmit={onAddContact} />
        </div>
        <div className={styles.block}>
          <h4 className={styles.title}>Contacts</h4>
          <MyContactFilter value={filter} handlFilter={handlFilter} />
          <MyContactList deleteContact={onDeleteContact} contacts={filteredContacts} />
          {!filteredContacts.length && <p className={styles.message}>No contacts in the list</p>}
        </div>
      </div>
    </div>
  );
};

export default MyContacts;
