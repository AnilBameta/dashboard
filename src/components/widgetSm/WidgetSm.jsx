import React from "react";
import "./widgetSm.css";
import WidgetSmList from "./WidgetSmList";
import image1 from "../../images/brooke-cagle-0c2aPoLTXHI-unsplash.jpg";
import image2 from "../../images/philipp-pilz-iQRKBNKyRpo-unsplash.jpg";
import image3 from "../../images/vista-wei-OiERUvVrioU-unsplash.jpg";
import image4 from "../../images/bradley-pelish--yiEkPD5l3o-unsplash.jpg";
const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <WidgetSmList
          Username="Eren Yaegar"
          Title="Software Engineer"
          Image={image1}
        />
        <WidgetSmList
          Username="Levi Ankerman"
          Title="Software Engineer"
          Image={image2}
        />
        <WidgetSmList
          Username="Erwin Smith"
          Title="Software Engineer"
          Image={image3}
        />
        <WidgetSmList
          Username="Mikasa"
          Title="Software Engineer"
          Image={image4}
        />
      </ul>
    </div>
  );
};

export default WidgetSm;
