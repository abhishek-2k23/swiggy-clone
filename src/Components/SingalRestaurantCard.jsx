import { useState } from "react";
import { PiPlantFill } from "react-icons/pi";
import MenuCard from "./MenuCard.jsx";
import CategoryMenu from "./CategoryMenu.jsx";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import Crousel from "./Crousel.jsx";
import CraouselButton from "./CraouselButton.jsx";
const   SingleRestaurantCard = ({ restaurant }) => {
  const [show, setShow] = useState(true);
  return (
    <div className="h-auto  flex justify-center">

      {/* veg - nonveg */}
      <div className="w-9/12 pb-5 border-b-8 px-5">
        {restaurant?.card?.card?.isPureVeg && (
          <div className="text-lg font-semibold flex items-center gap-2">
            <PiPlantFill className="text-green-600" /> Pure Veg{" "}
          </div>
        )}

          {/* Show craousel  */}
        {
          restaurant?.card?.card?.title && (
            <div className="flex gap-10 overflow-clip">
              {
                restaurant?.card?.card?.carousel?.map((crausel) => (
                  <Crousel crousels={crausel}/>
                )) 
              }
            </div>
          )
        }

        {
          restaurant?.card?.card?.carousel && <CraouselButton length={restaurant?.card?.card?.carousel.length}></CraouselButton>
        }
        
        {/* Title bar with hide and show */}
        {restaurant?.card?.card?.title && (
          <div
            className="flex justify-between my-3 cursor-pointer"
            onClick={() => {
              show ? setShow(false) : setShow(true);
            }}
          >

            {/* for carousel */}
            

            {/* for menu cards category or direct menu show */}
            <div>
                <p className="font-bold text-base">
                  {restaurant?.card?.card?.title}{" "}
                  {restaurant?.card?.card?.itemCards?.length > 0 && (
                    <span>
                      {"(" + restaurant?.card?.card?.itemCards?.length + ")"}
                    </span>
                  )}
                </p>
            </div>
            <div>{!restaurant?.card?.card?.categories &&
              <div>{!show ? <FaAngleDown /> : <IoIosArrowUp />}</div>}
            </div>
          </div>
        )}

        {/*To show either the menucard or menucard with categories */}
        <div>
          {show && restaurant?.card?.card?.itemCards ? (
            restaurant?.card?.card?.itemCards?.map((menu, index) => (
              <MenuCard key={menu?.card?.id} menu={menu} />
            ))
          ) : (
            <div>
              {" "}
              {(restaurant?.card?.card?.categories) &&
                restaurant?.card?.card?.categories.map(( menu) => (
                  <CategoryMenu key={menu?.title} menu={menu} />
                ))}
            </div>
          )}
        </div>

        {/* <div>
          {show && 
          restaurant?.card?.card?.categories?.map((index, menu) => (
            
            <CategoryMenu key={index} menu={menu} />
          ))}
        </div> */}
      </div>
    </div>
  );
};
export default SingleRestaurantCard;
