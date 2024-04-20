import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
// Swiper slider imported

import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
import Gallary7 from "../../../assets/images/gallary/g-l1.png";
// gallary image
import Gallary6 from "../../../assets/images/gallary/g-l2.png";
import Gallary3 from "../../../assets/images/gallary/g-l3.png";
import Gallary4 from "../../../assets/images/gallary/g-sm1.png";
import Gallary5 from "../../../assets/images/gallary/g-sm2.png";
import Gallary1 from "../../../assets/images/gallary/g-xl1.png";
import Gallary2 from "../../../assets/images/gallary/g-xl2.png";
class Gallary extends Component {
  render() {
    const gallayoneSlide = {
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 24,
      loop: true,
      centeredSlides: true,
      roundLengths: true,
      autoplay: {
        delay: 9000,
      },
      navigation: {
        nextEl: ".gallary-next1",
        prevEl: ".gallary-prev1",
      },

      breakpoints: {
        480: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    };
    const gallayTwosilde = {
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 24,
      loop: true,
      centeredSlides: true,
      roundLengths: true,
      autoplay: {
        delay: 12000,
      },
      navigation: {
        nextEl: ".gallary-next2",
        prevEl: ".gallary-prev2",
      },
      breakpoints: {
        480: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    };
    return (
      <>
        {/* ===============  breadcrumb area start =============== */}
        <div className="breadcrumb-area">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-12">
                <div className="breadcrumb-content">
                  <div className="page-outlined-text">
                    <h1>Gallary</h1>
                  </div>
                  <h2 className="page-title">Gallery</h2>
                  <ul className="page-switcher">
                    <li>
                      <Link to={"/"}>
                        Home <i className="bi bi-caret-right" />
                      </Link>
                    </li>
                    <li>Gallery</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  breadcrumb area end =============== */}
        {/* ===============  gallary wrapper start =============== */}
        <div className="gallary-wrapper">
          <div className="container pt-110 position-relative">
            <div className="row">
              <div className="col-lg-12">
                <div className="background-title text-style-one">
                  <h2>Gallery</h2>
                </div>
                <div className="section-head">
                  <h3>Gallery</h3>
                </div>
              </div>
            </div>
            <div className="gallary-group">
              <div className="gallary-group-header">
                <h4 className="gallary-group-title">Conference Gallery</h4>
                <div className="gallary-arrows text-center d-lg-block d-none">
                  <div
                    className="gallary-button-prev gallary-prev1"
                    tabIndex={0}
                    role="button"
                    aria-label="Previous slide"
                  >
                    <i className="bi bi-chevron-left" />
                  </div>
                  <div
                    className="gallary-button-next gallary-next1"
                    tabIndex={0}
                    role="button"
                    aria-label="Next slide"
                  >
                    <i className="bi bi-chevron-right" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="swiper gallary-slider">
                  <SRLWrapper>
                    <Swiper className="swiper-wrapper" {...gallayoneSlide}>
                      <SwiperSlide className="swiper-slide">
                        <div className="gallary-item">
                          <img src={Gallary1} alt="GallaryIMAGE" />
                          <Link className="gallary-item-overlay" to={Gallary1}>
                            <img src={Gallary1} alt="GallaryIMAGE" />
                          </Link>
                        </div>
                        <div className="gallary-item">
                          <img src={Gallary7} alt="GallaryIMAGE" />
                          <Link to={Gallary7} className="gallary-item-overlay">
                            <img src={Gallary7} alt="GallaryIMAGE" />
                          </Link>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="gallary-item">
                          <img src={Gallary4} alt="GallaryIMAGE" />
                          <Link to={Gallary4} className="gallary-item-overlay">
                            <img src={Gallary4} alt="GallaryIMAGE" />
                          </Link>
                        </div>
                        <div className="gallary-item">
                          <img src={Gallary5} alt="GallaryIMAGE" />
                          <Link to={Gallary5} className="gallary-item-overlay">
                            <img src={Gallary5} alt="GallaryIMAGE" />
                          </Link>
                        </div>
                        <div className="gallary-item">
                          <img src={Gallary6} alt="GallaryIMAGE" />
                          <Link to={Gallary6} className="gallary-item-overlay">
                            <img src={Gallary6} alt="GallaryIMAGE" />
                          </Link>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="gallary-item">
                          <img src={Gallary2} alt="GallaryIMAGE" />
                          <Link to={Gallary2} className="gallary-item-overlay">
                            <img src={Gallary2} alt="GallaryIMAGE" />
                          </Link>
                        </div>
                        <div className="gallary-item">
                          <img src={Gallary3} alt="GallaryIMAGE" />
                          <Link to={Gallary3} className="gallary-item-overlay">
                            <img src={Gallary3} alt="GallaryIMAGE" />
                          </Link>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </SRLWrapper>
                </div>
              </div>
            </div>
            <div className="gallary-group mt-110">
              <div className="gallary-group-header">
                <h4 className="gallary-group-title">Eventlab Gallery</h4>
                <div className="gallary-arrows text-center d-lg-block d-none">
                  <div
                    className="gallary-button-prev gallary-prev2 "
                    tabIndex={0}
                    role="button"
                    aria-label="Previous slide"
                  >
                    <i className="bi bi-chevron-left" />
                  </div>
                  <div
                    className="gallary-button-next gallary-next2"
                    tabIndex={0}
                    role="button"
                    aria-label="Next slide"
                  >
                    <i className="bi bi-chevron-right" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="swiper gallary-slider2">
                  <SRLWrapper>
                    <Swiper className="swiper-wrapper" {...gallayTwosilde}>
                      <SwiperSlide className="swiper-slide">
                        <div className="gallary-item position-relative">
                          <img src={Gallary1} alt="GallaryIMAGE" />
                          <Link to={Gallary1} className="gallary-item-overlay">
                            <img src={Gallary1} alt="GallaryIMAGE" />
                          </Link>
                        </div>
                        <div className="gallary-item">
                          <img src={Gallary7} alt="GallaryIMAGE" />
                          <Link to={Gallary7} className="gallary-item-overlay">
                            <img src={Gallary7} alt="GallaryIMAGE" />
                          </Link>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="gallary-item">
                          <img src={Gallary7} alt="GallaryIMAGE" />
                          <Link to={Gallary7} className="gallary-item-overlay">
                            <img src={Gallary7} alt="GallaryIMAGE" />
                          </Link>
                        </div>
                        <div className="gallary-item">
                          <img src={Gallary5} alt="GallaryIMAGE" />
                          <Link to={Gallary5} className="gallary-item-overlay">
                            <img src={Gallary5} alt="GallaryIMAGE" />
                          </Link>
                        </div>
                        <div className="gallary-item">
                          <img src={Gallary6} alt="GallaryIMAGE" />
                          <Link to={Gallary6} className="gallary-item-overlay">
                            <img src={Gallary6} alt="GallaryIMAGE" />
                          </Link>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="gallary-item">
                          <img src={Gallary2} alt="GallaryIMAGE" />
                          <Link to={Gallary2} className="gallary-item-overlay">
                            <img src={Gallary2} alt="GallaryIMAGE" />
                          </Link>
                        </div>
                        <div className="gallary-item">
                          <img src={Gallary3} alt="GallaryIMAGE" />
                          <Link to={Gallary3} className="gallary-item-overlay">
                            <img src={Gallary3} alt="GallaryIMAGE" />
                          </Link>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </SRLWrapper>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  gallary wrapper end =============== */}
      </>
    );
  }
}

export default Gallary;
