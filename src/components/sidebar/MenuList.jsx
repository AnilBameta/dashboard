import React from "react";
import "./menuList.css";
import { Link } from "react-router-dom";
const MenuList = (props) => {
  let Iconsname= props.fontList[0];
  return (
    <>
      <h3 className="sidebarTitle">{props.heading}</h3>
      <ul className="sidebarList">
        {props.list.map((subheading,index) =>(
          subheading.localeCompare("Users") == 0 ? (
            <Link to={`/user`} style={{textDecoration: 'none'}}>
              {" "}
              <li className="sidebarListItem ">
                <Iconsname className="sidebarIcon" />
                {subheading}
              </li>
            </Link>
          ) : subheading.localeCompare("Home") == 0 ? (
            <Link to={`/`} style={{textDecoration: 'none'}}>
              {" "}
              <li className="sidebarListItem ">
                <Iconsname className="sidebarIcon" />
                {subheading}
              </li>
            </Link>
          ) : (
            <li className="sidebarListItem ">
              <Iconsname className="sidebarIcon" />
              {subheading}
            </li>
          )
        )
        )}
      </ul>
    </>
  );
};

export default MenuList;
