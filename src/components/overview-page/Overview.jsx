import React from "react";
import Services from "./services/Services";
import Rules from "./rules/Rules";
import AboutUs from "./about-us/About-us";
import Map from "../../re-components/map/Map";
import Footer from "../../re-components/footer/Footer";

const Overview = () => {
  return (
    <div className="overview">
      <AboutUs />
      <Services />
      <Rules />
      <Map />
      <Footer />
    </div>
  );
};

export default Overview;
