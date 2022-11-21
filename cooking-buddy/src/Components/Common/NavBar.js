import styles from './NavBar.module.css';
import CustomButton from '../Common/CustomButton';
import { AuthenticationContext } from '../../context/AuthenticationContext';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect} from 'react';

function NavBar() {
    const {isAuthenticated} = useContext(AuthenticationContext);
    const {handleLogout} = useContext(AuthenticationContext);
    let registerRef = HTMLTimeElement;
    let loginRef = HTMLElement;
    let logOutRef = HTMLElement | null;
    const navigate = useNavigate();

    useEffect(() => {
        if(isAuthenticated()) {
            registerRef.style.display = "none";
            loginRef.style.display = "none";
            logOutRef.style.display = "inline";
        } else {
            registerRef.style.display = "inline";
            logOutRef.style.display = "none";
            loginRef.style.display = "inline";
        }
    });

    function signOut() {
        handleLogout();
        navigate("/");
    }

    return (
        <nav className={styles.navBar}>
            <ul className={styles.menuItems}>
                <li><a href="/" className={styles.link}>Home</a></li>
                <li><a href="#" className={styles.link}>Find me a Recipe</a></li>
                <li><a href="recipes" className={styles.link}>All Recipes</a></li>
                <li><a href="#" className={styles.link}>Profile</a></li>
                <li>
                    <div ref={node => {loginRef = node}}>
                        <CustomButton id="signIn" content="Sign in" path="/signin" size="small"></CustomButton>
                    </div>
                </li>
                <li>
                    <div ref={node => {registerRef = node}}>
                        <CustomButton id="register" content="Register" path="/register" size="small"></CustomButton>
                    </div>
                </li>
                <li>
                    <div ref={node => {logOutRef = node}}>
                         <CustomButton  id="logOut" content="Log out" clickEvent={signOut} cli size="small"></CustomButton>
                    </div>
                </li>
                
            </ul>
        </nav>
    );
}

export default NavBar;