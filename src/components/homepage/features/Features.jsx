import React from "react";

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div class="features__inner">
          <div className="features__info">
            <h2 className="features__title">Дополнительные услуги</h2>
            <p className="features__text">
              Отель заботится о комфорте всех своих посетителей, предоставляя
              безупречный сервис и обеспечивая все условия для маломобильных
              людей, а также круглосуточно следит за вашим комфортом и
              безопасностью на базе современных технологий.
            </p>
          </div>
          <div class="features__items">
            <a href="/fitnes.php" class="features__item">
              <img src="/assets/img/gallery-1.png" alt="gallery-1" />
              <p class="features__subtitle">Фитнес и СПА</p>
            </a>

            <a href="/events.php" class="features__item">
              <img src="/assets/img/hall.jpg" alt="hall" />
              <p class="features__subtitle">Мероприятия</p>
            </a>

            <a href="/bar-restaruan.php" class="features__item">
              <img src="/assets/img/gallery-3.png" alt="gallery-3" />
              <p class="features__subtitle">Питание</p>
            </a>

            <a href="/basseyn.php" class="features__item">
              <img src="/assets/img/gallery-2.png" alt="gallery-2" />
              <p class="features__subtitle">Бассейн</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
