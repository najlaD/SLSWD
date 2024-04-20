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
import BlogIMG1 from "../../../assets/images/blog/b-md1.png";
import BlogIMG2 from "../../../assets/images/blog/b-md2.png";
import BlogIMG3 from "../../../assets/images/blog/b-md3.png";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);
class BlogArea extends Component {
  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    const sliderInit = {
      spaceBetween: 20,
      slidesPerView: 3,
      loop: true,
      speed: 2400,
      effect: "slide",
      nav: true,
      navigation: {
        nextEl: ".blog-next",
        prevEl: ".blog-prev",
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
        {/* ===============  Blog area start =============== */}
        <div className="blog-style-two pt-110 position-relative overflow-hidden">
          <div className="container">
            <div className="row">
              <div className="section-head-style-two">
                <h5>Blog</h5>
                <h3>
                  Latest <span>Blog</span>
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 position-relative">
                <div className="blog-slider swiper">
                  <Swiper {...sliderInit} className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="blog-card-md">
                        <div className="blog-thumb">
                          <Link
                            onClick={this.scrollTop}
                            to={`${process.env.PUBLIC_URL}/blog-details`}
                          >
                            <img src={BlogIMG3} alt="BlogIMG" />
                          </Link>
                          <div className="blog-tags">
                            <Link
                              onClick={this.scrollTop}
                              to={`${process.env.PUBLIC_URL}/blog`}
                            >
                              Business
                            </Link>
                          </div>
                        </div>
                        <div className="blog-content">
                          <h4 className="blog-title">
                            <Link
                              onClick={this.scrollTop}
                              to={`${process.env.PUBLIC_URL}/blog-details`}
                            >
                              Vestibulum nec porta erat. In in lobo turpis
                              Suspendisse rtis.
                            </Link>
                          </h4>
                          <div className="blog-bottom">
                            <div className="blog-date">
                              <p>
                                <i className="bi bi-calendar2-week" />
                                <span>02 Septembar, 2021</span>
                              </p>
                            </div>
                            <div className="readme-btn">
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/blog-details`}
                              >
                                Read More
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="blog-card-md">
                        <div className="blog-thumb">
                          <Link
                            onClick={this.scrollTop}
                            to={`${process.env.PUBLIC_URL}/blog-details`}
                          >
                            <img src={BlogIMG2} alt="BlogIMG" />
                          </Link>
                          <div className="blog-tags">
                            <Link
                              onClick={this.scrollTop}
                              to={`${process.env.PUBLIC_URL}/blog`}
                            >
                              Business
                            </Link>
                          </div>
                        </div>
                        <div className="blog-content">
                          <h4 className="blog-title">
                            <Link
                              onClick={this.scrollTop}
                              to={`${process.env.PUBLIC_URL}/blog-details`}
                            >
                              Fusce posuere justo vitae varius elit laoreet
                              Mauris sollicitudin at.
                            </Link>
                          </h4>
                          <div className="blog-bottom">
                            <div className="blog-date">
                              <p>
                                <i className="bi bi-calendar2-week" />
                                <span>02 Septembar, 2021</span>
                              </p>
                            </div>
                            <div className="readme-btn">
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/blog-details`}
                              >
                                Read More
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="blog-card-md">
                        <div className="blog-thumb">
                          <Link
                            onClick={this.scrollTop}
                            to={`${process.env.PUBLIC_URL}/blog-details`}
                          >
                            <img src={BlogIMG1} alt="BlogIMG" />
                          </Link>
                          <div className="blog-tags">
                            <Link
                              onClick={this.scrollTop}
                              to={`${process.env.PUBLIC_URL}/blog`}
                            >
                              Business
                            </Link>
                          </div>
                        </div>
                        <div className="blog-content">
                          <h4 className="blog-title">
                            <Link
                              onClick={this.scrollTop}
                              to={`${process.env.PUBLIC_URL}/blog-details`}
                            >
                              Nam a lacus et lorem pellentesque cursus. Etiam
                              sed gravida..
                            </Link>
                          </h4>
                          <div className="blog-bottom">
                            <div className="blog-date">
                              <p>
                                <i className="bi bi-calendar2-week" />
                                <span>02 Septembar, 2021</span>
                              </p>
                            </div>
                            <div className="readme-btn">
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/blog-details`}
                              >
                                Read More
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="blog-arrows d-xl-block d-none">
                  <div
                    className="blog-prev swiper-arrow-prev"
                    tabIndex={0}
                    role="button"
                    aria-label="Previous slide"
                  >
                    <i className="bi bi-chevron-left" />
                  </div>
                  <div
                    className="blog-next swiper-arrow-prev"
                    tabIndex={0}
                    role="button"
                    aria-label="Next slide"
                  >
                    <i className="bi bi-chevron-right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  Blog area end =============== */}
      </>
    );
  }
}

export default BlogArea;
