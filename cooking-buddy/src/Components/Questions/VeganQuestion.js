import styles from "./Question.module.css";
import CustomButton from "../Common/CustomButton";

function VeganQuestion(props) {
    return(
        <div className={styles.question}>
            <h2>Question 3</h2>
            <h4>Are you following a vegan diet?</h4>
            <div className={styles.buttonContainer}> 
                <CustomButton clickEvent={() => {props.event(true)}} content="Yes" />
                <CustomButton clickEvent={() => {props.event(false)}} content="No" />
            </div>
        </div>
    );
}

export default VeganQuestion;