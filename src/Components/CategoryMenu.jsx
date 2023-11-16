import React from "react";
import MenuCard from "./MenuCard";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
function CategoryMenu({ menu }) {
  const [show, setShow] = useState(true);
  return (
    <div>
      {menu?.title && (
          <div
            className="flex justify-between mt-3 border-b pb-3"
            onClick={() => {
              show ? setShow(false) : setShow(true);
            }}
          >
            <div>
              <div>
                <p className="text-base">
                  {menu?.title}{" "}
                  {menu?.itemCards?.length > 0 && (
                    <span>
                      {"(" + menu?.itemCards?.length + ")"}
                    </span>
                  )}
                </p>
              </div>
            </div>
            <div>
              <div>{!show ? <FaAngleDown /> : <IoIosArrowUp />}</div>
            </div>
          </div>
        )}
      {show &&
        menu?.itemCards?.map((menu, index) => (
          <MenuCard key={menu?.card?.info?.id} menu={menu} />
        ))}
    </div>
  );
}

export default CategoryMenu;
