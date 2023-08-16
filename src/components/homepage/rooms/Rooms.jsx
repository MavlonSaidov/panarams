import React from "react";

const Rooms = () => {
  return (
    <section className="rooms">
      <div className="container">
        <div className="rooms__inner">
          <h2
            className="rooms__title"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            Номера
          </h2>
          <p
            className="rooms__text"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="800"
          >
            Наслаждайтесь роскошным декором номеров и бесплатным Wi-Fi в
            современном отеле Ташкента.
          </p>
          <div className="rooms__slider">
            <a href="#" className="room">
              <div className="room__image">
                <img src="/assets/img/standart.jpg" alt="room" />
              </div>
              <div className="room__info">
                <h3 className="room__title">Стандартный номер</h3>
                <h4 className="room__size">25 м² | 2 взрослых</h4>
                <div className="room__icons">
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
            <a href="#" className="room">
              <div className="room__image">
                <img src="/assets/img/premium-suite.jpg" alt="room" />
              </div>
              <div className="room__info">
                <h3 className="room__title">Улучшенный люкс</h3>
                <h4 className="room__size">63 м² | 4 взрослых</h4>
                <div className="room__icons">
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
            <a href="#" className="room">
              <div className="room__image">
                <img src="/assets/img/presidental.jpg" alt="room" />
              </div>
              <div className="room__info">
                <h3 className="room__title">Президентский люкс</h3>
                <h4 className="room__size">70 м² | 4 взрослых</h4>
                <div className="room__icons">
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
            {/* <a href="/comnata-standart-teras.php" className="item">
              <div className="img">
                <img src="/assets/img/terrace.jpg" alt="room" />
              </div>
              <div className="info">
                <h3>Стандартный номер с террасой</h3>
                <h4>25 м² | 2 взрослых</h4>
                <div className="icons">
                  <img src="/assets/icons/icon-1.svg" alt="terassoy" />
                  <img src="/assets/icons/icon-2.svg" alt="terassoy" />
                  <img src="/assets/icons/icon-3.svg" alt="terassoy" />
                  <img src="/assets/icons/icon-4.svg" alt="terassoy" />
                  <img src="/assets/icons/icon-5.svg" alt="terassoy" />
                  <img src="/assets/icons/icon-6.svg" alt="terassoy" />
                  <img src="/assets/icons/icon-8.png" alt="luks" />
                </div>
              </div>
            </a>
            <a href="/Improved.php" className="item">
              <div className="img">
                <img src="/assets/img/premium.jpg" alt="room" />
              </div>
              <div className="info">
                <h3>Улучшенный номер</h3>
                <h4>37 м² | 2 взрослых</h4>
                <div className="icons">
                  <img src="/assets/icons/icon-1.svg" alt="improved" />
                  <img src="/assets/icons/icon-2.svg" alt="improved" />
                  <img src="/assets/icons/icon-3.svg" alt="improved" />
                  <img src="/assets/icons/icon-4.svg" alt="improved" />
                  <img src="/assets/icons/icon-5.svg" alt="improved" />
                  <img src="/assets/icons/icon-6.svg" alt="improved" />
                  <img src="/assets/icons/icon-9.svg" alt="improved" />
                </div>
              </div>
            </a>
            <a href="/luks.php" className="item">
              <div className="img">
                <img src="/assets/img/suite.jpg" alt="room" />
              </div>
              <div className="info">
                <h3>Люкс</h3>
                <h4>43 м² | 4 взрослых</h4>
                <div className="icons">
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
            <a href="/luks-jakuzi.php" className="item">
              <div className="img">
                <img src="/assets/img/suite-whirlpool.jpg" alt="room" />
              </div>
              <div className="info">
                <h3>Люкс с джакузи</h3>
                <h4>54 м² | 4 взрослых</h4>
                <div className="icons">
                  <img src="/assets/icons/icon-1.svg" alt="luks" />
                  <img src="/assets/icons/icon-2.svg" alt="luks" />
                  <img src="/assets/icons/icon-3.svg" alt="luks" />
                  <img src="/assets/icons/icon-4.svg" alt="luks" />
                  <img src="/assets/icons/icon-5.svg" alt="luks" />
                  <img src="/assets/icons/icon-6.svg" alt="luks" />

                  <img src="/assets/icons/icon-9.svg" alt="luks" />
                </div>
              </div>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
