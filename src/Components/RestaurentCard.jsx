import { ImgUrl } from "../constant";
import { MdStars } from "react-icons/md";
const RestaurentCard = (props) =>{
    const {restaurant} = props;
    return ( 
        <div className="m-2 w-[249px] h-[269px] hover:scale-95 transition-all duration-50">
            <div className=" rounded-md w-[249px] h-[166px] relative filter ">
                <img src={ImgUrl + restaurant.cloudinaryImageId} alt='backgroundImage' className="w-[249px] h-[166px] rounded-lg"/>
                <p className="absolute text-white font-extrabold bottom-2 text-xl left-1 filter drop-shadow-xl">{`${restaurant?.aggregatedDiscountInfoV3.header} ${restaurant?.aggregatedDiscountInfoV3.subHeader}`}</p>
            </div>
            <div className="flex flex-col justify-start text-gray-800">
                <h1 className="font-bold ">{restaurant.name}</h1>
                <div className="flex items-center gap-1 font-bold" >
                    <MdStars className="text-green-700 text-lg"/>
                    <h1 className="flex justify-center items-center gap-2">{`${restaurant?.avgRatingString}`}</h1> 
                    <div className="w-1 h-1 rounded bg-black"></div>
                    <p>{restaurant?.sla?.deliveryTime} mins</p>
                    
                </div>
                
                <div className="flex gap-2 flex-wrap m-0 text-gray-500">
                    <span>{restaurant?.cuisines[0]}, {restaurant?.cuisines[1]}, {restaurant?.cuisines[2]}</span>
                </div>
                <p className="text-gray-500">{restaurant?.areaName}</p>
            </div>
        </div>
    )
}
export default RestaurentCard;