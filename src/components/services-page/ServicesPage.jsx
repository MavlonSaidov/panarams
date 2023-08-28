import React from "react";
import ServicesLabel from "./ser-label/ServicesLabel";
import ServicesRestaurants from "./ser-restaurants/ServicesRestaurants";
import SerEvents from "./ser-events/SerEvents";
import SerFitness from "./ser-fitness/SerFitness";
import SerPool from "./ser-pool/SerPool";
import Map from "../../re-components/map/Map";
import Footer from "../../re-components/footer/Footer";

const ServicesPage = () => {
  return (
    <div className="services-page">
      <ServicesLabel />
      <ServicesRestaurants />
      <SerEvents />
      <SerFitness />
      <SerPool />
      <Map />
      <Footer />
    </div>
  );
};

export default ServicesPage;
