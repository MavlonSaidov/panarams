import React from "react";

const ServicesRestaurants = () => {
  return (
    <div className="restaurants">
      <div className="container">
        <div className="restaurants__inner">
          <h2 className="restaurants__title">Бары и Рестораны</h2>

          <div className="restaurants__panarams">
            {/* panarams-section */}
            <div className="panarams">
              <div className="panarams__image">
                <img src="./assets/img/bar_restaruan1.png" alt="" />
              </div>
              <div className="panarams__info">
                <h3 className="panarams__title">Panarams</h3>
                <div className="panarams__line1">Расположение: 1 этаж</div>
                <div className="panarams__line1">Режим работы: 18:00-01:00</div>
                <h4 className="panarams__subtitle">Описание:</h4>
                <div className="panarams__line2">
                  Добро пожаловать в ресторан PANARAMS, каждый день мы открыты
                  для вас с 18:00 до 01:00 для того, чтобы поделиться ритмом и
                  энергией ночного города.
                </div>
                <div className="panarams__line2">
                  Европейская и пан-азиатская кухня в сочетании с авторскими
                  коктейлями от бартендеров ресторана PANARAMS не оставили ни
                  одного гостя равнодушным.
                </div>
                <div className="panarams__line2">
                  Каждую ночь, лучшие ведущие и музыкальные группы города делают
                  то, что умеет лучше всего для того, чтобы ночь в ресторане
                  PANARAMS заполнилась вам надолго.
                </div>
                <p className="panarams__text">PANARAMS – живи эмоциями.</p>
              </div>
            </div>

            {/* lobby-section */}

            <div className="restaurants__lobby">
              <div className="lobby">
                <div className="lobby__image">
                  <img src="./assets/img/Lobby002.jpg" alt="" />
                </div>
                <div className="lobby__info">
                  <h3 className="lobby__title">Lobby Lounge</h3>
                  <div className="lobby__line">Расположение: 1 этаж</div>
                  <div className="lobby__line">Режим работы: 18:00-01:00</div>
                  <h4 className="lobby__subtitle">Описание:</h4>
                  <p className="lobby__text">
                    Идеальное место для того, чтобы собраться с мыслями, аромат
                    бодрящего кофе здесь повсюду. Свежая выпечка, богатый выбор
                    тонизирующих чаёв, легкие закуски международной кухни
                    придадут сил перед прогулками по городу либо перед важными
                    встречами.
                  </p>
                </div>
              </div>
            </div>
            {/* monica restaurant section */}
            <div className="restaurants__monica">
              <div className="monica">
                <div className="monica__image">
                  <img src="./assets/img/Monica001.jpg" alt="" />
                </div>
                <div className="monica__info">
                  <h3 className="monica__title">Ресторан Monica</h3>
                  <div className="monica__line">
                    <span>Расположение:</span> 6 этаж
                  </div>
                  <div className="monica__line">
                    <span>Режим работы:</span>
                  </div>
                  <div className="monica__line">
                    <span>Завтрак</span> 06:00-10:30
                  </div>
                  <div className="monica__line">
                    <span>Обед</span> 12:00-15:00
                  </div>
                  <div className="monica__line">
                    <span>Ужин</span> 18:00-23:00s
                  </div>

                  <h4 className="monica__subtitle">Описание:</h4>
                  <p className="monica__text">
                    Каждый день мы работаем для того, чтобы вы чувствовали себя
                    как дома. Кулинария как искусство, дарит людям тепло, так и
                    ресторан, в котором каждая деталь это искусство. Утонченная
                    атмосфера вместе с высокими технологиями подарят вам
                    эстетическое наслаждение. Насладитесь так же и разнообразием
                    блюд из нашего меню, приготовленных исключительно из свежих
                    продуктов. Обратите внимание на выбор вин в сочетании с
                    фирменными блюдами от шеф-поваров.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesRestaurants;
