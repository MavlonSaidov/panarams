import React from "react";

const Meeting = () => {
  return (
    <div className="meeting">
      <div className="meeting__bg">
        <div className="container">
          <div className="meeting__inner">
            <div className="meeting__items">
              <div className="meeting__item">
                <img src="/assets/icons/advantage-1.svg" alt="meeting-item" />
                <h5>Гарантия лучшей онлайн цены </h5>
                <p>
                  Вы нашли дешевле? Мы предложим такую же цену и предоставим
                  дополнительную 25% скидку на наши великолепные завтраки.
                </p>
              </div>
              <div className="meeting__item">
                <img src="/assets/icons/advantage-2.svg" alt="meeting-item" />
                <h5>Участники программы получают больше</h5>
                <p>
                  Воспользуйтесь эксклюзивными преимуществами для участников:
                  бесплатное повышение категории номера и многое другое.
                </p>
              </div>
              <div className="meeting__item">
                <img src="/assets/icons/advantage-3.svg" alt="meeting-item" />
                <h5>С приложением удобнее!</h5>
                <p>
                  Скачайте приложение Panarams Hotel и воспользуйтесь скидками и
                  акциями партнёров программы по всему Узбекистану и не только.
                </p>
              </div>
            </div>
            <div className="meeting__info">
              <span>экскурсии</span>
              <h3>Спланируйте любые деловые мероприятия </h3>
              <p>
                Гостиничный комплекс предоставляет все условия для деловых
                встреч: конференц-зал, возможность организации мероприятий
                различного масштаба, ресторан с большой вместимостью для крупных
                делегаций, бизнес-зоны различной площади для проведения
                переговоров.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meeting;
