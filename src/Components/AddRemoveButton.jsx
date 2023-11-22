
import { addItem,removeItem } from "../Store/Slices/cartSlice";
import { useDispatch } from "react-redux";

const AddRemoveButton = ({item}) =>{
    //dispact 
    const dispatch = useDispatch();
    const remove = () =>{
        console.log("Removed : ",item?.id)
        dispatch(removeItem(item?.id));
    }
    const add = () => {
        dispatch(addItem(item));
    }

    return (
        <div className="flex w-24 h-10 border-gray-500 shadow-md justify-evenly items-center text-green-600 text-lg">
            <div onClick={remove} className="cursor-pointer">
                -
            </div>
            <div>{0}</div>
            <div onClick={() => add() } className="cursor-pointer">+</div>
        </div>
    )
}
export default AddRemoveButton;