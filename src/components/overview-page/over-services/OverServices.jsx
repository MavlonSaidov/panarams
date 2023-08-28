import React from "react";

const OverServices = () => {
  return (
    <div className="overservices">
      <div className="container">
        <div className="overservices__inner">
          <h3 className="overservices__title">Услуги</h3>
          <div className="overservices__box">
            <div className="overservices__image">
              {/* <img src="/assets/img/about-inn-2.png" alt="" /> */}
              <img src="/assets/img/about__back.jpg" alt="about__back" />
              {/* <span><img src="/assets/icons/play.svg" alt="panarams"/></span> */}
            </div>
            <div className="overservices__cols">
              <div className="overservices__col1">
                <pre>• Упрощённый доступ</pre>
                <pre>• Ресторан</pre>
                <pre>• Бар</pre>
                <pre>• Бассейн</pre>
                <pre>• Бесплатный Wi-fi</pre>
                <pre>• Фитнес центр </pre>
              </div>
              <div className="overservices__col2">
                <pre>• Обслуживание в номерах </pre>
                <pre>• Мини бар</pre>
                <pre>• Завтрак шведский стол </pre>
                <pre>• Услуги прачечной </pre>
                <pre>• Многоязычный персонал</pre>
                <pre>• Конференц-зал</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverServices;
