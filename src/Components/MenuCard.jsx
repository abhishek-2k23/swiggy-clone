import { PiSquareLogoFill } from "react-icons/pi";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { MenuImgUrl } from "../constant";

const MenuCard = ({ menu }) => {
  return (
    <div className="text-lg font-semibold flex justify-between items-center gap-1 py-2 border-b">
      <div className="flex flex-col gap-2">
        {menu?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? (
          <PiSquareLogoFill className="text-green-500 text-base " />
        ) : (
          <PiSquareLogoFill className="text-red-500 text-lg font-bold" />
        )}

        <p className="text-base">{menu?.card?.info?.name} </p>

        <p className="flex justify-start items-center text-base">
          <MdOutlineCurrencyRupee />
          {menu?.card?.info?.price}
        </p>
        <p className="text-gray-400 font-semibold text-sm w-11/12">
          {menu?.card?.info?.description}
        </p>
      </div>
      <div>
        {menu?.card?.info?.imageId ? (
          <div className="relative">
            <div 
              className="w-[118px] h-[96px] rounded-md">
                <img
              src={MenuImgUrl + menu?.card.info.imageId}
              alt="" className="w-full h-full rounded-md"
                />
                
                <p className="absolute -bottom-2  px-8 py-1 left-3 text-sm rounded-md bg-white border border-gray-300 drop-shadow-sm hover:drop-shadow-lg text-green-500 cursor-pointer tracking-wider">
                    ADD
                </p>
            </div>
            
            
          </div>
        ) : (
          <div className="w-28 h-10 border border-gray-400 hover:drop-shadow-md drop-shadow-sm text-center rounded-md flex justify-center items-center">
            <p className="text-green-500 text-center align-middle font-semibold text-lg tracking-wide cursor-pointer">
              ADD
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default MenuCard;
