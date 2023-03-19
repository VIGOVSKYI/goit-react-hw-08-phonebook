import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchAllContacts } from '../../redux/contacts/contacts-operations';

import MyContactList from '../MyContactList/MyContactList.jsx';
import MyContactFilter from '../MycontactFilter/MyContactFilter.jsx';
import MyContactForm from '../MyContcatForm/MyContactForm.jsx';

import styles from './my-contacts.module.css';

const MyContacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <div>
      <h3 className={styles.title}>My contacts</h3>
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <h4 className={styles.title}>Name</h4>
          <MyContactForm />
        </div>
        <div className={styles.block}>
          <h4 className={styles.title}>Contacts</h4>
          <MyContactFilter />
          <MyContactList />
        </div>
      </div>
    </div>
  );
};

export default MyContacts;
