import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <a className="footer__logo">
            <img src="../assets/img/footer__logo.png" alt="footer__logo" />
          </a>

          <div className="footer__location">
            <span>Tashkent</span>
            <h6>
              <span id="temp">29</span>°C
            </h6>
            <img
              id="icon"
              alt="img"
              src="http://openweathermap.org/img/w/01n.png"
            />
          </div>

          <div className="footer__member">
            <img src="../assets/img/radisson.svg" alt="radisson" />
          </div>
          <div className="footer_app">
            <span>Ilovani yuklab oling</span>
            <div>
              <img src="../assets/img/playmarket.png" alt="play-market" />
              <img src="../assets/img/apple.png" alt="apple" />
            </div>
          </div>
          <div className="footer__socials">
            <span>Социальные сети</span>
            <div className="footer__social-icons">
              <a href="https://www.youtube.com/c/radissonhotelgroup">
                <img
                  class="links"
                  src="../assets/img/youtube.png"
                  alt="you-tube"
                />
              </a>
              <a href="https://twitter.com/pamaramsu">
                <img
                  class="links"
                  src="../assets/img/twitter.png"
                  alt="twitter"
                />
              </a>
              <a href="https://www.linkedin.com/company/panarams-hotel-tashkent">
                <img
                  class="links"
                  src="../assets/img/linkedin.png"
                  alt="linkedin"
                />
              </a>
              <a href="https://www.facebook.com/panarams.uz">
                <img
                  class="links"
                  src="../assets/img/facebook.png"
                  alt="facebook"
                />
              </a>
              <a href="https://www.instagram.com/panarams.uz/">
                <img
                  class="links"
                  src="../assets/img/instagram.png"
                  alt="instagram"
                />
              </a>
              <a href="https://t.me/panarams_uz">
                <img
                  class="links"
                  src="../assets/icons/telegram.svg"
                  alt="twitter"
                />
              </a>
            </div>
          </div>

          <div className="footer__middle_contacts">
            <div>
              <img src="/assets/icons/phone.svg" alt="phone" />
              <a href="tel:+998781133331">+998 78 113 33 31</a>
            </div>
            <div>
              <img src="/assets/icons/mail.svg" alt="mail" />
              <a href="mailto:info@panarams.uz">info@panarams.uz</a>
            </div>
          </div>

          <div className="footer__bottom">
            <p>Copyright © 2021–2022 Panarams.uz. Все права защищены.</p>
            <a href="https://marketingconcept.uz/">
              Разработано в © Marketing Concept.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
