import styles from "./Question.module.css";
import CustomButton from "../Common/CustomButton";
import IngredientPicker from "../SideBar/IngredientPicker";
import { useEffect, useState } from "react";

function IngredientsQuestion(props) {
    const  [ingredients, setIngredients] = useState([
        {"name": "potatoes", "isChecked": false}, 
        {"name" : "strawberries", "isChecked": false}, 
        {"name" : "rice", "isChecked" : false}
    ]);

    useEffect(() => {
        console.log(ingredients);
    });

    function ingredientAdded(ingredient) {
        setIngredients((oldIngredients) => [...oldIngredients, ingredient]);
        
    }

    // returns the names of ingredients that have isChecked === true.
    function getSelectedIngredients() {
        return ingredients.filter((ingredient) => ingredient.isChecked === true)
        .map((item) => item = item.name);
    }
    return (
        <div className={styles.question}>
            <h2>Question 5</h2>
            <h4>Select ingredients you want to use.</h4>
            <div className={styles.ingredients}>
                <IngredientPicker ingredients={ingredients} hideLabel={true} ingredientAdded={ingredientAdded} />
            </div>

            {/* Only the selected ingredients are sent to the clickEvent. */}
            <CustomButton content="Show me the recipes" clickEvent={() => props.event(getSelectedIngredients())}/> 
        </div>
    )
}

export default IngredientsQuestion;