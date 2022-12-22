import styles from "./Question.module.css";
import CustomButton from "../Common/CustomButton";

function VegetarianQuestion(props) {
    return (
        <div className={styles.question}>
            <h2>Question 2</h2>
            <h4>Are you following a vegetarian diet?</h4>
            <div className={styles.buttonContainer}>
                <CustomButton clickEvent={() => {props.event(true)}} content="Yes" />
                <CustomButton clickEvent={() => {props.event(false)}} content="Nope"/>
            </div>
        </div>
    );
}

export default VegetarianQuestion;