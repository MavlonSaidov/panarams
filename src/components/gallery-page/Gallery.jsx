import React, { useEffect, useState } from "react";
import Footer from "../../re-components/footer/Footer";

const Gallery = () => {
  let closePopup = () => {
    document.querySelector(".gallery__closePopup").style.display = "none";
    document.querySelector(".gallery__popup").style.display = "none";
  };
  let [src, setSrc] = useState("./assets/img/gallery/1.jpg");
  useEffect(() => {
    let items = document.querySelectorAll(".gallery__item");
    items.forEach((item) =>
      item.addEventListener("click", function () {
        setSrc(item.firstChild.getAttribute("src"));
        console.log(src);
        document.querySelector(".gallery__popup").style.display = "block";
        document.querySelector(".gallery__closePopup").style.display = "block";
      })
    );
  }, []);

  return (
    <>
      <div className="gallery">
        <div className="container">
          <div className="gallery__inner">
            <div onClick={closePopup} className="gallery__closePopup">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                width="70"
                height="70"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#e2bd4b"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                >
                  <g transform="scale(8.53333,8.53333)">
                    <path d="M7,4c-0.25587,0 -0.51203,0.09747 -0.70703,0.29297l-2,2c-0.391,0.391 -0.391,1.02406 0,1.41406l7.29297,7.29297l-7.29297,7.29297c-0.391,0.391 -0.391,1.02406 0,1.41406l2,2c0.391,0.391 1.02406,0.391 1.41406,0l7.29297,-7.29297l7.29297,7.29297c0.39,0.391 1.02406,0.391 1.41406,0l2,-2c0.391,-0.391 0.391,-1.02406 0,-1.41406l-7.29297,-7.29297l7.29297,-7.29297c0.391,-0.39 0.391,-1.02406 0,-1.41406l-2,-2c-0.391,-0.391 -1.02406,-0.391 -1.41406,0l-7.29297,7.29297l-7.29297,-7.29297c-0.1955,-0.1955 -0.45116,-0.29297 -0.70703,-0.29297z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className="gallery__popup">
              <img src={src} alt="" />
            </div>
            <div className="gallery__title">Галерея</div>
            <div className="gallery__grid">
              <div className="gallery__item">
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
