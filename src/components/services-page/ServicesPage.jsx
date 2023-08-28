import React from "react";
import ServicesLabel from "./ser-label/ServicesLabel";
import ServicesRestaurants from "./ser-restaurants/ServicesRestaurants";
import SerEvents from "./ser-events/SerEvents";

const ServicesPage = () => {
  return (
    <div className="services-page">
      <ServicesLabel />
      <ServicesRestaurants />
      <SerEvents />
    </div>
  );
};

export default ServicesPage;
