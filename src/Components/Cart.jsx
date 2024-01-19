import CartItem from "./CartItem"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { MdOutlineCurrencyRupee } from "react-icons/md";
const Cart = () => {
  const navigate = useNavigate()
  const items = useSelector((store) => store.cart.items);
  let price = 0;
  items.map((item) => (price += (item.price/100)*item.NoOfItems));
  // console.log(items,typeof(items))
  return (
    <>
      <div className="w-full min-h-[76vh] h-auto flex items-center justify-center bg-gray-200 ">
        {!(items?.length > 0) ? (
          <div className="  text-lg font-bold flex flex-col gap-5">
            {" "}
            Cart is Empty{" "}
            <p
              className="px-4 py-3 rounded-md bg-orange-400 text-white"
              onClick={() => navigate("/")}
            >
              Order Now
            </p>{" "}
          </div>
        ) : (
          <div className="w-10/12 md:w-7/12 lg:w-4/12 mt-10  mb-10 h-auto border drop-shadow-sm rounded-md">
            <div className="w-full mt-10 h-auto border drop-shadow-sm bg-gray-50">
                {items.map((item) => (
                <CartItem key={item?.id} item={item} />
                ))}
            </div>
            <div className="flex justify-between px-4 py-2 border-t border-black ">
                <p>To Pay : </p>
                <p className="flex items-center"> <MdOutlineCurrencyRupee /> {price}</p>
            </div>
            <div className="w-full bg-orange-500 flex justify-center items-center py-2 rounded-lg mt-2 cursor-pointer text-white">
                <p className="text-lg font-medium tracking-wider">Order</p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
export default Cart
