import styles from "./IngredientPicker.module.css";
import CustomInput from "../Common/CustomInput";
import { useEffect } from "react";

function IngredientPicker (props) {
    useEffect(() => {
        if(props.ingredients?.length > 0) {
            props.ingredients.forEach((item) => {
                addToUL(item);
            })
        }
    }, []);
    
    function handleKeyEvent(e) {
        if(e.keyCode === 13) {
            // right now there are no checks on special characters and that kind of stuff, in a live application this would be a security risk. 
            const newIngredient = {
                "name" : e.target.value.toLowerCase(),
                "isChecked": true
            }
            if(!checkForDuplicates(newIngredient) && e.target.value != "") {
                addToUL(newIngredient);
                props.ingredientAdded(newIngredient);
            }
            e.target.value = "";
        }
        setVisibilityPressEnterMessage(e);
    }

    /* 
        Checks if there is already an ingredient with the same name in the list.
        NOTE: if I had a backend I would definitely use ids instead of names. 
        This works as well though, it also ensures that ingredient names are unique, which makes the filtering easier. 
    */
    function checkForDuplicates(ingredient) {
        for(var i=0; i< props.ingredients.length; i++) {
            if(props.ingredients[i].name === ingredient.name) {
                return true;
            }
        } return false;
    }

    function selectionChanged(ingredient, isChecked){
        ingredient.isChecked = isChecked;
        // props.ingredientAdded(ingredient);
    }

    function addToUL(ingredient) {

        //  First we create the li. Not a fan of the way I set the styling but as long as this is all styling needed, this will work.
        let li = document.createElement("li");
        li.style.listStyleType = "none";
    
        // Then we create the checkbox and append it to the li. New entries will be checked by default.
        let input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.checked = ingredient.isChecked;
        input.onclick = () => {selectionChanged(ingredient, input.checked)};
        li.appendChild(input);
    
        // This one is needed because when you set the innerHTML/Text of li, it overwrites the entire thing and the checkbox wont show up.
        let text = document.createElement("span");
        text.innerHTML = ingredient.name;
        
        // Append the li to the ul.
        li.appendChild(text);
        var ul = document.getElementById("ingredientsList");
        ul.appendChild(li);
    }

    return (
        <div>
            {props.hideLabel !== true &&
               <h3>Ingredients</h3>
            }
            <ul id="ingredientsList" className={styles.ul}></ul>
            <CustomInput placeholder="Add Ingredient" keyevent={handleKeyEvent} type="text"></CustomInput>
            <p id="pressEnter" className={styles.pressEnter}>Press enter to add to the list</p>
        </div>
    );
}

function setVisibilityPressEnterMessage(e) {
    const message = document.getElementById("pressEnter");
    if(e.keyCode === 13 || e.target.value === null || e.target.value === "") {
        message.style.visibility = "hidden";
    } else {
        message.style.visibility = "visible";
    }
}

export default IngredientPicker;