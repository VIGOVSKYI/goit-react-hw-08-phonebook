import { getFilteredContact } from '../../redux/contacts/contacts-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDeleteContact } from '../../redux/contacts/contacts-operations';

import styles from './my-contact-list.module.css';

const MyContactList = () => {
  const filteredContacts = useSelector(getFilteredContact);
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    const action = fetchDeleteContact(id);
    dispatch(action);
  };

  return (
    <>
      {filteredContacts.length > 0 && (
        <ul>
          {filteredContacts?.map(({ id, name, phone }) => (
            <li key={id} className={styles.item}>
              {name}: {phone}
              <button
                onClick={() => onDeleteContact(id)}
                className={styles.btn}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      {!filteredContacts.length && (
        <p className={styles.message}>No contacts in the list</p>
      )}
    </>
  );
};

export default MyContactList;
