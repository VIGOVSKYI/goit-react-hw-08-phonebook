import { useState } from 'react';

import PropTypes from 'prop-types';

import styles from './my-contact-form.module.css';

const MyContactForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    name: '',
    phone: '',
  });

  const handlSubmit = e => {
    e.preventDefault();
    const { name, phone } = state;
    onSubmit({ name, phone });
    setState({
      name: '',
      phone: '',
    });
  };

  const handlChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <form action="" onSubmit={handlSubmit}>
      <div className={styles.formGroup}>
        <input
          type="text"
          value={state.name}
          name="name"
          onChange={handlChange}
          className={styles.input}
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className={styles.formGroup}>
        <input
          onChange={handlChange}
          value={state.phone}
          className={styles.input}
          type="tel"
          name="phone"
          placeholder="Phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <button className={styles.btn}>Add contact</button>
    </form>
  );
};

export default MyContactForm;

MyContactForm.prototypes = {
  onSubmit: PropTypes.func.isRequired,
};
