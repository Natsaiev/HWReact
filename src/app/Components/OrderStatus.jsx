export const OrderStatus = ({orderId, status}) => {


    return(
        <div>
            <h1>Заказ #[{orderId}]: [{status}]</h1>
        </div>
    )
}