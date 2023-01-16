import AuthenticationApi from "../../helpers/api/AuthenticationApi";
import CustomInput from "../Common/CustomInput";
import CustomButton from "../Common/CustomButton";
import styles from "./Register.module.css";
import { useContext, useEffect, useState } from "react";
import {AuthenticationContext} from "../../context/AuthenticationContext";
import { useNavigate } from "react-router-dom";

function LogIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {handleLogin} = useContext(AuthenticationContext);
    const [validationMessage, setValidationMessage] = useState("");
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

    async function signIn() {
        if(username !== "" && password !== "") {
            const result = await AuthenticationApi.logIn(username, password);
            if(result.status === 200) {
                handleLogin(result.data);
                navigate("/");
            } else {
                    setValidationMessage("Incorrect username or password. Please try again.")
                }
        } else {
            setValidationMessage("Please fill in all the fields.")
        }
    }

    return (
        <form className={styles.form}>
            <h3 className={styles.header}>Log in to Cooking Buddy</h3>
            <div>
                <h3 className={styles.subTitle}>Username</h3>
                <CustomInput type="text" keyevent={usernameChanged} placeholder="username" />
            </div>
            <div>
                <h3 className={styles.subTitle}>Password</h3>
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