import React from "react";

const SerEvents = () => {
  return (
    <div className="events">
      <div className="container">
        <h3 className="events__title">Мероприятия</h3>
        <div className="events__inner">
          <div className="events__image">
            <img src="./assets/img/hall.jpg" alt="" />
          </div>
          <div className="events__info">
            <p className="events__text">
              В распоряжении гостей зал Ballroom, площадью 250 кв.м. исполненный
              в классическом стиле, позволяющий проводить мероприятия любого
              уровня от небольших свадеб до международных конференций. В зал
              интегрировано аудио и видео оборудование и установлена системой
              центрального кондиционирования. Ознакомьтесь со специальными
              банкетными предложениями и конференц-пакетами.
            </p>
            <h4 className="events__subtitle">Рассадка:</h4>
            <div className="events__line">Банкетная: 100 человек</div>
            <div className="events__line">Театральная: 200 человек</div>
            <div className="events__line">П-образная: 50 человек</div>
            <div className="events__line">Коктейль: 250 человек</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SerEvents;
