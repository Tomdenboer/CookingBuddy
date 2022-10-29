function RecipeListItem(props) {
    return (
        <main>
            <h3>{props.id}</h3>
            <h2>{props.name}</h2>
            <p>{props.vegetarian.toString()}</p>
        </main>
        
    )
}
export default RecipeListItem;