import RestaurentCard from "./RestaurentCard.jsx";
import { API } from "../constant.js";
import { useState,useEffect } from "react";
import ShimmerUi from "./ShimmerUI.jsx";

const Body = () =>{
    const [restaurantData, setRestaurantData] = useState(null);

    //calling the api using useEffect
    useEffect(() =>{
        getRestaurants();
    },[])

    //api calling function
    async function getRestaurants(){
        const res = await fetch(API);
        const data = await res.json();
        console.log("data : ",data);
        setRestaurantData(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       
    }

    //till restaurantData loades show shimmer UI
    if(!restaurantData){
        return <div className="w-full flex  justify-center">
                <ShimmerUi/>
        </div>
    }

    //if restaurant data available then render it
    return (
        <div className="w-full flex  justify-center">
            
            <div className="w-10/12 h-auto p-5">
                {/* <h1 className="font-bold text-lg">Restaurants : </h1> */}
                
                <div className="flex gap-1 w-full h-auto flex-wrap justify-evenly ">
                    {
                        console.log("REs ",restaurantData)
                    }
                {restaurantData?.map((restaurant) => {
                    return <RestaurentCard key={restaurant?.info?.id} restaurant = {restaurant?.info}/>
                }) }
                {console.log(restaurantData)}
                </div>
            </div>
        </div>
    )
}
export default Body;