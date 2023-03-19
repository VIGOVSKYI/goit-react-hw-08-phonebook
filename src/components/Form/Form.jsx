import styles from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsOperations';
import { Formik, Form, Field } from 'formik';
import { getIsLoading } from 'redux/selectors';

const AddForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const initialValues = {
    name: '',
    number: '',
  };

  const handleFormSubmit = (contact, { resetForm }) => {
    dispatch(addContact(contact));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
      <Form className={styles.phonebook}>
        <label>
          <p>Name</p>
          <Field className={styles.input} type="text" name="name" />
        </label>
        <label>
          <p>Number</p>
          <Field className={styles.input} type="tel" name="number" />
        </label>
        <button className={styles.button} type="submit" disabled={isLoading}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default AddForm;
