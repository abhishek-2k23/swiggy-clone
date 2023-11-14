import { ImgUrl } from "../constant";
import { MdStars } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const RestaurentCard = (props) =>{
    const {restaurant} = props;
    const navigate = useNavigate();
    return ( 
        <div className="m-2 w-[249px] h-[269px] hover:scale-95 transition-all duration-50" onClick={() => navigate(`/restaurant/${restaurant?.id}`)}>
            <div className=" rounded-md w-[249px] h-[166px] relative shadow-inner">
                <img src={ImgUrl + restaurant.cloudinaryImageId} alt='backgroundImage' className="w-[249px] h-[166px] rounded-lg"/>
                <div className="absolute h-14 w-full bg-gradient-to-t from-black bottom-0 rounded-b-md "> 
                    <p className="absolute text-white font-extrabold bottom-2 text-xl left-1">{`${restaurant?.aggregatedDiscountInfoV3.header} ${restaurant?.aggregatedDiscountInfoV3.subHeader}`}</p>
                </div>
            </div>
            <div className="flex flex-col justify-start text-gray-800">
                <h1 className="font-bold ">{restaurant.name.substring(0,33)}</h1>
                {console.log()}
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