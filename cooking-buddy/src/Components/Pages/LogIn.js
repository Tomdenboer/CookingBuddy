import AuthenticationApi from "../../helpers/api/AuthenticationApi";
import CustomInput from "../Common/CustomInput";
import CustomButton from "../Common/CustomButton";
import styles from "./Register.module.css";
import { useContext, useEffect, useState } from "react";
import {AuthenticationContext} from "../../context/AuthenticationContext";

function LogIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {handleLogin} = useContext(AuthenticationContext);
    const [validationMessage, setValidationMessage] = useState("");

    useEffect(() => {
        document.body.classList.add(styles.body);
    });

    function usernameChanged(e) {
        setUsername(e.target.value);
    }

    function passwordChanged(e) {
        setPassword(e.target.value);
    }

    async function signIn() {
        const result = await AuthenticationApi.logIn(username, password);
        if(result.status === 200) {
            handleLogin(result.data);
        } else {
            setValidationMessage("Incorrect username or password. Please try again.")
        }
    }

    return (
        <form className={styles.form}>
            <div>
                <h3>Username</h3>
                <CustomInput type="text" keyevent={usernameChanged} placeholder="username" />
            </div>
            <div>
                <h3>Password</h3>
                <CustomInput type="password" keyevent={passwordChanged} placeholder="password" />
            </div>
            <div id="loginValidation">
                <p>{validationMessage}</p>
            </div>
            <div>
                <CustomButton content="Log in" clickEvent={signIn}/>
            </div>
        </form>
    )
}
export default LogIn;