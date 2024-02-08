import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import pic1 from "../media/jpg/pic1.jpg";
import pic2 from "../media/jpg/pic2.jpg";
import pic3 from "../media/jpg/pic3.jpg";
import pic4 from "../media/jpg/pic4.jpg";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Testimonial() {
  useEffect(() => {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        1920: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        425: {
          slidesPerView: 1,
        },
        375: {
          slidesPerView: 1,
        },
        320: {
          slidesPerView: 1,
        },
      },
    });

    console.log("tstimonial loads");
    return () => {
      // Destroy Swiper instance when the component unmounts
      swiper.destroy();
    };
  }, []);

  return (
    <React.Fragment>
      <section className="testiSec sectionPadding">
        <div className="container" id="sliderCont">
          <div className="innerCont">
            <h2>What they think</h2>
            <div className="swiper-container">
              <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="card">
                      <div className="image">
                        <img src={pic1} alt="Card Image" />
                      </div>
                      <h3>Ayo Ogunseinde</h3>
                      <h5>Fashion Model</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Possimus, numquam facere quod blanditiis pariatur
                        minima. Mollitia soluta quas voluptatibus accusamus?
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card">
                      <div className="image">
                        <img src={pic2} alt="Card Image" />
                      </div>
                      <h3>Aiony Haust</h3>
                      <h5>Product Manager</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Possimus, numquam facere quod blanditiis pariatur
                        minima. Mollitia soluta quas voluptatibus accusamus?
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card">
                      <div className="image">
                        <img src={pic3} alt="Card Image" />
                      </div>
                      <h3>Ian Dooley</h3>
                      <h5>Online Teacher</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Possimus, numquam facere quod blanditiis pariatur
                        minima. Mollitia soluta quas voluptatibus accusamus?
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card">
                      <div className="image">
                        <img src={pic4} alt="Card Image" />
                      </div>
                      <h3>Rafaella Mendes</h3>
                      <h5>Sale Manager</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Possimus, numquam facere quod blanditiis pariatur
                        minima. Mollitia soluta quas voluptatibus accusamus?
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card">
                      <div className="image">
                        <img src={pic1} alt="Card Image" />
                      </div>
                      <h3>Ayo Ogunseinde</h3>
                      <h5>Fashion Model</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Possimus, numquam facere quod blanditiis pariatur
                        minima. Mollitia soluta quas voluptatibus accusamus?
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card">
                      <div className="image">
                        <img src={pic2} alt="Card Image" />
                      </div>
                      <h3>Aiony Haust</h3>
                      <h5>Product Manager</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Possimus, numquam facere quod blanditiis pariatur
                        minima. Mollitia soluta quas voluptatibus accusamus?
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card">
                      <div className="image">
                        <img src={pic3} alt="Card Image" />
                      </div>
                      <h3>Ian Dooley</h3>
                      <h5>Online Teacher</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Possimus, numquam facere quod blanditiis pariatur
                        minima. Mollitia soluta quas voluptatibus accusamus?
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card">
                      <div className="image">
                        <img src={pic4} alt="Card Image" />
                      </div>
                      <h3>Rafaella Mendes</h3>
                      <h5>Sale Manager</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Possimus, numquam facere quod blanditiis pariatur
                        minima. Mollitia soluta quas voluptatibus accusamus?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- If we need pagination --> */}
              <div className="swiper-pagination"></div>

              {/* <!-- If we need navigation buttons --> */}
              {/* <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div> */}

              {/* <!-- If we need scrollbar --> */}
              <div className="swiper-scrollbar"></div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
export default Testimonial;
