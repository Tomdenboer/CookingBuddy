import CustomButton from "../Common/CustomButton";
import IngredientPicker from "./IngredientPicker";
import styles from "./FilteringSideBar.module.css"
import { useEffect, useState } from "react";
import CustomInput from "../Common/CustomInput";
import apiUtils from "../../helpers/apiUtils";

function FilteringSideBar(props) {
    const [ingredients, setIngredients] = useState([{"name": "potatoes", "isChecked": false}, {"name": "strawberries", "isChecked": false}, {"name": "rice", "isChecked": false}]);
    const [diets, setDiets] = useState([{"name": "vegetarian", "isChecked" : true}, {"name": "vegan", "isChecked" : false}, {"name": "paleo", "isChecked" : false} ]);
    const [timeToPrepare, setTimeToPrepare] = useState(0);

    const dietsUL = diets.map((item) => 
        <li key={item.name} className={styles.li}><input type="checkbox" defaultChecked={item.isChecked} 
        onClick={() => setDietChecked(item)}></input>{item.name}</li>
    );


    //console.log 
    useEffect(() => {
        console.log(timeToPrepare);
    });

    // I kinda think there might be a better way to do this, but it works, and it's only 2 lines so it's not too bad.
    function setDietChecked(diet) {
        const element = diets.find((item) => item === diet);
        element.isChecked = !element.isChecked;
    }

    function ingredientAdded (ingredient) {
        setIngredients((oldIngredients) => [...oldIngredients, ingredient]);
    };

    function timeToPrepareChanged (e) {
        console.log(timeToPrepare);
        if(isNaN(e.target.value)) {
            console.log("Input value is not a number");
        } else {
            const minutes = parseInt(e.target.value);
            setTimeToPrepare(minutes);
        }
      
    }
   
    async function filterResults () {
        let selectedDiets = diets.filter((item) => item.isChecked === true);
        selectedDiets = selectedDiets.map((item) => item = item.name);
        
        let selectedIngredients = ingredients.filter((item) => item.isChecked === true);
        selectedIngredients = selectedIngredients.map((item) => item = item.name);

        const results = await apiUtils.getFilteredRecipes(selectedDiets, selectedIngredients, timeToPrepare);
        props.recipesChanged(results);
    }

    return (
        <div className={styles.sideBar}>
            <h2>Filters</h2>
            <div>
                {/* The different diets are hardcoded since we do not use a database in this application. */}
                <ul className={styles.ul}>{dietsUL}</ul>
            </div>
            <div className={styles.ingredients}>
                <IngredientPicker ingredientAdded={ingredientAdded} ingredients={ingredients}/>
            </div>
            <div>
                <h3>Time to prepare</h3>
                {/* This input doesn't restrict numbers only. Might be an issue in a live application.  */}
                <CustomInput placeholder="Time in minutes" keyevent={timeToPrepareChanged} type="text"/>
            </div>
            <div className={styles.marginTop}>
                <CustomButton clickEvent={filterResults} className={styles.button} size="small" content="Filter results"></CustomButton>
            </div>
        </div>
    );
}



export default FilteringSideBar;