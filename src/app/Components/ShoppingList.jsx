export const ShoppingList = ({items}) =>{
return(
    <div className="shoppingListContainer">
        {items.length > 0 ?(
            <div className="itemContainer">

            <ul>
                {items.map((item, index)=>(
                    <li key= {index}>{item}</li>
                    ))}
            </ul>
                    </div>
        ):(
            <p>Список пуст</p>
        )}
    </div>
)
}