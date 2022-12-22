import RecipeList from '../Recipes/RecipeList';
import FilteringSideBar from '../SideBar/FilteringSideBar';
import styles from './Recipes.module.css';
import recipesApi from '../../helpers/api/RecipesApi';
import { useContext, useEffect, useState } from 'react';
import { AuthenticationContext } from '../../context/AuthenticationContext';
import { useNavigate, useSearchParams } from 'react-router-dom';

function Recipes() {
    const [recipes, setRecipes] = useState([]);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const {isAuthenticated} = useContext(AuthenticationContext);
    useEffect(() => {
        if(!isAuthenticated ()) {
            navigate("/signin");
        }
    });
    useEffect(() => {
        // If the searchparams are populated (which happens when we come from the questionnaire), we get recipes based on these parameters.
        // Otherwise we will do a normal get call to get recipes.
        var params = Object.fromEntries([...searchParams]);

        // Check if params is empty.
        if(Object.keys(params).length === 0) {
            const getRecipes = async () => {
                const recipeList = await(recipesApi.getRecipes());
                setRecipes(recipeList);
            }
            getRecipes();
        } else {
            // Get the values from the url and make arrays out of diets and ingredients parameters.
            const diets = params.diets?.split(",");
            const ingredients = params.ingredients?.split(",");
            const timeToPrepare = params.timeToPrepare;
            const getRecipesFiltered = async () => {
                const filteredRecipes = await(recipesApi.getFilteredRecipes(diets, ingredients, timeToPrepare));
                setRecipes(filteredRecipes);
            }
            getRecipesFiltered();
        }
        
    }, []);

    useEffect(() => {
        document.body.classList = (styles.body);
    }, []);

    function recipesChanged(recipes) {
        setRecipes(recipes);
    }

    return (
        <main className={styles.container}>
            <FilteringSideBar recipesChanged={recipesChanged}/>
            {recipes.length === 0 && 
                <p className={styles.noRecipesFoundMessage}>Uh oh, no recipes were found. Try to adjust your filter parameters...</p>
            }
            {recipes.length > 0 &&
                <RecipeList recipes={recipes} className={styles.recipes}></RecipeList>
            }
        </main>
    );
}

export default Recipes;