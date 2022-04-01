import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
// import {userData} from "../../dummyData"
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
const Home = (props) => {
  const [userData, setUserData] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8080/users")
      .then((result) => {
        props.homeReduxData(result);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={props?.data?.homeItems?.homeData?.data?.data}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
