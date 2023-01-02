import styles from './RecipeListItem.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function RecipeListItem(props) {
    const item = props.item;
    const navigate = useNavigate();

    useEffect(() => {
        console.log(item);
    });

    return (
        <main className={styles.recipe} onClick={() => { navigate('/recipes/' + item.id) }}>
            <img src={item.image} alt="picture of a recipe" className={styles.img}></img>
            <div className={styles.recipeHeader}>
                <h2>{item.title}</h2>
            </div>
            <div className={styles.recipeInfo}>
                <p>Health score: {item.healthScore}</p>
                <p>Preparation time: {item.readyInMinutes}</p>
                {/* <p>{item.vegetarian.toString()}</p> */}
                <ul className={styles.ul}>
                    {props.item.vegetarian === true &&
                        <li>Vegetarian</li>
                    }
                    {props.item.vegan === true &&
                        <li>Vegan</li>
                    }
                    {/* I don't like checking on a string value like this, but this is what we get back from the api and it's only used once. */}
                    {props.item.diets.includes("paleolithic") === true &&
                        <li>paleo</li>
                    }
                </ul>
            </div>

        </main>

    )
}
export default RecipeListItem;