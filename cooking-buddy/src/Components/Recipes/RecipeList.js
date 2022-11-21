import { useEffect, useState } from 'react';
import RecipeListItem from './RecipeListItem';
import apiUtils from '../../helpers/api/RecipesApi';
import { redirect } from 'react-router-dom';


function RecipeList(props) {
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