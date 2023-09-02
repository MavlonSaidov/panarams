import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__inner">
          <Link to="/" className="header__logo">
            <img src="/assets/img/logo.png" alt="logo_panaram's" />
          </Link>
          <ul
            className="header__links"
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-duration="500"
          >
            <li>
              <Link to="/overview">Обзор</Link>
            </li>
            <li>
              <Link to="/rooms">Номера</Link>
            </li>
            <li>
              <Link to="/services">Услуги</Link>
            </li>
            {/* <li>
              <a href="#">Карта</a>
            </li> */}
            <li>
              <Link to="/contacts">Контакты</Link>
            </li>
            <li>
              <Link to="/gallery">Галерея</Link>
            </li>
          </ul>
          <div className="header__lang">eng</div>
          <div className="header__radisson">
            <img src="/assets/img/radisson.svg" alt="" />
          </div>
          <div className="header__burger">x</div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
