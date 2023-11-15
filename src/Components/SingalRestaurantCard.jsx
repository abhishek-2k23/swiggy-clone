import { useState } from "react";
import { PiPlantFill } from "react-icons/pi";
import MenuCard from "./MenuCard.jsx";
import CategoryMenu from "./CategoryMenu.jsx";
const SingleRestaurantCard = ({ restaurant }) => {
  const [show, setShow] = useState(true);
  return (
    <div className="h-auto  flex justify-center">
      <div className="w-9/12 pb-5 border-b-2 px-5">
        {restaurant?.card?.card?.isPureVeg && (
          <div className="text-lg font-semibold flex items-center gap-2">
            <PiPlantFill className="text-green-600" /> Pure Veg{" "}
          </div>
        )}
        <div
          onClick={() => {
            show ? setShow(false) : setShow(true);
          }}
        >
          {
            restaurant?.card?.card?.title &&  <div>
            <p>{restaurant?.card?.card?.title} {restaurant?.card?.card?.itemCards?.length > 0 && <span>{"("+restaurant?.card?.card?.itemCards?.length +")"}</span>}</p>
          </div>
          }
          
        </div>
        {show &&
          restaurant?.card?.card?.itemCards?.map((menu) => (
            <MenuCard menu={menu} />
          ))}

        <p>{restaurant?.card?.card?.categories?.title}</p>
        {restaurant?.card.card.categories?.map((menu) => (
          <CategoryMenu menu={menu} />
        ))}
      </div>
    </div>
  );
};
export default SingleRestaurantCard;
