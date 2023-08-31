import React from "react";

const Hrooms = () => {
  return (
    <section className="hrooms">
      <div className="container">
        <div className="hrooms__inner">
          <h2
            className="hrooms__title"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            Номера
          </h2>
          <p
            className="hrooms__text"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="800"
          >
            Наслаждайтесь роскошным декором номеров и бесплатным Wi-Fi в
            современном отеле Ташкента.
          </p>
          <div className="hrooms__slider">
            <a href="#" className="hroom">
              <div className="hroom__image">
                <img src="/assets/img/standart.jpg" alt="hroom" />
              </div>
              <div className="hroom__info">
                <h3 className="hroom__title">Стандартный номер</h3>
                <h4 className="hroom__size">25 м² | 2 взрослых</h4>
                <div className="hroom__icons">
                  <img src="/assets/icons/icon-1.svg" alt="comnata" />
                  <img src="/assets/icons/icon-2.svg" alt="comnata" />
                  <img src="/assets/icons/icon-3.svg" alt="comnata" />
                  <img src="/assets/icons/icon-4.svg" alt="comnata" />
                  <img src="/assets/icons/icon-5.svg" alt="comnata" />
                  <img src="/assets/icons/icon-6.svg" alt="comnata" />
                  <img src="/assets/icons/icon-9.svg" alt="luks" />
                </div>
              </div>
            </a>
            <a href="#" className="hroom">
              <div className="hroom__image">
                <img src="/assets/img/premium-suite.jpg" alt="hroom" />
              </div>
              <div className="hroom__info">
                <h3 className="hroom__title">Улучшенный люкс</h3>
                <h4 className="hroom__size">63 м² | 4 взрослых</h4>
                <div className="hroom__icons">
                  <img src="/assets/icons/icon-1.svg" alt="luks" />
                  <img src="/assets/icons/icon-2.svg" alt="luks" />
                  <img src="/assets/icons/icon-3.svg" alt="luks" />
                  <img src="/assets/icons/icon-4.svg" alt="luks" />
                  <img src="/assets/icons/icon-5.svg" alt="luks" />
                  <img src="/assets/icons/icon-6.svg" alt="luks" />
                  <img src="/assets/icons/icon-7.svg" alt="luks" />
                  <img src="/assets/icons/icon-9.svg" alt="luks" />
                </div>
              </div>
            </a>
            <a href="#" className="hroom">
              <div className="hroom__image">
                <img src="/assets/img/presidential.jpg" alt="hroom" />
              </div>
              <div className="hroom__info">
                <h3 className="hroom__title">Президентский люкс</h3>
                <h4 className="hroom__size">70 м² | 4 взрослых</h4>
                <div className="hroom__icons">
                  <img src="/assets/icons/icon-1.svg" alt="luks" />
                  <img src="/assets/icons/icon-2.svg" alt="luks" />
                  <img src="/assets/icons/icon-3.svg" alt="luks" />
                  <img src="/assets/icons/icon-4.svg" alt="luks" />
                  <img src="/assets/icons/icon-5.svg" alt="luks" />
                  <img src="/assets/icons/icon-6.svg" alt="luks" />
                  <img src="/assets/icons/icon-9.svg" alt="luks" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hrooms;
