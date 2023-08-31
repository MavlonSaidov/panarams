import React from "react";
import Footer from "../../re-components/footer/Footer";

const Gallery = () => {
  return (
    <>
      <div className="gallery">
        <div className="container">
          <div className="gallery__inner">
            <div className="gallery__title">Галерея</div>
            <div className="gallery__grid">
              <div className="gallery__item gallery__active">
                <img src="./assets/img/gallery/1.jpg" alt="gallery-1" />
              </div>
              <div className="gallery__item">
                <img src="./assets/img/gallery/2.jpg" alt="gallery-2" />
              </div>
              <div className="gallery__item">
                <img src="./assets/img/gallery/3.jpg" alt="gallery-3" />
              </div>
              <div className="gallery__item">
                <img src="./assets/img/gallery/4.jpg" alt="gallery-4" />
              </div>
              <div className="gallery__item">
                <img src="./assets/img/gallery/5.jpg" alt="gallery-5" />
              </div>
              <div className="gallery__item">
                <img src="./assets/img/gallery/6.png" alt="gallery-6" />
              </div>
              <div className="gallery__item">
                <img src="./assets/img/gallery/7.jpg" alt="gallery-7" />
              </div>
              <div className="gallery__item">
                <img src="./assets/img/gallery/8.jpg" alt="gallery-7" />
              </div>
              <div className="gallery__item">
                <img src="./assets/img/gallery/9.jpg" alt="gallery-7" />
              </div>
              <div className="gallery__item">
                <img src="./assets/img/gallery/10.png" alt="gallery-7" />
              </div>
              <div className="gallery__item">
                <img src="./assets/img/gallery/11.png" alt="gallery-7" />
              </div>
              <div className="gallery__item">
                <img src="./assets/img/gallery/12.png" alt="gallery-7" />
              </div>
              <div className="gallery__item">
                <img src="./assets/img/gallery/13.jpg" alt="gallery-7" />
              </div>
              <div className="gallery__item">
                <img src="./assets/img/gallery/14.jpg" alt="gallery-7" />
              </div>
              <div className="gallery__item">
                <img src="./assets/img/gallery/15.png" alt="gallery-7" />
              </div>
              <div className="gallery__item">
                <img src="./assets/img/gallery/16.jpg" alt="gallery-7" />
              </div>
              <div className="gallery__item">
                <img src="./assets/img/gallery/17.jpg" alt="gallery-7" />
              </div>
              <div className="gallery__item">
                <img src="./assets/img/gallery/18.jpg" alt="gallery-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
