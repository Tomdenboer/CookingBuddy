import RecipeList from '../Recipes/RecipeList';
import FilteringSideBar from '../SideBar/FilteringSideBar';
import CustomButton from '../Common/CustomButton';
import styles from './Recipes.module.css';
import recipesApi from '../../helpers/api/RecipesApi';
import { useEffect, useState } from 'react';

function Recipes() {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        const getRecipes = async () => {
            const recipeList = await(recipesApi.getRecipes());
            // const recipeList = [];
            console.log("RecipeList.js: recipeList: " + (recipeList?.length > 0  ? recipeList : "[]"));
            setRecipes(recipeList);
        }
        getRecipes();
    }, []);

    useEffect(() => {
        document.body.classList.add(styles.body);
    }, []);

    function recipesChanged(recipes) {
        setRecipes(recipes);
    }

    return (
        <main className={styles.container}>
            <FilteringSideBar recipesChanged={recipesChanged}/>
            <RecipeList recipes={recipes} className={styles.recipes}></RecipeList>
        </main>
    );
}

export default Recipes;