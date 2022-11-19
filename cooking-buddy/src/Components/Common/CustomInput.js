import styles from "./CustomInput.module.css";

function CustomInput (props) {
    return (
        <input className={styles.input} placeholder={props.placeholder} type={props.type} 
        onKeyUp={props.keyevent}></input>
    );
}

export default CustomInput;