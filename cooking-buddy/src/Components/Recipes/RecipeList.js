import { useEffect, useState } from 'react';
import RecipeListItem from './RecipeListItem';
import apiUtils from '../../helpers/apiUtils';


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

    // const list = props.recipes;
    // console.log(list);
    const recipeListItems = recipes.map((item) =>
        // <RecipeListItem key={item.id} id={item.id} name={item.title} vegetarian={item.vegetarian} healthScore={item.healthScore} img={item.image} timeToPrepare={item.readyInMinutes}/>
        <RecipeListItem key={item.id} item={item}/>
    );
    // console.log(recipes);
    // console.log(listItems);
    return (
        <ul>
            {recipeListItems}
        </ul>
    )

}

export default RecipeList;