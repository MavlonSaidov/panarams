import React from "react";

const Rules = () => {
  return (
    <div className="rules">
      <div className="container">
        <div className="rules__inner">
          <h5 className="rules__title">Правила размещения </h5>
          <div className="rules__box">
            <div className="rules__image">
              <img src="/assets/img/reception-bell.jpg" alt="reception-bell" />
            </div>

            <ul className="rules__lists">
              <li>Стандартный заезд 14:00 - Стандартный выезд 12:00</li>
              <li>
                Условия отмена бронирования рассматриваются индивидуально в
                зависимости от выбранного тарифа
              </li>
              <li>
                Условия раннего заезд и позднего выезда рассматриваются
                виндивидуальном порядке, обратитесь в отель
              </li>
              <li>Охраняемая парковка, для проживающих бесплатная</li>
              <li>Курение, отель предоставляет номера для курящих</li>
              <li> К оплате принимаются карты: VISA, Master card</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
