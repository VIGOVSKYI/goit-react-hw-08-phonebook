import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { Box, Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

import styles from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());
  return (
    <Box className={styles.box}>
      <p className={styles.name}>Hello, {user.name}</p>
      <Button
        variant="contained"
        size="small"
        type="button"
        onClick={handleLogOut}
        className={styles.btn}
      >
        <LogoutIcon />
      </Button>
    </Box>
  );
};