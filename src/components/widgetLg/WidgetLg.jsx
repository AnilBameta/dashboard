import React from "react";
import "./widgetLg.css";
import WidgetLgTableContent from "./WidgetLgTableContent";
import image1 from "../../images/brooke-cagle-0c2aPoLTXHI-unsplash.jpg";
import image2 from "../../images/philipp-pilz-iQRKBNKyRpo-unsplash.jpg";
import image3 from "../../images/vista-wei-OiERUvVrioU-unsplash.jpg";
import image4 from "../../images/bradley-pelish--yiEkPD5l3o-unsplash.jpg";
const WidgetLg = () => {
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transanctions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <WidgetLgTableContent
          Name="Armin"
          Date="01-02-2000"
          Amount="$122"
          Status="Approved"
          Image={image1}
        />
        <WidgetLgTableContent
          Name="Jean"
          Date="21-05-1999"
          Amount="$123"
          Status="Pending"
          Image={image2}
        />
        <WidgetLgTableContent
          Name="Conny"
          Date="19-10-2001"
          Amount="$200"
          Status="Pending"
          Image={image3}
        />
        <WidgetLgTableContent
          Name="Shasha"
          Date="20-04-2000"
          Amount="$321"
          Status="Declined"
          Image={image4}
        />
      </table>
    </div>
  );
};

export default WidgetLg;
