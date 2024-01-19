import { PiSquareLogoFill } from "react-icons/pi";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { MenuImgUrl } from "../constant";
import { IoStar } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../Store/Slices/cartSlice";

const MenuCard = ({ menu }) => {
  // console.log("Menu : ", menu);
  return (
    <div className="text-lg font-semibold flex justify-between items-center gap-1 pt-5 pb-10 border-b">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <span>
            {menu?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? (
              <PiSquareLogoFill className="text-green-500 text-base " />
            ) : (
              <PiSquareLogoFill className="text-red-500 text-lg font-bold" />
            )}
          </span>
          {menu?.card?.info?.isBestseller && (
            <span className="flex gap-2 items-center text-base text-orange-500">
              <IoStar />
              <p className="cursor-text">Bestseller</p>
            </span>
          )}
        </div>

        <p className="text-base cursor-text">{menu?.card?.info?.name} </p>

        <p className="flex justify-start items-center text-base cursor-text">
          {menu?.card?.info?.price ? (
            <p>

            <MdOutlineCurrencyRupee />
            {menu?.card?.info?.price?.toString().slice(0, -2)}
            </p>
  ):(<p>---</p>)}
        </p>
        <p className="text-gray-400 font-semibold text-sm w-11/12 cursor-text">
          {menu?.card?.info?.description}
        </p>
      </div>
      <div>
        <div className="relative">
          <div className="w-[118px] h-[96px] rounded-md">
            {menu?.card?.info?.imageId && (
              <img
                src={MenuImgUrl + menu?.card?.info?.imageId}
                alt=""
                className="w-full h-full rounded-md"
              />
            )}
            <Button item={menu?.card?.info} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Button = ({ item }) => {
  // console.log(item);
  const cartItem = useSelector((store) => store.cart.items);
  // console.log("ADDED : ", cartItem, typeof(cartItem));
  const idx = cartItem.findIndex((Citem) => Citem.id === item.id);

  item.NoOfItems = cartItem[idx]?.NoOfItems || 1;
  const dispatch = useDispatch();

  const AddItem = () => {
    if(cartItem.includes(item)) {
      cartItem.NoOfItems++;
    }
    dispatch(addItem(item))
    console.log("All item in cart : ", cartItem);
  };
  
  const RemoveItem = () => {

    dispatch(removeItem(item?.id));
    console.log("RemoveItem : ",item?.id)
  };
  return (
    <>
      {idx !== -1 ? (
        <div
          className={`${
            item?.imageId && "absolute -bottom-3 left-2 bg-white text-green-500"
          } flex justify-evenly w-10/12 border border-gray-300 bg-white text-green-600 rounded-md py-1`}
        >
          {" "}
          <div onClick={RemoveItem} className="mx-2">
            {" "}
            -{" "}
          </div>{" "}
          <div> {cartItem[idx].NoOfItems} </div>{" "}
          <div onClick={AddItem} className="mx-2">
            {" "}
            +{" "}
          </div>{" "}
        </div>
      ) : (
        <div
          onClick={AddItem}
          className={`${
            item?.imageId && "absolute -bottom-3 left-2 bg-white text-green-500"
          } flex justify-evenly w-10/12 border border-gray-300 bg-white text-green-600 rounded-md py-1 text-base font-mono tracking-wide`}
        >
          {" "}
          ADD{" "}
        </div>
      )}
    </>
  );
};
export default MenuCard;
