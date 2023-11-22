import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Cart = () => {
    const navigate = useNavigate();
    const items = useSelector(store => store.cart.items);
    console.log(items,typeof(items))
    return (
        <>
        <div className="w-full h-[76vh] flex items-center justify-center mt-10"> 
        
        {
            !(items?.length > 0) ? <div className="  text-lg font-bold flex flex-col gap-5"> Cart is Empty <p  className="px-4 py-3 rounded-md bg-orange-400 text-white" onClick={() => navigate("/")}>Order Now</p> </div> : <div className="w-5/12  mb-10 h-auto border-2 border-gray-200 drop-shadow-lg">
            {
                items.map((item) => <CartItem key={item?.id} item = {item}/>)
            }
        </div>
        }  
                
        </div>
        
        </>
    )
}
export default Cart;