import React from "react";
import "./widgetLgTableContent.css";
const WidgetLgTableContent = ({ Name, Date, Amount, Status, Image }) => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <tr className="widgetLgTr">
      <td className="widgetLgUser">
        <img src={Image} alt="" className="widgetLgImg" />
        <span className="widgetLgName">{Name}</span>
      </td>
      <td className="widgetLgDate">{Date}</td>
      <td className="widgetLgAmount">{Amount}</td>
      <td className="widgetLgStatus">
        <Button type={Status} />
      </td>
    </tr>
  );
};

export default WidgetLgTableContent;
