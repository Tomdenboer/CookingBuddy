import axios from 'axios';

// Normally you wouldn't store this in a client side app, of course. 
const apiKey = 'ee49ddfe10dd4f61b02797850ba8b30d';
export default {
      
    /* Limiting the number of items we get to 15 because of limited API access. 
        I do request extra recipe information, because this gives more options to filter recipes.*/
    test: async () => {
        try {
            const result = axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey='+ apiKey + '&number=15&addRecipeInformation=true').then((response) => {
                console.log(response);
            })
        }
     catch(e) {
        console.log(e);
    }
}
}

