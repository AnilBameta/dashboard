import React from "react";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import "./topbar.css";
import image from '../../images/brooke-cagle-0c2aPoLTXHI-unsplash.jpg'
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <span className="topLeft">
          <div className="logo">dashboard</div>
        </span>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src={image}
            alt="not available"
            className="topAvatar"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
