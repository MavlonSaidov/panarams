import React from "react";

const Standart = () => {
  return (
    <div className="room">
      <div className="container">
        <div className="room__inner">
          <div className="room__box">
            <a className="room__image" href="#">
              <img src="/assets/img/standart.jpg" alt="standart-room" />
            </a>
            <div className="room__info">
              <h4 className="room__title">Стандартный номер</h4>
              <p className="room__text">
                Насладитесь видом из больших окон на город или внутренний дворик
                отеля. Номера призваны делиться комфортом с нашими гостями и
                включают в себя письменный стол, телевизор с международными
                каналами, бесплатный Wi-Fi, сейф, мини-бар, кондиционер, уютную
                международными каналами, бесплатный <span>Wi-Fi</span>, сейф,
                мини-бар, кондиционер, уютную ванную комнату. Есть номера,
                предназначенные для людей с ограниченными возможностями.{" "}
              </p>
              <div className="room__icons">
                <img src="./assets/icons/n__icon9.png" alt="n__icon9" />
                <img src="./assets/icons/n__icon8.png" alt="n__icon8" />
                <img src="./assets/icons/n__icon7.png" alt="n__icon7" />
                <img src="./assets/icons/n__icon6.png" alt="n__icon6" />
                <img src="./assets/icons/n__icon5.png" alt="n__icon5" />
                <img src="./assets/icons/n__icon4.png" alt="n__icon4" />
                <img src="./assets/icons/n__icon2.png" alt="n__icon2" />
              </div>

              <div className="room__details">
                <div className="room__guest">
                  <div className="room__guest_icon">
                    <img
                      src="./assets/icons/mini__icon4.png"
                      alt="mini__icon4"
                    />
                  </div>
                  <p className="room__guest_text">Макс. гостей: 2 </p>
                </div>
                <div className="room__bed">
                  <div className="room__bed_icon">
                    <img
                      src="./assets/icons/mini__icon3.png"
                      alt="mini__icon3"
                    />
                  </div>
                  <p className="room__bed_text">
                    С двумя односпальными кроватями
                  </p>
                </div>
                <div className="room__size">
                  <div className="room__size_icon">
                    <img
                      src="./assets/icons/mini__icon2.png"
                      alt="mini__icon2"
                    />
                  </div>
                  <p className="room__size_text">Площадь: 25 кв.м. </p>
                </div>

                <div className="room__functions">
                  <div className="room__functions_icon">
                    <img
                      src="./assets/icons/mini__icon1.png"
                      alt="mini__icon1"
                    />
                  </div>
                  <p className="room__functions_text">Доступные функции</p>
                </div>
              </div>
            </div>
          </div>

          <div className="room__label">
            <h4 className="room__label_title">Стандартный номер</h4>
            <div className="room__label_btns">
              <a
                className="room__label_btn"
                href="/3d/room2bed/index.html"
                target="_blank"
              >
                3D-тур
              </a>
              <a className="room__label_btn" href="#">
                Выбрать
              </a>
            </div>
          </div>

          <p className="room__bottom-text">
            *Средняя цена за ночь — могут взиматься дополнительные налоги и
            сборы. Общая сметная стоимость доступна только в валюте, применимой
            к отелю.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Standart;
