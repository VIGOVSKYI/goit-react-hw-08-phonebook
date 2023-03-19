import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { registration } from 'redux/auth/authOperations';
import { Box } from '@mui/material';

import styles from './styles.module.css';

const RegisterPage = () => {
    const dispatch = useDispatch();
    const initialValues = {
      name: '',
      email: '',
      password: '',
    };
  
    const handleSubmit = ({ name, email, password }, { resetForm }) => {
      dispatch(registration({ name, email, password }));
      resetForm();
    };
    return (
        <Box
        margin={1}
        marginLeft="auto"
        marginRight="auto"
        width="400px"
        boxShadow={
          ' rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;'
        }
        backgroundColor="#ffff"
        borderRadius="5px"
      >
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className={styles.form}>
            <label className={styles.formElement} htmlFor="name">
              <span>Name</span>
              <Field className={styles.input} type="text" name="name" required />
            </label>
            <label className={styles.formElement} htmlFor="email">
              <span>Email</span>
              <Field className={styles.input} type="email" name="email" required />
            </label>
            <label className={styles.formElement} htmlFor="password">
              <span>Password</span>
              <Field
                className={styles.input}
                type="password"
                name="password"
                required
              />
            </label>
            <button className={styles.btn} type="submit">
              Register
            </button>
          </Form>
        </Formik>
      </Box>
    );
  };
  
  export default RegisterPage;