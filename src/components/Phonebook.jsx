import styles from './Phonebook.module.css';
import ContactsList from './ContactsList/ContactsList';
import AddForm from './Form/Form';
import Filter from './Filter/Filter';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsOperations';

export default function Phonebook() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
      <div className={styles.wrapper}>
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <h4 className={styles.title}>Name</h4>
          <AddForm />
        </div>
        <div className={styles.block}>
          <h4 className={styles.title}>Contacts</h4>
          <Filter />
          <ContactsList />
        </div>
      </div>
    </div>
  );
}
