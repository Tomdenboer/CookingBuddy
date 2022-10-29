import RecipeListItem from './RecipeListItem';

function RecipeList(props) {
    const list = props.recipes;
    // console.log(list);
    const listItems = list.map((item) =>
        <RecipeListItem key={item.id} id={item.id} name={item.name} vegetarian={item.vegetarian}/>
    );
    console.log(listItems);
    return (
        <ul>
            {listItems}
        </ul>
    )

}

export default RecipeList;