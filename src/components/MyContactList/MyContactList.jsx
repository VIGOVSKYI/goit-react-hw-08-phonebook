import PropTypes from 'prop-types';

import styles from './my-contact-list.module.css';

const MyContactList = ({ deleteContact, contacts }) => {
  console.log(contacts)
  const items = contacts.map(({ id, name, phone }) => (
    <li key={ id } className={styles.item}>
      {name}: {phone}
      <button onClick={() => deleteContact(id)} className={styles.btn}>
        Delete
      </button>
    </li>
  ));
  return <ul>{items}</ul>;
};

export default MyContactList;

MyContactList.defaultProps = {
  contacts: [],
};

MyContactList.prototypes = {
  onClick: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
