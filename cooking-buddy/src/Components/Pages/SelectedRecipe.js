import { useEffect, useState } from "react";
import RecipesApi from "../../helpers/api/RecipesApi";
import styles from "./SelectedRecipe.module.css"

function SelectedRecipe() {
    const [recipeInformation, setRecipeInformation] = useState(null);
    const [ingredients, setIngredients] = useState([]);

    const getData = async () => {
        var id = window.location.href.split("/").pop();
        const data = await (RecipesApi.getRecipeById(id));
        setRecipeInformation(data);
        return data;
    }

    useEffect(() => {
        getData();
        document.body.classList = styles.body;
    }, []);

    useEffect(() => {
        // Here we get the ingredients out of the item and put them in their own state which we display on screen.
        const ingredientList = recipeInformation?.extendedIngredients.map((item) => item = item.original);
        setIngredients(ingredientList);
    }, [recipeInformation])

    let ingredientListItems = ingredients?.map((item) => <li key={item}>{item}</li>)
    return (
        <div className={styles.page}>
            {
                recipeInformation?.title !== "" &&
                <h2 className={styles.header}>{recipeInformation?.title}</h2>
            }
              {
                // bar with quick recipe information.
                recipeInformation !== null &&
                <span>
                    <ul className={styles.ul}>
                        {recipeInformation?.vegetarian === true &&
                            <li>Vegetarian</li>
                        }
                        {recipeInformation?.vegan === true &&
                            <li>Vegan</li>
                        }
                        {recipeInformation?.diets.includes("paleolithic") === true &&
                            <li>Paleo</li>
                        }

                        {
                            recipeInformation?.healthScore !== "" &&
                            <li>Health score: {recipeInformation.healthScore}</li>
                        }

                        <li>
                            {/* the weird alt-code is a clock icon. */}
                            &#9202; {recipeInformation.readyInMinutes}
                        </li>
                    </ul>
                </span>
            }
            {
                recipeInformation?.image !== "" &&
                <img className={styles.image} src={recipeInformation?.image}></img>
            }
          

            {
                // stripping html characters tags out of the text content.
                recipeInformation?.summary !== "" &&
                <div className={styles.content}>
                    <h3 className={styles.h3}>Summary</h3>
                    <p>{recipeInformation?.summary.replace(/<[^>]*>?/gm, '')}</p>
                </div>
            }

            <div className={styles.container}>
                <div>
                    {
                        ingredients?.length > 0 &&
                        <div>
                            <h3 className={styles.h3}>Ingredients</h3>
                            <ul className={styles.ingredients}>
                                {ingredientListItems}
                            </ul>
                        </div>

                    }
                </div>
                <div>
                    {
                        (recipeInformation?.instructions !== "")&&
                        <div>
                            <h3 className={styles.h3}>Instructions</h3>
                            {/* remove html characters */}
                            <p>{recipeInformation?.instructions?.replace(/<[^>]*>?/gm, '')}</p>
                        </div>
                    }
                </div>


            </div>
        </div>
    )
}

export default SelectedRecipe;