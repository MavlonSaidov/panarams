import React from "react";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="container">
        <h3 className="contacts__title">Контакты</h3>
        <div className="contacts__inner">
          <div className="contacts__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1498.4463303665393!2d69.31248986349397!3d41.31119866443874!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef59041b17399%3A0x78ddf3a6c01f2140!2sPanarams!5e0!3m2!1sru!2sus!4v1692111524013!5m2!1sru!2sus"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contacts__info">
            <h3 className="contacts__subtitle">
              Свяжитесь с нами удобным для вас способом:
            </h3>
            <div className="contacts__line">
              Наименование компании: СП ООО “Biznes United”
            </div>
            <div className="contacts__line">
              Телефон: <span>+998 78 113 33 31</span>
            </div>
            <div className="contacts__line">
              E-mail: <span>info@panarams.uz</span>
            </div>
            <div className="contacts__line">
              По вопросам бронирования: <span>+998 78 113 33 31</span>
            </div>
            <div className="contacts__line">
              По вопросам резервирования: <span>reservation@panarams.uz</span>
            </div>
            <div className="contacts__line">
              По вопросам PR, маркетинга и продажам:{" "}
              <span>marketing@panarams.uz</span>
            </div>
            <div className="contacts__line">
              По общим вопросам: <span>info@panarams.uz</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
