import { addItem,removeItem } from "../Store/Slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const AddRemoveButton = ({item}) =>{
    const cartItem = useSelector(store => store.cart.items);
    const idx = cartItem.findIndex(cartitem => cartitem.id === item.id);
    //dispatch
    const dispatch = useDispatch();
    const remove = () =>{
        console.log("Removed : ",item?.id)
        dispatch(removeItem(item?.id));
    }
    const add = () => {
        dispatch(addItem(item));
    }

    return (
        <div className="flex w-24 h-10 border-gray-500 shadow-md justify-evenly items-center text-green-600 text-lg bg-white rounded-lg">
            <div onClick={remove} className="cursor-pointer">
                -
            </div>
            <div>{cartItem[idx].NoOfItems}</div>
            <div onClick={() => add() } className="cursor-pointer">+</div>
        </div>
    )
}
export default AddRemoveButton;