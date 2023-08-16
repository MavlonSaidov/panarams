import React from "react";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">
        <div className="about-us__inner">
          <h2 className="about-us__title">О Нас</h2>
          <div className="about-us__box">
            <div className="about-us__image">
              <img src="/assets/img/hero.jpg" alt="hero-image" />
              {/* <span><img src="/assets/icons/play.svg" alt="panarams"/></span> */}
            </div>
            {/* <h2>Наша история</h2> */}
            <p className="about-us__text">
              PANARAMS Tashkent Hotel, a member of RADISSON Individuals – это не
              только роскошный отель класса «Люкс», это симбиоз изящества,
              современности и совершенства. Это иная концепция и новый подход к
              гостям. Отель позиционирует себя как уникальный комплекс,
              подходящий для семейного, туристического и оздоровительного
              отдыха, а также бизнес встреч.
              <br />
              <br />
              Отель содержит в себе все для комфортного отдыха: СПА-центр с
              сауной на дровах, хамамом, римской парной, соляной шахтой,
              бассейном и джакузи, фитнес-центр, собственный ресторан на высоте
              птичьего полета и бар, конференц-центр и зона для проведения
              мероприятий.
              <br /> <br />
              PANARAMS Tashkent Hotel, a member of RADISSON Individuals – с
              заботой о каждом посетителе.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
