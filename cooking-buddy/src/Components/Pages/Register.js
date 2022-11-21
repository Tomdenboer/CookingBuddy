import { useEffect, useState } from "react";
import AuthenticationApi from "../../helpers/api/AuthenticationApi";
import CustomButton from "../Common/CustomButton";
import CustomInput from "../Common/CustomInput";
import styles from "./Register.module.css";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [validationMessage, setValidationMessage] = useState("");

    useEffect(() => {
        document.body.classList = (styles.body);
    }, []);

    function usernameChanged(e) {
        setUsername(e.target.value);
    }

    function passwordChanged(e) {
        setPassword(e.target.value);
    }

    function emailChanged(e) {
        setEmail(e.target.value);
    }

    async function registerNewUser() {
        if(username !== "" && password !== "" && email !== "") {
            const status = await AuthenticationApi.registerNewUser(username, password, email);
            if(status === 200) {
                setValidationMessage("Your account has been created!")
            } else {
                setValidationMessage("Something went wrong. Please make sure your username is unique.")
            }
        } else {
            setValidationMessage("Some of the fields are still empty.")
        }
    }

    return (
        <form className={styles.form}>
            <h4>Welcome to Cooking Buddy! Enter your information and start finding new recipes!</h4>
            <div>
                <h3>Username</h3>
                <CustomInput type="text" placeholder="Enter a username" keyevent={usernameChanged}></CustomInput>
            </div>
            <div>
                <h3>Password</h3>
                <CustomInput type="password" placeholder="password" keyevent={passwordChanged}></CustomInput>
            </div>
            <div>
                <h3>Email</h3>
                <CustomInput type="email" placeholder="email" keyevent={emailChanged}></CustomInput>
            </div>
            <div>
                <p>{validationMessage}</p>
            </div>
            <div>
                <CustomButton clickEvent={registerNewUser} content="register"></CustomButton>
            </div>
        </form>
    );
}

export default Register;