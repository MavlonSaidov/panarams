import React from "react";

const Map = () => {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1498.4463303665393!2d69.31248986349397!3d41.31119866443874!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef59041b17399%3A0x78ddf3a6c01f2140!2sPanarams!5e0!3m2!1sru!2sus!4v1692111524013!5m2!1sru!2sus"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
