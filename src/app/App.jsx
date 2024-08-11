import { Greeting } from "./Components";
import { ShoppingList } from "./Components";
import { OrderStatus } from "./Components";

function App(){

const items = ["Молоко", "Мороженное", "Протеин"];
const orders = [
    {orderId: 3153, status: "Доставлен"},
{orderId: 4593, status: "В пути"},
{orderId: 8472, status: "Обработан"},
];

    return(
    <div>
        <Greeting name = "Pika-Pika"/>
        <ShoppingList items = {items} />
        {orders.map((order) =>(
           <OrderStatus key={order.orderId} orderId={order.orderId} status={order.status} />
        ))}
        
    </div>
)


}

export default App;