import React from "react";

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="services__inner">
          <h3 className="services__title">Услуги</h3>
          <div className="services__box">
            <div className="services__image">
              {/* <img src="/assets/img/about-inn-2.png" alt="" /> */}
              <img src="/assets/img/about__back.jpg" alt="about__back" />
              {/* <span><img src="/assets/icons/play.svg" alt="panarams"/></span> */}
            </div>
            <div className="services__cols">
              <div className="services__col1">
                <pre>• Упрощённый доступ</pre>
                <pre>• Ресторан</pre>
                <pre>• Бар</pre>
                <pre>• Бассейн</pre>
                <pre>• Бесплатный Wi-fi</pre>
                <pre>• Фитнес центр </pre>
              </div>
              <div className="services__col2">
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

export default Services;
