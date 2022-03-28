import React from "react";
import "./sidebar.css";
import { LineStyle, Timeline, TrendingUp} from "@material-ui/icons";
import MenuList from "./MenuList";
const SIdebar = () => { 
  return (
    <div className="sidebar">
      <div className="sidebarWrraper">
        <div className="sidebarMenu">
          <MenuList
            heading="Dashboard"
            list={["Home", "Analytics", "style"]}
            fontList={[LineStyle, Timeline, TrendingUp]}
          />
          <MenuList
            heading="Dashboard"
            list={["Users", "Products", "Transanctions","Reports"]}
            fontList={[ LineStyle, Timeline, TrendingUp, LineStyle]}
          />
          <MenuList
            heading="Dashboard"
            list={["Mail", "Feedback", "Messages"]}
            fontList={[LineStyle, Timeline, TrendingUp]}
          />
          <MenuList
            heading="Dashboard"
            list={["Manage", "Analytics", "Reports"]}
            fontList={[LineStyle, Timeline, TrendingUp]}
          />
        </div>
      </div>
    </div>
  );
};

export default SIdebar;
