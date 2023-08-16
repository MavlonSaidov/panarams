import React from "react";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__inner">
          <div className="about__info">
            <h4 className="about__subtitle">О нас</h4>

            <h3 className="about__title">Наслаждайся неожиданным будущим</h3>

            <p className="about__text">
              Panarams Tashkent Hotel, a member of Radisson Individuals,
              расположенный в самом динамичном городе Центральной Азии приятно
              удивит вас своим современным дизайном, рестораном на высоте
              птичьего полета и множеством дополнительных развлечений. Это
              уникальный комплекс предоставляющий все условия для комфортного
              отдыха, успешных бизнес встреч и переговоров, семейного досуга, а
              также оздоровительных процедур. И всё это на самом высоком уровне!
            </p>
          </div>

          <div className="about__btns">
            <button className="prev-btn">prev</button>
            <button className="next-btn">next</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
