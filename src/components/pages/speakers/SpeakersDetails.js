import React, { Component } from "react";
import CountUp from "react-countup";
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
import IconQuote from "../../../assets/images/icons/qoute-icon.png";
import Shapes2 from "../../../assets/images/shapes/testi-shape2.png";
import SIngleSpeaker from "../../../assets/images/speaker/speaker-single.png";
import SIngleSpeaker2 from "../../../assets/images/speaker/speaker-testi2.png";
import SIngleSpeaker3 from "../../../assets/images/speaker/speaker-testi3.png";
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);
class SpeakersDetails extends Component {
  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    const FeedbackSlider = {
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 24,
      loop: true,
      roundLengths: true,
      autoplay: {
        delay: 12000,
      },
      navigation: {
        nextEl: ".feedback-next",
        prevEl: ".feedback-prev",
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
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
        {/* ===============  breadcrumb area start =============== */}
        <div className="breadcrumb-area">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-12">
                <div className="breadcrumb-content">
                  <div className="page-outlined-text">
                    <h1> Speaker Details</h1>
                  </div>
                  <h2 className="page-title">Speaker Details</h2>
                  <ul className="page-switcher">
                    <li>
                      <Link
                        onClick={this.scrollTop}
                        to={`${process.env.PUBLIC_URL}/`}
                      >
                        Home <i className="bi bi-caret-right" />
                      </Link>
                    </li>
                    <li>Speaker Details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  breadcrumb area end =============== */}
        {/* ===============  Speaker details wrapper start =============== */}
        <div className="speaker-details-wrapper ">
          <div className="container pt-120 position-relative">
            <div className="background-title text-style-one">
              <h2>Santiago Axel</h2>
            </div>
            <div className="speaker-details-intro">
              <div className="row d-flex align-items-center">
                <div className="col-lg-5">
                  <div className="speker-thumb">
                    <img src={SIngleSpeaker} alt="Imgs" className="img-fluid" />
                  </div>
                </div>
                <div className="col-lg-7 ">
                  <div className="single-speaker-info">
                    <h3 className="speaker-name">Santiago Axel</h3>
                    <h6>Motivational Speaker</h6>
                    <p>
                      Cras semper, massa vel aliquam luctus, eros odio tempor
                      turpis, ac placerat metus tortor eget magna. Donec mattis
                      posuere pharetra. Donec vestibulum ornare velit ut
                      sollicitudin. Pellentesque in faucibus purus.Nulla nisl
                      tellus, hendrerit nec dignissim pellentesque, posuere in
                      est. Suspendisse bibendum vestibulum elit eu placerat. In
                      ut ipsum in odio euismod tincidunt non lacinia nunc. Donec
                      ligula augue, mattis eu varius ac, tempus vel ex.
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis egestas. Nam viverra porttitor
                      urna
                    </p>
                    <ul className="single-speaker-social">
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
                </div>
              </div>
            </div>
          </div>
          <div className="speaker-achievement-counter mt-110">
            <div className="container">
              <div className="speaker-achievement-wrap">
                <h4>Experience</h4>
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="speaker-achievement-single">
                      <h2>
                        <CountUp
                          start={0}
                          end={100}
                          duration={3.75}
                          className="number"
                        ></CountUp>
                        +
                      </h2>
                      <h5>Speak Complete</h5>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="speaker-achievement-single">
                      <h2>
                        <CountUp
                          start={0}
                          end={500}
                          duration={2.75}
                          className="number"
                        ></CountUp>
                        +
                      </h2>
                      <h5>Event Done</h5>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="speaker-achievement-single">
                      <h2>
                        <CountUp
                          start={0}
                          end={100}
                          duration={3.75}
                          className="number"
                        ></CountUp>
                        +
                      </h2>
                      <h5>New Schedule</h5>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="speaker-achievement-single">
                      <h2>
                        <CountUp
                          start={0}
                          end={800}
                          duration={4.75}
                          className="number"
                        ></CountUp>
                        +
                      </h2>
                      <h5>Participants</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container pt-110 position-relative">
            <div className="row">
              <div className="col-lg-12">
                <div className="background-title text-style-one">
                  <h2>People Feedback</h2>
                </div>
                <div className="section-head">
                  <h3>What people say about me</h3>
                </div>
              </div>
            </div>
            <div className="feedback-slider-wrapper position-relative">
              <div className="feedback-slider swiper">
                <Swiper {...FeedbackSlider} className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="feedback-card">
                      <div className="testimonial-shape">
                        <img src={Shapes2} alt="Imgs" />
                      </div>
                      <div className="testimonial-top">
                        <div className="reviewer-image">
                          <img src={SIngleSpeaker2} alt="Imgs" />
                        </div>
                        <div className="reviewer-info">
                          <div className="quote-icon">
                            <img src={IconQuote} alt="Imgs" />
                          </div>
                          <h3 className="reviewer-name">Willow Lucy</h3>
                        </div>
                      </div>
                      <div className="review-texts">
                        <p>
                          Cras semper, massa vel aliquam luctus, eros odio
                          tempor turpis, ac placerat metus tortor eget magna.
                          Donec mattis posuere pharetra.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="feedback-card">
                      <div className="testimonial-shape">
                        <img src={Shapes2} alt="Imgs" />
                      </div>
                      <div className="testimonial-top">
                        <div className="reviewer-image">
                          <img src={SIngleSpeaker2} alt="Imgs" />
                        </div>
                        <div className="reviewer-info">
                          <div className="quote-icon">
                            <img src={IconQuote} alt="Imgs" />
                          </div>
                          <h3 className="reviewer-name">John Smith</h3>
                        </div>
                      </div>
                      <div className="review-texts">
                        <p>
                          Cras semper, massa vel aliquam luctus, eros odio
                          tempor turpis, ac placerat metus tortor eget magna.
                          Donec mattis posuere pharetra.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="feedback-card">
                      <div className="testimonial-shape">
                        <img src={Shapes2} alt="Imgs" />
                      </div>
                      <div className="testimonial-top">
                        <div className="reviewer-image">
                          <img src={SIngleSpeaker3} alt="Imgs" />
                        </div>
                        <div className="reviewer-info">
                          <div className="quote-icon">
                            <img src={IconQuote} alt="Imgs" />
                          </div>
                          <h3 className="reviewer-name">Scarlett Eleanor</h3>
                        </div>
                      </div>
                      <div className="review-texts">
                        <p>
                          Cras semper, massa vel aliquam luctus, eros odio
                          tempor turpis, ac placerat metus tortor eget magna.
                          Donec mattis posuere pharetra.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="feedback-arrows d-xl-block d-none">
                <div
                  className="feedback-prev swiper-arrow-prev"
                  tabIndex={0}
                  role="button"
                  aria-label="Previous slide"
                >
                  <i className="bi bi-chevron-left" />
                </div>
                <div
                  className="feedback-next swiper-arrow-prev"
                  tabIndex={0}
                  role="button"
                  aria-label="Next slide"
                >
                  <i className="bi bi-chevron-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-96">
            <div className="speaker-contact-form text-center">
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <form action="#" id="contact-form">
                    <h2>Contact me</h2>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="primary-input-group">
                          <input type="text" id="name" placeholder="Name" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="primary-input-group">
                          <input type="text" id="email" placeholder="Email" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="primary-input-group">
                          <input type="text" id="link" placeholder="Website" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="primary-input-group">
                          <textarea
                            name="massege"
                            id="massege"
                            cols={30}
                            rows={7}
                            placeholder="Message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="submit-btn">
                        <button type="submit" className="primary-submit">
                          Contact Me
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  Speaker details wrapper start =============== */}
      </>
    );
  }
}

export default SpeakersDetails;
