import RecipeList from '../Recipes/RecipeList';
import FilteringSideBar from '../SideBar/FilteringSideBar';
import CustomButton from '../Common/CustomButton';
import styles from './Recipes.module.css';
import recipesApi from '../../helpers/api/RecipesApi';
import { useContext, useEffect, useState } from 'react';
import { AuthenticationContext } from '../../context/AuthenticationContext';
import { useNavigate } from 'react-router-dom';

function Recipes() {
    const [recipes, setRecipes] = useState([]);
    const navigate = useNavigate();
    const {isAuthenticated} = useContext(AuthenticationContext);
    useEffect(() => {
        if(!isAuthenticated ()) {
            navigate("/signin");
        }
    })
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
        document.body.classList = (styles.body);
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