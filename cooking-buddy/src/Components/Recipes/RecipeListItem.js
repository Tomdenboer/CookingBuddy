import styles from './RecipeListItem.module.css';
import { useNavigate } from 'react-router-dom';

function RecipeListItem(props) {
    const item = props.item;
    const navigate = useNavigate();
    return (
        <main className={styles.recipe} onClick={() => {navigate('/recipes/' + item.id)}}>
            <img src={item.image} alt="picture of a recipe" className={styles.img}></img>
            <div className={styles.recipeHeader}>
                <h2>{item.title}</h2>
            </div>
            <div className={styles.recipeInfo}>
                <p>Health score: {item.healthScore}</p>
                <p>Preparation time: {item.readyInMinutes}</p>
                <p>{item.vegetarian.toString()}</p>
            </div>
            
        </main>
        
    )
}
export default RecipeListItem;