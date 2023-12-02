import { ImgUrl } from "../constant";
const Crousel = ({crousels}) => {
    console.log(crousels)
    return(
        <div className="p-8 ">
            <div className="relative w-96 bg-gradient-to-b from-black to-gray-700 rounded-3xl">
                <div className="absolute rounded-3xl top-0 w-96 h-56 bg-gradient-to-b from-black ">
                    
                </div>
                <div className="absolute rounded-3xl left-0-0 w-24 h-full bg-gradient-to-r from-black">
                    
                </div>
                <div className="absolute rounded-3xl bottom-0 w-96 h-7 bg-gradient-to-t from-black">
                    
                </div>
                <div className="rounded-3xl">
                    <img src={ImgUrl+crousels?.dish?.info?.imageId} alt="" className="rounded-3xl bg-gradient-to-b from-black to-gray-700"/>
                </div>
            </div>
        </div>
    )
}

export default Crousel;