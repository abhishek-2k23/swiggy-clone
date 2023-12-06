import { ImgUrl } from "../constant";
import AddRemoveButton from "./AddRemoveButton";
import { PiSquareLogoFill } from "react-icons/pi";
const Crousel = ({ crousels }) => {
  console.log(crousels);
  return (
    <div className="p-8 ">
      <div className="relative w-[407px] h-[456px]">

        {/* for gradient */}
        <div className="absolute rounded-3xl top-0 w-full h-full bg-gradient-to-b from-black "></div>
        <div className="absolute rounded-3xl left-0-0 w-24 h-full bg-gradient-to-r from-black"></div>
        <div className="absolute rounded-3xl left-1 bottom-1 w-full  h-7 bg-gradient-to-t from-black"></div>

        {/* //for top content on pic  */}
        <div className="z-10 absolute top-5 left-6 right-5">
          <div>
            {crousels?.dish?.info?.isVeg === 1 ? (
              <PiSquareLogoFill className="text-green-700 text-3xl font-bold" />
            ) : (
              <PiSquareLogoFill className="text-red-500 text-base " />
            )}
          </div>
          <div className="w-full">
            <p className="text-white font-bold text-2xl">
              {crousels?.dish?.info?.name}
            </p>
            <p className="text-gray-100 tracking-wide text-sm">
              {crousels?.description}
            </p>
            {/* <p className=" tracking-wide text-yellow-500 text-sm ">{crousels?.dish?.info?.defaultPrice}</p> */}
          </div>
        </div>

        {/* for bottom content on pic  */}
        <div className="z-10 absolute bottom-2 left-5 h-10 w-11/12 right-4 flex justify-between">
              <p className=" tracking-wide text-white text-lg float-left">
                {crousels?.dish?.info?.defaultPrice ||crousels?.dish?.info?.price  / 100 } ₹
              </p>
              <AddRemoveButton className="absolute right-1 bg-white"></AddRemoveButton>
        </div>
        
        {/* //image  */}
        <div className="rounded-3xl h-full object-fill">
          <img
            src={ImgUrl + crousels?.dish?.info?.imageId}
            alt=""
            className="rounded-3xl h-full object-cover bg-gradient-to-b from-black to-gray-700"
          />
        </div>
      </div>
    </div>
  );
};

export default Crousel;
