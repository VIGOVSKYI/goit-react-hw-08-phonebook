import { NavLink } from 'react-router-dom';

import styles from './navbar-contacts.module.css';

const NavbarMyContacts = () => {
  return (
    <div>

      <NavLink to="/contacts" className={styles.link}>MyContacts</NavLink>

    </div>
  );
};

export default NavbarMyContacts;