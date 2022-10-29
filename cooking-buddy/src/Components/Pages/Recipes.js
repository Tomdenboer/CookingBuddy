import RecipeList from '../Recipes/RecipeList';
import styles from './Recipes.module.css';
import { useEffect } from 'react';

const recipeList = [
    {
        "id": 1,
        "name": "Chili con carne",
        "vegetarian": false
    },
    {
        "id": 2,
        "name": "Spaghetti",
        "vegetarian": false
    },
    {
        "id": 3,
        "name": "Fries",
        "vegetarian": true
    },
    {
        "id": 4,
        "name": "Pizza",
        "vegetarian": false
    },
    {
        "id": 5,
        "name": "Smoothie",
        "vegetarian": true
    },
    {
        "id": 6,
        "name": "Pudding",
        "vegetarian": true
    },
]

function Recipes() {
    // this effect is a decent way to set background dynamicly without scoped css. 
    useEffect(() => {
        document.body.classList.add(styles.body)
    }, []);
    return (
        <main>
            <RecipeList recipes={recipeList}></RecipeList>
        </main>
    );
}

export default Recipes;