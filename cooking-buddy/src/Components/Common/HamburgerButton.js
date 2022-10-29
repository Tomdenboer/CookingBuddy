/*
 pretty neat, only adds value on mobile though. leave for now. 
 */
import styles from './HamburgerButton.module.css';


function HamburgerButton() {
    return (
        <div id="hamburgerButton" className={styles.button} onClick={(e) => transform(e.target)}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
        </div>
    );

    }
    const transform = (target) => {
    var button = document.getElementById("hamburgerButton");
    console.log("clicked");
    console.log(target.classList);
    button.classList.toggle(styles.transform)
    };


export default HamburgerButton;