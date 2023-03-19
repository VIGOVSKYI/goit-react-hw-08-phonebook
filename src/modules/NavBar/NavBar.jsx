import { useSelector } from "react-redux";

import NavbarAuth from "./NavBarAuth/NavBarAuth";
import NavbarUser from "./NavBarUser/NavbarUser";

import NavbarMyContacts from "./NavMyContacts/NavBarMyContacts";

import styles from "./navbar.module.css";

import { isUserLogin } from "../../redux/auth/auth-selectors";


const Navbar = () => {
    const isLogin = useSelector(isUserLogin);

    return (
        <div className={styles.navbar}>
            {!isLogin && <NavbarAuth />}
            {isLogin && <NavbarUser />}
            {isLogin && <NavbarMyContacts />}

        </div>

    )
}

export default Navbar;