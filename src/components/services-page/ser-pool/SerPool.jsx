import React from "react";

const SerPool = () => {
  return (
    <div className="ser-pool">
      <div className="container">
        <div className="ser-pool__inner">
          <h3 className="ser-pool__title">Бассейн</h3>
          <div className="ser-pool__images">
            <div className="ser-pool__image">
              <img src="./assets/img/basseyn1.png" alt="basseyn1"></img>
            </div>
            <div className="ser-pool__image">
              <img src="./assets/img/basseyn2.png" alt="basseyn2"></img>
            </div>
            <div className="ser-pool__image">
              <img src="./assets/img/basseyn3.png" alt="basseyn3"></img>
            </div>
          </div>
          <h5 className="ser-pool__subtitle">БАССЕЙН</h5>
          <p className="ser-pool__text">
            Бассейн принимает не только постояльцев, но и посетителей не
            проживающие в отеле. Режим работы с 10:00 до 23:00 каждый день, без
            выходных. Финская сауна, турецкий хамам так же в распоряжении наших
            дорогих гостей.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SerPool;
