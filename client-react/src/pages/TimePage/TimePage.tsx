import React, { useEffect, useState } from "react";

import Clock from "../../components/Clock/Clock";
import mgLogo from "../../assets/img/round_logo-512x512.png";
import "./TimePage.css";

const TimePage = () => {
  return (
    <div id="container">
      <div id="header-div"></div>
      <div id="clock-container">
        <Clock />
      </div>
      <div id="footer-img">
        <img src={mgLogo} alt="Logo" />
      </div>
    </div>
  );
};

export default TimePage;
