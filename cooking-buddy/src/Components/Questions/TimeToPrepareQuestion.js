import { useEffect } from "react";
import CustomButton from "../Common/CustomButton";
import styles from "./Question.module.css";

function TimeToPrepareQuestion(props) {
    return (
        <div className={styles.question}>
            <h2>Question 1</h2>
            <h4>Do you want to prepare a quick meal or take your time to create something special?</h4>
            <span className={styles.buttonContainer}>
                <CustomButton content="Quick meal" clickEvent={() => {props.event(true)}}/>
                <CustomButton content="Something special" clickEvent={() => {props.event(false)}}/>
            </span>
        </div>
    );
}

export default TimeToPrepareQuestion