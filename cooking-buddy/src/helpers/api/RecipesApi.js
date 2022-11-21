import axios from 'axios';

// Normally you wouldn't store this in a client side app, of course. 
const apiKey = 'ee49ddfe10dd4f61b02797850ba8b30d';
export default {
      
    /* Limiting the number of items we get to 15 because of limited API access. 
        I do request extra recipe information, because this gives more options to filter recipes.*/
    getRecipes: async () => {
        try {
            const result = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey='+ apiKey + '&number=15&addRecipeInformation=true');
            const items = await result.data.results;
            return items;
        }
         catch(e) {
            console.log(e);
        }
    },

    getFilteredRecipes: async (diets, ingredients, timeToPrepare) => {
        const dietParams = diets.length > 0? "&diet=" + diets.join(",") : "";
        const ingredientParams = ingredients.length > 0? "&includeIngredients=" + ingredients.join(",") : "";
        const timeToPrepareParams = timeToPrepare > 0 ? "&maxReadyTime=" + timeToPrepare : "";

        const baseQuery = "https://api.spoonacular.com/recipes/complexSearch?apiKey="+ apiKey + "&number=15&addRecipeInformation=true";
        const fullQuery = baseQuery + dietParams + ingredientParams + timeToPrepareParams;
        
        try {
            const result = await axios.get(fullQuery);
            const items = await result.data.results;
            console.log(items);
            return items;
        } catch (e) {
            console.log(e);
        }
    }
}