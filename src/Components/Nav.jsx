/* eslint-disable no-unused-vars */
import logo from "../assets/logo.png";
import { BsSearch } from "react-icons/bs";
import { BiSolidOffer } from "react-icons/bi";
import { SlUserFollow } from "react-icons/sl";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

const Nav = () => {
  const navigate = useNavigate();
  const [activeElement, setActiveElement] = useState("");

  const items = useSelector((store) => store.cart.items);
  return (
    <div className="w-full flex   justify-center">
      <div className="w-9/12 flex justify-between items-center  px-5 text-gray-700 font-semibold capitalize shadow-lg">
        <div className="flex items-center ">
          <img
            src={logo}
            alt="logo"
            width={100}
            className="bg-transparent"
            onClick={() => {
              navigate("/");
              setActiveElement("Home");
            }}
          />
        </div>
        <ul className="flex justify-end gap-12 w-full ">
          <li
            className={`flex gap-3 items-center hover:text-orange-500 ${
              activeElement === "Search" && "text-orange-400 underline underline-offset-2 transition-transform"
            }`}
            onClick={() => setActiveElement("Search")}
          >
            <BsSearch />
            search
          </li>
          <li
            className={`flex gap-3 items-center hover:text-orange-500 ${
              activeElement === "Offer" && "text-orange-400 underline underline-offset-2"
            }`}
            onClick={() => {
              navigate("/offer");
              setActiveElement("Offer");
            }}
          >
            <BiSolidOffer />
            Offer
          </li>
          <li
            className={`flex gap-3 items-center hover:text-orange-500 ${
                activeElement === "Help" && "text-orange-400 underline underline-offset-2"
              }`}
            onClick={() => setActiveElement("Help")}
          >
            <IoHelpBuoyOutline />
            Help
          </li>
          <li
            className={`flex gap-3 items-center hover:text-orange-500 ${
              activeElement === "InstaMart" && "text-orange-400 underline underline-offset-2 "
            }`}
            onClick={() => {
              navigate("/instamart");
              setActiveElement("InstaMart");
            }}
          >
            <IoHelpBuoyOutline />
            InstaMart
          </li>
          <li
            className={`flex gap-3 items-center hover:text-orange-500 ${
              activeElement === "SignIn" && "text-orange-400 underline underline-offset-2"
            }`}
            onClick={() => setActiveElement("SignIn")}
          >
            <SlUserFollow />
            Sign In
          </li>
          <li
            className={`flex gap-3 items-center hover:text-orange-500 ${
              activeElement === "Cart" && "text-orange-400 underline underline-offset-2"
            }`}
            onClick={() => {navigate("/cart");setActiveElement("Cart")}}
          >
            <AiOutlineShoppingCart />
            Cart - {items?.length}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Nav;
