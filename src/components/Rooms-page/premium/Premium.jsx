import React from "react";

const Premium = () => {
  return (
    <div className="room">
      <div className="container">
        <div className="room__inner">
          <div className="room__box">
            <a className="room__image" href="#">
              <img src="/assets/img/premium.jpg" alt="standart-room" />
            </a>
            <div className="room__info">
              <h4 className="room__title">Улучшенный номер</h4>
              <p className="room__text">
                Улучшенные номера имеют очень удобные кровати и оформлены с
                большим вниманием к деталям. Окна наполнят комнату большим
                количеством естественного света, выходят на внутренний дворик
                отеля. Созданные для, максимального комфорта, наших гостей,
                номера включают в себя письменный стол, телевизор с
                международными каналами, бесплатный высокоскоростной WiFi, сейф,
                мини-бар, кондиционер, уютную ванную комнату.
              </p>
              <div className="room__icons">
                <img src="./assets/icons/n__icon9.png" alt="n__icon9" />
                <img src="./assets/icons/n__icon8.png" alt="n__icon8" />
                <img src="./assets/icons/n__icon7.png" alt="n__icon7" />
                <img src="./assets/icons/n__icon6.png" alt="n__icon6" />
                <img src="./assets/icons/n__icon5.png" alt="n__icon5" />
                <img src="./assets/icons/n__icon4.png" alt="n__icon4" />
                <img src="./assets/icons/n__icon2.png" alt="n__icon2" />
                <img src="./assets/icons/n__icon10.png" alt="n__icon10" />
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
                  <p className="room__bed_text">С одной двуспальной кроватью</p>
                </div>
                <div className="room__size">
                  <div className="room__size_icon">
                    <img
                      src="./assets/icons/mini__icon2.png"
                      alt="mini__icon2"
                    />
                  </div>
                  <p className="room__size_text">Площадь: 37 кв.м. </p>
                </div>
              </div>
            </div>
          </div>

          <div className="room__label">
            <h4 className="room__label_title">Улучшенный номер</h4>
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

export default Premium;
