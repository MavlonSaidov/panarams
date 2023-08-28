import React from "react";

const SerFitness = () => {
  return (
    <div className="fitness">
      <div className="container">
        <div className="fitness__inner">
          <h3 className="fitness__title">Фитнес и СПА</h3>
          <div className="fitness__images">
            <div className="fitness__image">
              <img src="./assets/img/fitnes1.png" alt="fitnes1"></img>
            </div>
            <div className="fitness__image">
              <img src="./assets/img/fitnes2.png" alt="fitnes1"></img>
            </div>
            <div className="fitness__image">
              <img src="./assets/img/fitnes3.png" alt="fitnes1"></img>
            </div>
          </div>
          <h5 className="fitness__subtitle">ФИТНЕС И СПА</h5>
          <p className="fitness__text">
            Приглашаем Вас посетить фитнес центр
            <span>
              PANARAMS Tashkent Hotel, a member of RADISSON Individuals.
            </span>
            Только самое лучшее оборудование и тренажеры под наблюдением
            специалистов помогут Вам укрепить свое здоровье и тело. Так же
            ознакомьтесь со СПА-меню, наши специалисты помогут Вам расслабиться
            и снять стресс, проводя процедуры в одной из двух комнат для
            массажа. Посещайте наш центр, когда Вам удобно приобретая разовые
            абонементы либо членство в клубе по выгодным ценам. Следите за своим
            здоровьем и будьте в тонусе.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SerFitness;
