import logo from "../assets/logo.png";
import {BsSearch} from "react-icons/bs";
import {BiSolidOffer} from "react-icons/bi";
import {SlUserFollow} from "react-icons/sl";
import {IoHelpBuoyOutline} from "react-icons/io5";
import {AiOutlineShoppingCart} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Nav = () =>{
    const navigate = useNavigate();
    return (
        <div className="w-full flex   justify-center">
            <div className="w-9/12 flex justify-between items-center  px-5 text-gray-700 font-semibold capitalize">
                <div className="flex items-center ">
                    <img src={logo} alt="logo" width={100} className="bg-transparent" onClick={() => navigate("/")}/>
                </div>
                <ul className="flex justify-end gap-12 w-full ">
                    <li className="flex gap-3 items-center hover:text-orange-500"><BsSearch/>search</li>
                    <li className="flex gap-3 items-center hover:text-orange-500" onClick={() => navigate("/offer")}><BiSolidOffer/>Offer</li>
                    <li className="flex gap-3 items-center hover:text-orange-500"><IoHelpBuoyOutline/>Help</li>
                    <li className="flex gap-3 items-center hover:text-orange-500"><SlUserFollow/>Sign In</li>
                    <li className="flex gap-3 items-center hover:text-orange-500"><AiOutlineShoppingCart/>Cart</li>
                </ul>
            </div> 
        </div>
    )
}
export default Nav;