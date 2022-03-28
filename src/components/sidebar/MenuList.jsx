import React from "react";
import './menuList.css'
const MenuList = (props) => {
  let Iconsname = props.fontList[0];
  let i =0;
  return (
    <>
      <h3 className="sidebarTitle">{props.heading}</h3>
      <ul className="sidebarList">
        {props.list.map((subheading) => (
          <li className="sidebarListItem ">
            <Iconsname className="sidebarIcon" />
            {subheading}
          </li>
          
        ))}
      </ul>
    </>
  );
};

export default MenuList;
