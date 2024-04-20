import React, { Component } from "react";
import { Link } from "react-router-dom";
// Swiper slider imported
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
// image import
import BGtextIMG from "../../../assets/images/background-texts/speakar-watermark.png";
import SpeakerIMG1 from "../../../assets/images/speaker/speaker-s1.png";
import SpeakerIMG2 from "../../../assets/images/speaker/speaker-s2.png";
import SpeakerIMG3 from "../../../assets/images/speaker/speaker-s3.png";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);
class SpeakerSliderArea extends Component {
  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    const sliderInit = {
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 24,
      loop: true,
      roundLengths: true,
      autoplay: {
        delay: 15000,
      },

      pagination: {
        el: ".speaker-two-pagination",
        // type: "custom",
        clickable: true,
      },
      breakpoints: {
        480: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    };
    return (
      <>
        {/* ===============  Speaker area start =============== */}
        <div className="speaker-area pt-110 position-relative">
          <div className="watermark-bg mt-110">
            <img src={BGtextIMG}  alt="Imgs" className="img-fluid" />
          </div>
          <div className="container">
            <div className="row">
              <div className="section-head-style-two">
                <h5>Speaker</h5>
                <h3>
                  Talented <span>Speaker</span>
                </h3>
              </div>
            </div>
            <div className="swiper speaker-slider-two">
              <Swiper {...sliderInit} className="speaker-slider-two">
                <SwiperSlide className="swiper-slide">
                  <div className="speaker-card-two">
                    <div className="speaker-image">
                      <img src={SpeakerIMG1}  alt="Imgs" />
                    </div>
                    <div className="speaker-info">
                      <h4 className="speaker-name">
                        <Link
                          onClick={this.scrollTop}
                          to={`${process.env.PUBLIC_URL}/speaker-details`}
                        >
                          Elizabeth Sofia
                        </Link>
                      </h4>
                      <h6 className="speaker-designation">Business Manager</h6>
                    </div>
                    <ul className="speaker-social-links">
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-whatsapp" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="speaker-card-two">
                    <div className="speaker-image">
                      <img src={SpeakerIMG2}  alt="Imgs" />
                    </div>
                    <div className="speaker-info">
                      <h4 className="speaker-name">
                        <Link
                          onClick={this.scrollTop}
                          to={`${process.env.PUBLIC_URL}/speaker-details`}
                        >
                          Santiago Axel
                        </Link>
                      </h4>
                      <h6 className="speaker-designation">Marketing</h6>
                    </div>
                    <ul className="speaker-social-links">
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-whatsapp" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="speaker-card-two">
                    <div className="speaker-image">
                      <img src={SpeakerIMG3}  alt="Imgs" />
                    </div>
                    <div className="speaker-info">
                      <h4 className="speaker-name">
                        <Link
                          onClick={this.scrollTop}
                          to={`${process.env.PUBLIC_URL}/speaker-details`}
                        >
                          Easton Cooper
                        </Link>
                      </h4>
                      <h6 className="speaker-designation">
                        Senio Visual Designer
                      </h6>
                    </div>
                    <ul className="speaker-social-links">
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-whatsapp" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="speaker-two-pagination d-lg-flex d-none" />
            </div>
          </div>
        </div>
        {/* ===============  Speaker area end =============== */}
      </>
    );
  }
}

export default SpeakerSliderArea;
