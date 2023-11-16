import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { SingleRestaurantAPI } from "../constant";
import SingleRestaurantCard from "./SingalRestaurantCard";
import { MdOutlineStar } from "react-icons/md";
import ShimmerUi from "./ShimmerUI";
const SingleRestaurant = () => {
  const { id } = useParams();
  const [RestaurantData, setRestaurantData] = useState(null);
  useEffect(() => {
    getRestaurantData();
  }, []);
  async function getRestaurantData() {
    const res = await fetch(`${SingleRestaurantAPI}${id}`);
    const json = await res?.json();
    // console.log("Json : ",json)
    setRestaurantData(json?.data);
    // [1].card.card.itemCards
  }
  if (!RestaurantData) {
    return (
      <div className="w-full flex  justify-center">
        <ShimmerUi />
      </div>
    );
  }
  return (
    <div className="w-full flex flex-col items-center ">
      {console.log(RestaurantData)}
      <div className="w-9/12 flex justify-between px-5 pb-5 mb-3 border-b border-dotted border-gray-400">
        <div className="">
          <p className="font-bold text-xl mb-2">{RestaurantData?.cards[0]?.card?.card?.info?.name}</p>
          <div className="flex gap-2 text-sm text-gray-600">
            {RestaurantData?.cards[0]?.card?.card?.info?.cuisines?.map(
              (cuisines, index) => (
                <div className="flex gap-2" key={index}>
                  {cuisines},
                </div>
              )
            )}
          </div>
          <div className="text-sm text-gray-600">
            <p>
              {RestaurantData?.cards[0]?.card?.card?.info?.areaName},{" "}
              {RestaurantData?.cards[0]?.card?.card?.info?.sla?.lastMileTravel}{" "}
              km
            </p>
          </div>
        </div>
        <div>
          <div className="w-[4.5rem] h-[4.7rem] flex flex-col items-center border border-gray-400 rounded-lg gap-2">
                <div className="flex justify-center items-center gap-1 text-lg font-bold text-green-500 ">
                <MdOutlineStar/>
                {RestaurantData?.cards[0]?.card?.card?.info?.avgRating}
                </div>
                <div className="w-11/12 justify-center items-center h-[2px] bg-gray-400"></div>
                <div className="text-center text-xs font-semibold text-gray-500">{RestaurantData?.cards[0]?.card?.card?.info?.totalRatingsString}</div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center">
        {RestaurantData?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
          (restaurant, index) => (
            <SingleRestaurantCard key={index} restaurant={restaurant} />
          )
        )}
      </div>
    </div>
  );
};
export default SingleRestaurant;