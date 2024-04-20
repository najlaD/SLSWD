import React, { Component } from "react";
import { Link } from "react-router-dom";
// page animation
import WOW from "wowjs";
import "../../../assets/css/animate.css";
// image import
import SubBanner from "../../../assets/images/banners/sb-banner.png";
import BlogIMG1 from "../../../assets/images/blog/b-md1.png";
import BlogIMG2 from "../../../assets/images/blog/b-md2.png";
import BlogIMG3 from "../../../assets/images/blog/b-md3.png";
import BlogIMG4 from "../../../assets/images/blog/b-md4.png";
import BlogIMG5 from "../../../assets/images/blog/b-md5.png";
import BlogIMG6 from "../../../assets/images/blog/b-md6.png";
import MiniGallary1 from "../../../assets/images/gallary/mini-g-1.png";
import MiniGallary2 from "../../../assets/images/gallary/mini-g-2.png";
import MiniGallary3 from "../../../assets/images/gallary/mini-g-3.png";
import MiniGallary4 from "../../../assets/images/gallary/mini-g-4.png";
import MiniGallary5 from "../../../assets/images/gallary/mini-g-5.png";
import MiniGallary6 from "../../../assets/images/gallary/mini-g-6.png";

class BlogSidebar extends Component {
  componentDidMount(){
    new WOW.WOW().init()
  }
  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    return (
      <>
        {/* ===============  breadcrumb area start =============== */}
        <div className="breadcrumb-area">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-12">
                <div className="breadcrumb-content">
                  <div className="page-outlined-text">
                    <h1>Blog Sidebar</h1>
                  </div>
                  <h2 className="page-title">Blog Sidebar</h2>
                  <ul className="page-switcher">
                    <li>
                      <Link
                        onClick={this.scrollTop}
                        to={`${process.env.PUBLIC_URL}/`}>
                        Home <i className="bi bi-caret-right" />
                      </Link>
                    </li>
                    <li>Blog Sidebar</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  breadcrumb area end =============== */}
        {/* =============== Blog area start =============== */}
        <div className="blog-sidebar-wrapper ">
          <div className="container position-relative pt-110">
            <div className="row">
              <div className="col-lg-12 ">
                <div className="background-title text-style-one">
                  <h2>Latest News</h2>
                </div>
                <div className="section-head">
                  <h3>Latest News</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="row">
                  <div
                    className="col-lg-6 col-md-6 wow fadeInUp animated"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms">
                    <div className="blog-card-md">
                      <div className="blog-thumb">
                        <Link
                          onClick={this.scrollTop}
                          to={`${process.env.PUBLIC_URL}/blog-details`}>
                          <img src={BlogIMG1}  alt="Imgs" />
                        </Link>
                        <div className="blog-tags">
                          <Link
                            onClick={this.scrollTop}
                            to={`${process.env.PUBLIC_URL}/blog`}>
                            Business
                          </Link>
                        </div>
                      </div>
                      <div className="blog-content">
                        <h4 className="blog-title">
                          <Link
                            onClick={this.scrollTop}
                            to={`${process.env.PUBLIC_URL}/blog-details`}>
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
                              to={`${process.env.PUBLIC_URL}/blog-details`}>
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 col-md-6  wow fadeInUp animated"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms">
                    <div className="blog-card-md">
                      <div className="blog-thumb">
                        <Link
                          onClick={this.scrollTop}
                          to={`${process.env.PUBLIC_URL}/blog-details`}>
                          <img src={BlogIMG2}  alt="Imgs" />
                        </Link>
                        <div className="blog-tags">
                          <Link
                            onClick={this.scrollTop}
                            to={`${process.env.PUBLIC_URL}/blog`}>
                            Business
                          </Link>
                        </div>
                      </div>
                      <div className="blog-content">
                        <h4 className="blog-title">
                          <Link
                            onClick={this.scrollTop}
                            to={`${process.env.PUBLIC_URL}/blog-details`}>
                            Sed bibendum tellus et ultrices vehicula. Sed
                            venenatis posuere mollis.
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
                              to={`${process.env.PUBLIC_URL}/blog-details`}>
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 col-md-6  wow fadeInUp animated"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms">
                    <div className="blog-card-md">
                      <div className="blog-thumb">
                        <Link
                          onClick={this.scrollTop}
                          to={`${process.env.PUBLIC_URL}/blog-details`}>
                          <img src={BlogIMG3}  alt="Imgs" />
                        </Link>
                        <div className="blog-tags">
                          <Link
                            onClick={this.scrollTop}
                            to={`${process.env.PUBLIC_URL}/blog`}>
                            Business
                          </Link>
                        </div>
                      </div>
                      <div className="blog-content">
                        <h4 className="blog-title">
                          <Link
                            onClick={this.scrollTop}
                            to={`${process.env.PUBLIC_URL}/blog-details`}>
                            Quisque sit amet tristique lorem, at blandit odio.
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
                              to={`${process.env.PUBLIC_URL}/blog-details`}>
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 col-md-6 wow fadeInUp animated"
                    data-wow-delay="400ms"
                    data-wow-duration="1500ms">
                    <div className="blog-card-md">
                      <div className="blog-thumb">
                        <Link
                          onClick={this.scrollTop}
                          to={`${process.env.PUBLIC_URL}/blog-details`}>
                          <img src={BlogIMG4}  alt="Imgs" />
                        </Link>
                        <div className="blog-tags">
                          <Link
                            onClick={this.scrollTop}
                            to={`${process.env.PUBLIC_URL}/blog`}>
                            Business
                          </Link>
                        </div>
                      </div>
                      <div className="blog-content">
                        <h4 className="blog-title">
                          <Link
                            onClick={this.scrollTop}
                            to={`${process.env.PUBLIC_URL}/blog-details`}>
                            Sed bibendum tellus et ultrices vehicula. Sed
                            venenatis posuere mollis.
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
                              to={`${process.env.PUBLIC_URL}/blog-details`}>
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 col-md-6  wow fadeInUp animated"
                    data-wow-delay="400ms"
                    data-wow-duration="1500ms">
                    <div className="blog-card-md">
                      <div className="blog-thumb">
                        <Link
                          onClick={this.scrollTop}
                          to={`${process.env.PUBLIC_URL}/blog-details`}>
                          <img src={BlogIMG5}  alt="Imgs" />
                        </Link>
                        <div className="blog-tags">
                          <Link
                            onClick={this.scrollTop}
                            to={`${process.env.PUBLIC_URL}/blog`}>
                            Business
                          </Link>
                        </div>
                      </div>
                      <div className="blog-content">
                        <h4 className="blog-title">
                          <Link
                            onClick={this.scrollTop}
                            to={`${process.env.PUBLIC_URL}/blog-details`}>
                            Proin pretium nunc ut nulla congue, quis dictum ex
                            tristique.
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
                              to={`${process.env.PUBLIC_URL}/blog-details`}>
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 col-md-6  wow fadeInUp animated"
                    data-wow-delay="400ms"
                    data-wow-duration="1500ms">
                    <div className="blog-card-md">
                      <div className="blog-thumb">
                        <Link
                          onClick={this.scrollTop}
                          to={`${process.env.PUBLIC_URL}/blog-details`}>
                          <img src={BlogIMG6}  alt="Imgs" />
                        </Link>
                        <div className="blog-tags">
                          <Link
                            onClick={this.scrollTop}
                            to={`${process.env.PUBLIC_URL}/blog`}>
                            Business
                          </Link>
                        </div>
                      </div>
                      <div className="blog-content">
                        <h4 className="blog-title">
                          <Link
                            onClick={this.scrollTop}
                            to={`${process.env.PUBLIC_URL}/blog-details`}>
                            Praesent elementum, diam vel vestibulum vehicula,
                            tellus elit .
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
                              to={`${process.env.PUBLIC_URL}/blog-details`}>
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 col-md-6 wow fadeInUp animated"
                    data-wow-delay="500ms"
                    data-wow-duration="1500ms">
                    <div className="blog-card-md">
                      <div className="blog-thumb">
                        <Link
                          onClick={this.scrollTop}
                          to={`${process.env.PUBLIC_URL}/blog-details`}>
                          <img src={BlogIMG1}  alt="Imgs" />
                        </Link>
                        <div className="blog-tags">
                          <Link
                            onClick={this.scrollTop}
                            to={`${process.env.PUBLIC_URL}/blog`}>
                            Business
                          </Link>
                        </div>
                      </div>
                      <div className="blog-content">
                        <h4 className="blog-title">
                          <Link
                            onClick={this.scrollTop}
                            to={`${process.env.PUBLIC_URL}/blog-details`}>
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
                              to={`${process.env.PUBLIC_URL}/blog-details`}>
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 col-md-6  wow fadeInUp animated"
                    data-wow-delay="500ms"
                    data-wow-duration="1500ms">
                    <div className="blog-card-md">
                      <div className="blog-thumb">
                        <Link
                          onClick={this.scrollTop}
                          to={`${process.env.PUBLIC_URL}/blog-details`}>
                          <img src={BlogIMG2}  alt="Imgs" />
                        </Link>
                        <div className="blog-tags">
                          <Link
                            onClick={this.scrollTop}
                            to={`${process.env.PUBLIC_URL}/blog`}>
                            Business
                          </Link>
                        </div>
                      </div>
                      <div className="blog-content">
                        <h4 className="blog-title">
                          <Link
                            onClick={this.scrollTop}
                            to={`${process.env.PUBLIC_URL}/blog-details`}>
                            Fusce porta vulputate leo sit amet sodales inceptos
                            himenaeos.
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
                              to={`${process.env.PUBLIC_URL}/blog-details`}>
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 col-md-6  wow fadeInUp animated"
                    data-wow-delay="500ms"
                    data-wow-duration="1500ms">
                    <div className="blog-card-md">
                      <div className="blog-thumb">
                        <Link
                          onClick={this.scrollTop}
                          to={`${process.env.PUBLIC_URL}/blog-details`}>
                          <img src={BlogIMG3}  alt="Imgs" />
                        </Link>
                        <div className="blog-tags">
                          <Link
                            onClick={this.scrollTop}
                            to={`${process.env.PUBLIC_URL}/blog`}>
                            Business
                          </Link>
                        </div>
                      </div>
                      <div className="blog-content">
                        <h4 className="blog-title">
                          <Link
                            onClick={this.scrollTop}
                            to={`${process.env.PUBLIC_URL}/blog-details`}>
                            Curabitur a aliquam diam, eget tempor justo
                            praesent.
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
                              to={`${process.env.PUBLIC_URL}/blog-details`}>
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 col-md-6 wow fadeInUp animated"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms">
                    <div className="blog-card-md">
                      <div className="blog-thumb">
                        <Link
                          onClick={this.scrollTop}
                          to={`${process.env.PUBLIC_URL}/blog-details`}>
                          <img src={BlogIMG4}  alt="Imgs" />
                        </Link>
                        <div className="blog-tags">
                          <Link
                            onClick={this.scrollTop}
                            to={`${process.env.PUBLIC_URL}/blog`}>
                            Business
                          </Link>
                        </div>
                      </div>
                      <div className="blog-content">
                        <h4 className="blog-title">
                          <Link
                            onClick={this.scrollTop}
                            to={`${process.env.PUBLIC_URL}/blog-details`}>
                            Proin mi ex, hendrerit mollis mi non, viverra
                            euismod tortor.
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
                              to={`${process.env.PUBLIC_URL}/blog-details`}>
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="custom-pagination text-center">
                    <ul className="page-list">
                      <li className="has-arrow">
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="bi bi-chevron-left" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={this.scrollTop}
                          to={"#"}
                          className="active-page">
                          1
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          2
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          3
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          4
                        </Link>
                      </li>
                      <li className="has-arrow">
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="bi bi-chevron-right" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="blog-sidebar">
                  <div className="sb-category">
                    <div className="category-title">
                      <i className="bi bi-list-task" /> <h4>Category</h4>
                    </div>
                    <ul className="category-list">
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          Business
                          <div className="category-lavel">
                            <span>20</span>
                            <i className="bi bi-box-arrow-right" />
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          Marketing
                          <div className="category-lavel">
                            <span>10</span>
                            <i className="bi bi-box-arrow-right" />
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          Web Development
                          <div className="category-lavel">
                            <span>50</span>
                            <i className="bi bi-box-arrow-right" />
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          Accounting
                          <div className="category-lavel">
                            <span>07</span>
                            <i className="bi bi-box-arrow-right" />
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          Software
                          <div className="category-lavel">
                            <span>18</span>
                            <i className="bi bi-box-arrow-right" />
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          Graphic Design
                          <div className="category-lavel">
                            <span>12</span>
                            <i className="bi bi-box-arrow-right" />
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          Web Design
                          <div className="category-lavel">
                            <span>00</span>
                            <i className="bi bi-box-arrow-right" />
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="sb-tags">
                    <div className="category-title">
                      <i className="bi bi-tags" /> <h4>Tags</h4>
                    </div>
                    <ul className="tag-list">
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          Business
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          Marketing
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          Web
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          Marketing
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          Speaker
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          Design
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          Graphic
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          Software
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          Business
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="sb-gallary">
                    <div className="category-title">
                      <i className="bi bi-images" /> <h4>Gallery</h4>
                    </div>
                    <ul className="blog-gallary-grid">
                      <li>
                        <img src={MiniGallary1}  alt="Imgs" />
                        <Link
                          onClick={this.scrollTop}
                          to="assets/images/gallary/mini-g-1.png"
                          data-fancybox="gallery"
                          data-caption="Caption Here"
                          className="gallary-overlay">
                          <i className="bi bi-eye" />
                        </Link>
                      </li>
                      <li>
                        <img src={MiniGallary2}  alt="Imgs" />
                        <Link
                          onClick={this.scrollTop}
                          to="assets/images/gallary/mini-g-2.png"
                          data-fancybox="gallery"
                          data-caption="Caption Here"
                          className="gallary-overlay">
                          <i className="bi bi-eye" />
                        </Link>
                      </li>
                      <li>
                        <img src={MiniGallary3}  alt="Imgs" />
                        <Link
                          onClick={this.scrollTop}
                          to="assets/images/gallary/mini-g-3.png"
                          data-fancybox="gallery"
                          data-caption="Caption Here"
                          className="gallary-overlay">
                          <i className="bi bi-eye" />
                        </Link>
                      </li>
                      <li>
                        <img src={MiniGallary4}  alt="Imgs" />
                        <Link
                          onClick={this.scrollTop}
                          to="assets/images/gallary/mini-g-4.png"
                          data-fancybox="gallery"
                          data-caption="Caption Here"
                          className="gallary-overlay">
                          <i className="bi bi-eye" />
                        </Link>
                      </li>
                      <li>
                        <img src={MiniGallary5}  alt="Imgs" />
                        <Link
                          onClick={this.scrollTop}
                          to="assets/images/gallary/mini-g-5.png"
                          data-fancybox="gallery"
                          data-caption="Caption Here"
                          className="gallary-overlay">
                          <i className="bi bi-eye" />
                        </Link>
                      </li>
                      <li>
                        <img src={MiniGallary6}  alt="Imgs" />
                        <Link
                          onClick={this.scrollTop}
                          to="assets/images/gallary/mini-g-6.png"
                          data-fancybox="gallery"
                          data-caption="Caption Here"
                          className="gallary-overlay">
                          <i className="bi bi-eye" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="sb-social-icon">
                    <div className="category-title">
                      <i className="bi bi-plus-circle" /> <h4>Follow</h4>
                    </div>
                    <ul className="sb-social-icon-list">
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
                  <div className="sb-banner">
                    <Link
                      onClick={this.scrollTop}
                      to={`${process.env.PUBLIC_URL}/event-details`}>
                      <img src={SubBanner}  alt="Imgs" className="img-fluid" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* =============== Blog area end =============== */}
      </>
    );
  }
}

export default BlogSidebar;
