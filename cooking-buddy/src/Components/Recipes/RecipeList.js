import { useEffect, useState } from 'react';
import RecipeListItem from './RecipeListItem';
import apiUtils from '../../helpers/apiUtils';
import { redirect } from 'react-router-dom';


function RecipeList(props) {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        console.log("using effect");
        const getRecipes = async () => {
            const recipeList = await(apiUtils.test());
            console.log(recipeList);
            setRecipes(recipeList);
        }
        getRecipes();
    }, []);

    const recipeListItems = recipes.map((item) =>
        <RecipeListItem key={item.id} item={item}/>
    );
    return (
        <ul>
            {recipeListItems}
        </ul>
    )

}

export default RecipeList;