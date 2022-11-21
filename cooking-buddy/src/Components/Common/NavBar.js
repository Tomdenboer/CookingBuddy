import styles from './NavBar.module.css';
import CustomButton from '../Common/CustomButton';

function NavBar() {
    return (
        <nav className={styles.navBar}>
            <ul className={styles.menuItems}>
                <li><a href="/" className={styles.link}>Home</a></li>
                <li><a href="#" className={styles.link}>Find me a Recipe</a></li>
                <li><a href="recipes" className={styles.link}>All Recipes</a></li>
                <li><a href="#" className={styles.link}>Profile</a></li>
                <li><CustomButton content="Sign in" path="/login" size="small"></CustomButton></li>
                <li><CustomButton content="Register" path="/register" size="small"></CustomButton></li>
            </ul>
        </nav>
    );
}

export default NavBar;