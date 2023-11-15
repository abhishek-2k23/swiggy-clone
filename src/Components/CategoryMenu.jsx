import React from "react";
import MenuCard from "./MenuCard";
import { useState } from "react";
function CategoryMenu({ menu }) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <p
        className="text-lg text-purple-700 font-bold"
        onClick={() => {
          show ? setShow(false) : setShow(true);
        }}
      >
        {menu?.title}{" "}
      </p>
      {show &&
        menu?.itemCards?.map((menu, index) => (
          <MenuCard key={index} menu={menu} />
        ))}
    </div>
  );
}

export default CategoryMenu;
