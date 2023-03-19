import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
import HomeIcon from '@mui/icons-material/Home';

export const NavBar = () => {
  return (
    <Box className={styles.header}>
         <NavLink to="/" className={styles.link_home}>
        <HomeIcon />
      </NavLink>
      <div  className={styles.nav}>
      <NavLink to="/register" className={styles.link}>
        Register
      </NavLink>
      <NavLink to="/login" className={styles.link}>
        Log In
      </NavLink>
      </div>
   
    </Box>
  );
};

export default NavBar;