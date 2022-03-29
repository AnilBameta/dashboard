import React from "react";
import { Visibility } from "@material-ui/icons";
import "./widgetSmList.css";
const WidgetSmList = ({ Username, Title, Image }) => {
  return (
    <li className="widgetSmListItem">
      <img src={Image} alt="not available" className="widgetSmImg"></img>
      <div className="widgetSmUser">
        <span className="widgetSmUsername">{Username}</span>
        <span className="widgetSmUserTitle">{Title}</span>
      </div>
      <button className="widgetSmButton">
        <Visibility className="widgetSmIcon" />
        Display
      </button>
    </li>
  );
};

export default WidgetSmList;
