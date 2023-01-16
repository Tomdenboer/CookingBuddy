import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthenticationApi from "../../helpers/api/AuthenticationApi";
import { AuthenticationContext } from "../../context/AuthenticationContext";
import CustomButton from "../Common/CustomButton";
import CustomInput from "../Common/CustomInput";
import styles from "./Register.module.css";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [validationMessage, setValidationMessage] = useState("");
    const {handleLogin} = useContext(AuthenticationContext);
    const navigate = useNavigate();

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
                setValidationMessage("Your account has been created!");

                // login after registering and navigate to home.
                const result = await AuthenticationApi.logIn(username, password);
                if(result.status === 200) {
                    handleLogin(result.data);
                    navigate("/");
                }
            } else {
                setValidationMessage("Something went wrong. Please make sure your username and email address are unique.");
            }
        } else {
            setValidationMessage("Some of the fields are still empty.");
        }
    }

    return (
        <form className={styles.form}>
            <h3 className={styles.header}>Welcome to Cooking Buddy</h3>
            <h3 className={styles.subTitle}>Enter your information and start finding new recipes</h3>
            <div>
                <h3 className={styles.subTitle}>Username</h3>
                <CustomInput type="text" placeholder="Enter a username" keyevent={usernameChanged}></CustomInput>
            </div>
            <div>
                <h3 className={styles.subTitle}>Password</h3>
                <CustomInput type="password" placeholder="password" keyevent={passwordChanged}></CustomInput>
            </div>
            <div>
                <h3 className={styles.subTitle}>Email</h3>
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