import styles from './RecipeListItem.module.css';

function RecipeListItem(props) {
    const item = props.item;
    return (
        <main className={styles.recipe}>
            <img src={item.image} alt="picture of a recipe" className={styles.img}></img>
            <div className={styles.recipeHeader}>
                <h2>{item.title}</h2>
            </div>
            <div className={styles.recipeInfo}>
                <p>Health score: {item.healthScore}</p>
                <p>{item.vegetarian.toString()}</p>
                <p>Preparation time: {item.readyInMinutes}</p>
            </div>
            
        </main>
        
    )
}
export default RecipeListItem;