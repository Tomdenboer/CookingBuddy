import styles from "./Question.module.css";
import CustomButton from "../Common/CustomButton";

function PaleoQuestion(props) {
    return (
        <div className={styles.question}>
            <h2>Question 4</h2>
            <h4>Are you following a paleo diet?</h4>
            <span className={styles.buttonContainer}>
                <CustomButton clickEvent={() => {props.event(true)}} content="Yes"/>
                <CustomButton clickEvent={() => {props.event(false)}} content="No"/>
            </span>
        </div>
    )
} 

export default PaleoQuestion;