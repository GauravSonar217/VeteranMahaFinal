import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";
import pic from "../media/jpg/divyaimg.jpg";
import pic1 from "../media/jpg/pic1.jpg";
import pic3 from "../media/jpg/pic3.jpg";
import pic4 from "../media/jpg/pic4.jpg";
import quote from "../media/svg/quote.svg";
import quoteright from "../media/svg/btmquto.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
// SwiperCore.use([Pagination, Navigation, Autoplay]);

export default function SwiperSlider() {
  return (
    <>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper testimonial"

          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide className="slide">
            <img src={pic} alt="" className="image" />
            <p>
              <img src={quote} alt="" /> Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Aperiam, saepe provident dolorem a quaerat quo
              error facere nihil deleniti eligendi ipsum adipisci, fugit,
              architecto amet asperiores doloremque Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Doloribus labore quibusdam
              aspernatur, eveniet saepe dolores fugiat aperiam
              <img src={quoteright} alt="" />
            </p>
            <div className="details">
              <span className="name">Lorem, ipsum dolor.</span>
              <span className="job">Lorem, ipsum.</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img src={pic1} alt="" className="image" />
            <p>
              <img src={quote} alt="" /> Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Aperiam, saepe provident dolorem a quaerat quo
              error facere nihil deleniti eligendi ipsum adipisci, fugit,
              architecto amet asperiores doloremque Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Doloribus labore quibusdam
              aspernatur, eveniet saepe dolores fugiat aperiam
              <img src={quoteright} alt="" />
            </p>
            <div className="details">
              <span className="name">Lorem, ipsum dolor.</span>
              <span className="job">Lorem, ipsum.</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img src={pic3} alt="" className="image" />
            <p>
              <img src={quote} alt="" /> Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Aperiam, saepe provident dolorem a quaerat quo
              error facere nihil deleniti eligendi ipsum adipisci, fugit,
              architecto amet asperiores doloremque Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Doloribus labore quibusdam
              aspernatur, eveniet saepe dolores fugiat aperiam
              <img src={quoteright} alt="" />
            </p>
            <div className="details">
              <span className="name">Lorem, ipsum dolor.</span>
              <span className="job">Lorem, ipsum.</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img src={pic4} alt="" className="image" />
            <p>
              <img src={quote} alt="" /> Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Aperiam, saepe provident dolorem a quaerat quo
              error facere nihil deleniti eligendi ipsum adipisci, fugit,
              architecto amet asperiores doloremque Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Doloribus labore quibusdam
              aspernatur, eveniet saepe dolores fugiat aperiam
              <img src={quoteright} alt="" />
            </p>
            <div className="details">
              <span className="name">Lorem, ipsum dolor.</span>
              <span className="job">Lorem, ipsum.</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img src={pic} alt="" className="image" />
            <p>
              <img src={quote} alt="" /> Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Aperiam, saepe provident dolorem a quaerat quo
              error facere nihil deleniti eligendi ipsum adipisci, fugit,
              architecto amet asperiores doloremque Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Doloribus labore quibusdam
              aspernatur, eveniet saepe dolores fugiat aperiam
              <img src={quoteright} alt="" />
            </p>
            <div className="details">
              <span className="name">Lorem, ipsum dolor.</span>
              <span className="job">Lorem, ipsum.</span>
            </div>
          </SwiperSlide>
        </Swiper>
    
    </>
  );
}
