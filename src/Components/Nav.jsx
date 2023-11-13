import logo from "../assets/logo.png";
import {BsSearch} from "react-icons/bs";
import {BiSolidOffer} from "react-icons/bi";
import {SlUserFollow} from "react-icons/sl";
import {IoHelpBuoyOutline} from "react-icons/io5";
import {AiOutlineShoppingCart} from "react-icons/ai";
const Nav = () =>{
    return (
        <div className="w-full flex   justify-center">
            <div className="w-9/12 flex justify-between items-center  px-5 text-gray-700 font-semibold capitalize">
                <div className="flex items-center ">
                    <img src={logo} alt="logo" width={100} className="bg-transparent"/>
                </div>
                <ul className="flex justify-end gap-12 w-full">
                    <li className="flex gap-3 items-center hover:text-orange-500"><BsSearch/>search</li>
                    <li className="flex gap-3 items-center"><BiSolidOffer/>Offer</li>
                    <li className="flex gap-3 items-center"><IoHelpBuoyOutline/>Help</li>
                    <li className="flex gap-3 items-center"><SlUserFollow/>Sign In</li>
                    <li className="flex gap-3 items-center"><AiOutlineShoppingCart/>Cart</li>
                </ul>
            </div> 
        </div>
    )
}
export default Nav;