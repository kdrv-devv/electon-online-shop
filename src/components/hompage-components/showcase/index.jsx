import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "./showcase.scss";
// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";
// import img
import showcaseRight from "./imges/showcase-right.png";
const Showcase = () => {
  return (
    <section className="showcase">
      <div className="container">
        <Swiper
          modules={[Pagination, Navigation]}
          slidesPerView={1} // Har bir vaqt ko'rinadigan slaydlar soni
          spaceBetween={20} // Slaydlar orasidagi bo'shliq
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="showcase-item">
              <div className="showcase-left">
                <h3>
                  Canon <br />
                  camera
                </h3>
                <div className="buttons">
                  <button style={{ backgroundColor: "#eda315" }}>
                    Shop now
                  </button>
                  <button className="bnt2">View more</button>
                </div>
              </div>
              <div className="showcase-right">
                <img src={showcaseRight} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="showcase-item">
              <div className="showcase-left">
                <h3>
                  Canon <br />
                  camera
                </h3>
                <div className="buttons">
                  <button style={{ backgroundColor: "#eda315" }}>
                    Shop now
                  </button>
                  <button className="bnt2">View more</button>
                </div>
              </div>
              <div className="showcase-right">
                <img src={showcaseRight} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="showcase-item">
              <div className="showcase-left">
                <h3>
                  Canon <br />
                  camera
                </h3>
                <div className="buttons">
                  <button style={{ backgroundColor: "#eda315" }}>
                    Shop now
                  </button>
                  <button className="bnt2">View more</button>
                </div>
              </div>
              <div className="showcase-right">
                <img src={showcaseRight} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Showcase;
