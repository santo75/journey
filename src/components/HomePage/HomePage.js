import React from "react";
import Time from "../Clock/Clock";
import "./HomePage.css";
import Journey from "../Journey/Journey";
import Clock from "../Clock/Clock";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="clock">
        <Clock />
      </div>
      <Journey />
    </div>
  );
};
export default HomePage;
