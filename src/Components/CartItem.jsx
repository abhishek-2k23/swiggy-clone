import AddRemoveButton from "./AddRemoveButton";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { useSelector } from "react-redux";
// import { addItem, removeItem } from "../Store/Slices/cartSlice";
// import {Button} from "./MenuCard";
const CartItem = ({item}) => {
    //find the items count
    const cartItems = useSelector(store => store.cart.items);
    const idx = cartItems.findIndex(cartItem => cartItem.id === item.id);
    const count = cartItems[idx].NoOfItems;
    return (
        <div className="flex w-full p-5 justify-between">
            <div className="w-1/2 flex flex-wrap items-center justify-start">
                <p>{item.name}</p>
            </div>
            <div className="flex justify-center items-center">
                <AddRemoveButton item={item}/>
            </div>
            <div className="flex items-center">
                <p className="flex items-center"> <MdOutlineCurrencyRupee /> {(item.price/100)*count}</p>
            </div>
        </div>
    )
}
export default CartItem;