import React from "react";
import Standart from "./standart/Standart";
import Terrace from "./terrace/Terrace";
import Premium from "./premium/Premium";
import Suite from "./suite/Suite";
import Whirlpool from "./whirpool/Whirlpool";
import PremiumSuite from "./premium-suite/PremiumSuite";
import Presidential from "./presidential/Presidential";
import Map from "../../re-components/map/Map";
import Footer from "../../re-components/footer/Footer";

const Rooms = () => {
  return (
    <div className="rooms">
      <Standart />
      <Terrace />
      <Premium />
      <Suite />
      <Whirlpool />
      <PremiumSuite />
      <Presidential />
      <Map />
      <Footer />
    </div>
  );
};

export default Rooms;
