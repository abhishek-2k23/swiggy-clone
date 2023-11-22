import AddRemoveButton from "./AddRemoveButton";

const CartItem = ({item}) => {
    return (
        <div className="flex w-full p-5 justify-between">
            <p>{item.name}</p>
            <AddRemoveButton item={item}/>
            <p>{item.price/100}</p>
        </div>
    )
}
export default CartItem;