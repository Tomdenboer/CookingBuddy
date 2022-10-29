import styles from './NavBar.module.css';
import CustomButton from '../Common/CustomButton';
// import HamburgerButton from './HamburgerButton';

function NavBar() {
    return (
        <nav className={styles.navBar}>
            <ul className={styles.menuItems}>
                <li><a href="/" className={styles.link}>Home</a></li>
                <li><a href="#" className={styles.link}>Find me a Recipe</a></li>
                <li><a href="recipes" className={styles.link}>All Recipes</a></li>
                <li><a href="#" className={styles.link}>Profile</a></li>
                <li><CustomButton content="Sign in" size="small"></CustomButton></li>
                <li><CustomButton content="Register" size="small"></CustomButton></li>
                 {/* hamburger button might be useful for mobile but does not add value on desktop */}
                {/* <li><HamburgerButton/></li> */}
            </ul>
        </nav>
    );
}

export default NavBar;