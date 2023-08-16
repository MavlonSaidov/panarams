import React from "react";
import Hero from "./hero/Hero";
import Underline from "./hero/Underline";
import About from "./about/About";
import Rooms from "./rooms/Rooms";
import Meeting from "./meeting/Meeting";
import Features from "./features/Features";
import Map from "../../re-components/map/Map";
import Footer from "../../re-components/footer/Footer";
import Header from "../../re-components/header/Header";

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <Hero />
      <Underline />
      <About />
      <Rooms />
      <Meeting />
      <Features />
      <Map />
      <Footer />
    </div>
  );
};

export default Homepage;
