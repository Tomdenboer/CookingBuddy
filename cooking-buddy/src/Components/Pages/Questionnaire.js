import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState, useRef } from "react";
import { AuthenticationContext } from "../../context/AuthenticationContext";
import styles from "./Questionnaire.module.css";
import TimeToPrepareQuestion from "../Questions/TimeToPrepareQuestion";
import VegetarianQuestion from "../Questions/VegetarianQuestion";
import VeganQuestion from "../Questions/VeganQuestion";
import PaleoQuestion from "../Questions/PaleoQuestion";
import IngredientsQuestion from "../Questions/IngredientsQuestion";

function Questionnaire () {
    const isInitialRender = useRef(true);
    const {isAuthenticated} = useContext(AuthenticationContext);
    const [diets, setDiets] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [timeToPrepare, setTimeToPrepare] = useState(0);
    const [visibleElement, setVisibleElement] = useState(null);
    const navigate = useNavigate();
    const [count, setCount] = useState(0);

    // List of elements we render on this page, once a question is answered, it will show the next one using the visibleElement state variable. 
    const elements = {
        "TimeToPrepare" : <TimeToPrepareQuestion event={handleTimeToPrepareEvent} />,
        "Vegetarian" : <VegetarianQuestion event={handleVegetarianEvent} />,
        "Vegan" : <VeganQuestion event={handleVeganEvent}/>,
        "Paleo" : <PaleoQuestion event={handlePaleoEvent}/>,
        "Ingredients" : <IngredientsQuestion event={handleIngredientsEvent}/>
    } 
    


    useEffect(() => {
        document.body.classList = styles.body;
        setVisibleElement(elements.TimeToPrepare);
    }, []);

    useEffect(() => {
        if(!isAuthenticated ()) {
            navigate("/signin");
        }
    });

    useEffect(() => {
        // Only execute this if it's not the first time the component renders.
        if(isInitialRender.current === false) {
            navigateToRecipes(diets, ingredients, timeToPrepare);
        }
        isInitialRender.current = false;

    }, [ingredients])

    function handleTimeToPrepareEvent(isQuickMeal) {
        // If the user selects quick meal, the max time to prepare will be set to twenty.
        if(isQuickMeal){
            setTimeToPrepare(25);
        }
        setVisibleElement(elements.Vegetarian);
    }

    function handleVegetarianEvent(isVegetarian) {
        if(isVegetarian) {
            //  Since there will never be another diet added to the array before this one, we can do it like this.
            setDiets(["vegetarian"]);
        }
        setVisibleElement(elements.Vegan);
    }

    function handleVeganEvent(isVegan) {
        if(isVegan) {
            setDiets((oldDiets) => [...oldDiets, "vegan"]);
        }
        setVisibleElement(elements.Paleo);
    }

    function handlePaleoEvent(isPaleo) {
        if(isPaleo) {
            setDiets((oldDiets) => [...oldDiets, "paleo"]);
        }
        setVisibleElement(elements.Ingredients);
    }

    function handleIngredientsEvent(ingredients) {

        setIngredients(ingredients);

    }

    function navigateToRecipes(dietsList, ingredientsList, maxReadyTime) {
        // There were some difficulties with rendering and empty states, so I call this function from the useEffect after ingredients is set. 
        // In here we create the url with parameters that we send to Recipes.
        // In there we will get the values from the params and use it to make a call to the recipes API.
        let basePath = "/recipes?"
        let dietParams = "";
        let ingredientsParams = "";

        if(dietsList?.length > 0) {
            dietParams = "diets=" + dietsList.toString();
            if(ingredientsList?.length > 0 || maxReadyTime > 0) {
                dietParams += "&";
            } 
        }   
        
        if(ingredientsList?.length > 0) {
            ingredientsParams = "ingredients=" + ingredientsList.toString();
            if(maxReadyTime > 0) {
                ingredientsParams += "&";
            }
        } 

        const timeToPrepareParams =  maxReadyTime > 0 ? "timeToPrepare=" + maxReadyTime : "";

        const fullPath = basePath + dietParams + ingredientsParams + timeToPrepareParams;
        navigate(fullPath);
    }


    return (
        <div className={styles.question}>
            {visibleElement}
        </div>
    );

}

export default Questionnaire;