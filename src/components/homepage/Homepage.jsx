import React from "react";
import Hero from "./hero/Hero";
import Underline from "./hero/Underline";
import Hrooms from "./hrooms/HRooms";
import About from "./about/About";
import Meeting from "./meeting/Meeting";
import Features from "./features/Features";
import Map from "../../re-components/map/Map";
import Footer from "../../re-components/footer/Footer";

const Homepage = () => {
  return (
    <div className="homepage">
      <Hero />
      <Underline />
      <About />
      <Hrooms />
      <Meeting />
      <Features />
      <Map />
      <Footer />
    </div>
  );
};

export default Homepage;
