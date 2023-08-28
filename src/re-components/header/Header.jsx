import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__inner">
          <a href="/" className="header__logo">
            <img src="/assets/img/logo.png" alt="logo_panaram's" />
          </a>
          <ul
            className="header__links"
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-duration="500"
          >
            
            <li>
              <a href="#">Обзор</a>
            </li>
            <li>
              <a href="#">Номера</a>
            </li>
            <li>
              <a href="#">Услуги</a>
            </li>
            <li>
              <a href="#">Карта</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
            <li>
              <a href="#">Галерея</a>
            </li>
          </ul>
          <div className="header__lang">eng</div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
