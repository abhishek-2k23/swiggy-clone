import React from 'react'
import MenuCard from './MenuCard';
function CategoryMenu({menu}) {
  return (
    <div>
        {
            menu?.itemCards?.map((menu) => (<MenuCard menu={menu}/>))
        }
    </div>
  )
}

export default CategoryMenu;