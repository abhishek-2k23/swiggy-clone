import { PiSquareLogoFill } from "react-icons/pi";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { MenuImgUrl } from "../constant";
import { IoStar } from "react-icons/io5";
const MenuCard = ({ menu }) => {
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
          {menu?.card?.info?.isBestseller && <span className="flex gap-2 items-center text-base text-orange-500">
            <IoStar/>
            <p className="cursor-text">Bestseller</p>
          </span>}
                
        </div>
        

        <p className="text-base cursor-text">{menu?.card?.info?.name} </p>

        <p className="flex justify-start items-center text-base cursor-text">
          <MdOutlineCurrencyRupee />
          {menu?.card?.info?.price?.toString().slice(0, -2)}
        </p>
        <p className="text-gray-400 font-semibold text-sm w-11/12 cursor-text">
          {menu?.card?.info?.description}
        </p>
      </div>
      <div>
        {menu?.card?.info?.imageId ? (
          <div className="relative">
            <div className="w-[118px] h-[96px] rounded-md">
              <img
                src={MenuImgUrl + menu?.card?.info?.imageId}
                alt=""
                className="w-full h-full rounded-md"/>

                <AddButton info={menu?.card?.info}/>
            </div>
          </div>
        ) : (
            <AddButton info={menu?.card?.info}/>
        )}
      </div>
    </div>
  );
};

const AddButton = ({info}) => {

  function handleAdd(info){
    console.log("added - ", info)
  }
  return (
    <div className={`${info.imageId && "absolute -bottom-2 left-2 bg-white"}  w-24 h-9 border border-gray-400 hover:drop-shadow-md drop-shadow-sm text-center rounded-md flex justify-center items-center`} onClick={() => handleAdd(info)}>
            <p className="text-green-500 text-center align-middle font-semibold text-lg tracking-wide cursor-pointer" >
              ADD
            </p>
      </div>
  )
}

export default MenuCard;
