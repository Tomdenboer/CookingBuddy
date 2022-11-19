import { useEffect, useState } from 'react';
import RecipeListItem from './RecipeListItem';
import apiUtils from '../../helpers/apiUtils';
import { redirect } from 'react-router-dom';


function RecipeList(props) {
    // const [recipes, setRecipes] = useState([]);
    // useEffect(() => {
    //     const getRecipes = async () => {
    //         // const recipeList = await(apiUtils.getRecipes());
    //         const recipeList = [];
    //         console.log("RecipeList.js: recipeList: " + (recipeList?.length > 0  ? recipeList : "[]"));
    //         setRecipes(recipeList);
    //     }
    //     getRecipes();
    // }, []);

    const recipeListItems = props.recipes.map((item) =>
        <RecipeListItem key={item.id} item={item}/>
    );
    return (
        <ul>
            {recipeListItems}
        </ul>
    )

}

export default RecipeList;