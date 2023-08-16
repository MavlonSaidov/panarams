import React from "react";
import About from "./about/About";
import Services from "./services/Services";
import Rules from "./rules/Rules";

const Overview = () => {
  return (
    <div className="overview">
      <About />
      <Services />
      <Rules />
    </div>
  );
};

export default Overview;
