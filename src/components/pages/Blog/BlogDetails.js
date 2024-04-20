import React, { Component } from "react";
import { Link } from "react-router-dom";
// image import
import subbanner from "../../../assets/images/banners/sb-banner.png";
import Subtitile from "../../../assets/images/blog/blog-d-extra.png";
import BlogTumb from "../../../assets/images/blog/blog-d-thumb.png";
import MiniGallary1 from "../../../assets/images/gallary/mini-g-1.png";
import MiniGallary2 from "../../../assets/images/gallary/mini-g-2.png";
import MiniGallary3 from "../../../assets/images/gallary/mini-g-3.png";
import MiniGallary4 from "../../../assets/images/gallary/mini-g-4.png";
import MiniGallary5 from "../../../assets/images/gallary/mini-g-5.png";
import MiniGallary6 from "../../../assets/images/gallary/mini-g-6.png";
import quote1 from "../../../assets/images/icons/quote-b1.png";
import quote2 from "../../../assets/images/icons/quote-b2.png";
import ReplyIcon from "../../../assets/images/icons/reply-icon.png";
import Commentor1 from "../../../assets/images/speaker/commentor-1.png";
import Commentor2 from "../../../assets/images/speaker/commentor-2.png";
import Commentor3 from "../../../assets/images/speaker/commentor-3.png";
class BlogDetails extends Component {
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
                    <h1>Blog Details</h1>
                  </div>
                  <h2 className="page-title">Blog Details</h2>
                  <ul className="page-switcher">
                    <li>
                      <Link
                        onClick={this.scrollTop}
                        to={`${process.env.PUBLIC_URL}/`}>
                        Home <i className="bi bi-caret-right" />
                      </Link>
                    </li>
                    <li>Blog Details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  breadcrumb area end =============== */}
        {/* =============== Blog area start =============== */}
        <div className="blog-details-wrapper ">
          <div className="container position-relative pt-110">
            <div className="background-title">
              <h2>Blog Details</h2>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="blog-details">
                  <div className="blog-d-top">
                    <h2 className="blog-d-title">
                      <Link onClick={this.scrollTop} to={"#"}>
                        Vestibulum nec porta erat. In in lobo turpis With on
                        Suspendisse rtis.
                      </Link>
                    </h2>
                    <div className="blog-top-info">
                      <Link
                        onClick={this.scrollTop}
                        to={"#"}
                        className="writer">
                        <i className="bi bi-person" /> Angry Wheal
                      </Link>
                      <Link
                        onClick={this.scrollTop}
                        to={"#"}
                        className="blog-date">
                        {" "}
                        <i className="bi bi-calendar2-week" />{" "}
                        <span>02 Septembar, 2021</span>
                      </Link>
                      <Link
                        onClick={this.scrollTop}
                        to={"#"}
                        className="blog-tag">
                        <i className="bi bi-list-task" /> Business Marketing
                      </Link>
                    </div>
                    <div className="blog-d-thumb">
                      <img src={BlogTumb}  alt="Imgs" />
                    </div>
                  </div>
                  <div className="blog-body">
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
                      urna, quis ultricies turpis euismod et. Ut sapien quam,
                      iaculis eu purus at, egestas pharetra nisi. Cras
                      tristique, mauris convallis molestie lacinia, orci massa
                      lobortis felis, at auctor ipsum leo sit amet diam. Donec
                      vel euismod erat, at gravida Donec ligula augue, mattis eu
                      varius ac, tempus vel ex. Pellentesque habitant morbi
                      tristique senectus et netus et malesuada fames ac turpis
                      egestas.
                    </p>
                    <h3 className="blog-sub-title">
                      Vestibulum nec porta erat.
                    </h3>
                    <p>
                      Cras semper, massa vel aliquam luctus, eros odio tempor
                      turpis, ac placerat metus tortor eget magna. Donec mattis
                      posuere pharetra. Donec vestibulum ornare velit ut
                      sollicitudin. Pellentesque in faucibus purus.Nulla nisl
                      tellus, hendrerit nec dignissim pellentesque,
                    </p>
                    <div className="blog-quote-block">
                      <div className="qoute-icon-top">
                        <img src={quote2}  alt="Imgs" />
                      </div>
                      <div className="qoute-icon-bottom">
                        <img src={quote1}  alt="Imgs" />
                      </div>
                      <h6>
                        Cras semper, massa vel aliquam luctus, eros odio tempor
                        turpis, ac placerat metus tortor eget magna. Donec
                        mattis posuere pharetra. Donec vestibulum ornare velit
                        ut sollicitudin. faucibus.
                      </h6>
                    </div>
                    <p>
                      Cras semper, massa vel aliquam luctus, eros odio tempor
                      turpis, ac placerat metus tortor eget magna. Donec mattis
                      posuere pharetra. Donec vestibulum ornare velit ut
                      sollicitudin. Pellentesque in faucibus purus.Nulla nisl
                      tellus, hendrerit nec dignissim pellentesque, tempus vel
                      ex. Pellentesque habitant morbi tristique senectus et
                      netus et malesuada fames ac turpis egestas. Nam viverra
                      porttitor urna, quis ultricies turpis euismod et. Ut
                      sapien quam, iaculis eu purus at, egestas pharetra nisi.
                      Cras tristique, mauris convallis molestie lacinia, orci
                      massa lobortis felis, at auctor ipsum leo sit amet diam.
                      Donec vel euismod erat, at gravida turpis egestas. Nam
                      viverra porttitor urna, quis ultricies turpis euismod et.
                      Ut sapien quam, iaculis eu purus at,egestas pharetra nisi.
                      Cras tristique, mauris convallis molestie lacinia, orci
                      massa lobortis felis, at auctor ipsum{" "}
                    </p>
                    <div className="blog-grid-ex">
                      <h3 className="blog-sub-title">
                        Vestibulum nec porta erat.
                      </h3>
                      <div className="row pt-24">
                        <div className="col-lg-6">
                          <div className="blog-grid-img">
                            <img src={Subtitile}  alt="Imgs" className="img-fluid" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="blog-grid-info">
                            <p className="pt-lg-0">
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac placerat metus tortor eget
                              magna. Donec mattis posuere pharetra. Donec
                              vestibulum ornare velit ut sollicitudin.
                              Pellentesque in faucibus purus.Nulla nisl tellus,
                              hendrerit nec dignissim pellentesque, tempus vel
                              ex. Pellentesque habitant morbi tristique
                              on.egestas pharetra nisi. Cras tristique, mauris
                              convallis molestie lacinia, orci
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="blog-bottom d-flex align-items-center justify-content-between flex-wrap">
                      <h6>Share On :</h6>
                      <ul className="blog-action-list d-flex">
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
                  <div className="comment-section">
                    <div className="comment-section-header">
                      <div className=" comment-arrow prev-comment ">
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="bi bi-chevron-left" /> Previous
                        </Link>
                      </div>
                      <div className="comment-counter">
                        <h5>
                          Comment <span>(20)</span>{" "}
                        </h5>
                      </div>
                      <div className=" comment-arrow next-comment ">
                        <Link onClick={this.scrollTop} to={"#"}>
                          Next <i className="bi bi-chevron-right" />
                        </Link>
                      </div>
                    </div>
                    <ul className="comments-list">
                      <li className="single-comment">
                        <div className="commentor-img">
                          <img src={Commentor3}  alt="Imgs" />
                        </div>
                        <div className="comment-info">
                          <p>
                            Cras semper, massa vel aliquam luctus, eros odio
                            tempor turpis, ac bibend placerat metus tortor eget
                            magna. Donec mattis posuere pharetra. Donec an
                            vestibulum ornare velit ut sollicitudin.
                            Pellentesque in faucibus purus.
                          </p>
                          <div className="commentor-info">
                            <div className="commentor-bio">
                              <h6 className="commentor-name">Asher Carter</h6>
                              <div className="comment-timing">
                                <span className="comment-date">
                                  Decembar 10, 2021
                                </span>{" "}
                                <span className="comment-time">12.34 PM</span>
                              </div>
                            </div>
                            <div className="reply-btn">
                              <img
                                src={ReplyIcon}
                                 alt="Imgs"
                                className="reply-icon"
                              />
                              <Link onClick={this.scrollTop} to={"#"}>
                                Reply
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="single-comment">
                        <div className="commentor-img">
                          <img src={Commentor2}  alt="Imgs" />
                        </div>
                        <div className="comment-info">
                          <p>
                            Cras semper, massa vel aliquam luctus, eros odio
                            tempor turpis, ac bibend placerat metus tortor eget
                            magna. Donec mattis posuere pharetra. Donec an
                            vestibulum ornare velit ut sollicitudin.
                            Pellentesque in faucibus purus.
                          </p>
                          <div className="commentor-info">
                            <div className="commentor-bio">
                              <h6 className="commentor-name">
                                Paisley Natalie
                              </h6>
                              <div className="comment-timing">
                                <span className="comment-date">
                                  Decembar 10, 2021
                                </span>{" "}
                                <span className="comment-time">12.34 PM</span>
                              </div>
                            </div>
                            <div className="reply-btn">
                              <img
                                src={ReplyIcon}
                                 alt="Imgs"
                                className="reply-icon"
                              />
                              <Link onClick={this.scrollTop} to={"#"}>
                                Reply
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="single-comment">
                        <div className="commentor-img">
                          <img src={Commentor1}  alt="Imgs" />
                        </div>
                        <div className="comment-info">
                          <p>
                            Cras semper, massa vel aliquam luctus, eros odio
                            tempor turpis, ac bibend placerat metus tortor eget
                            magna. Donec mattis posuere pharetra. Donec an
                            vestibulum ornare velit ut sollicitudin.
                            Pellentesque in faucibus purus.
                          </p>
                          <div className="commentor-info">
                            <div className="commentor-bio">
                              <h6 className="commentor-name">Julian Grayson</h6>
                              <div className="comment-timing">
                                <span className="comment-date">
                                  Decembar 10, 2021
                                </span>{" "}
                                <span className="comment-time">12.34 PM</span>
                              </div>
                            </div>
                            <div className="reply-btn">
                              <img
                                src={ReplyIcon}
                                 alt="Imgs"
                                className="reply-icon"
                              />
                              <Link onClick={this.scrollTop} to={"#"}>
                                Reply
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="comment-form">
                    <h5 className="ed-subtitle">Leave Your Comment</h5>
                    <form action="#" id="comment-form">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="primary-input-group">
                            <input
                              type="text"
                              id="name"
                              placeholder="Your Full Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="primary-input-group">
                            <input
                              type="email"
                              id="email"
                              placeholder="Your Email"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="primary-input-group">
                            <input
                              type="text"
                              id="Subject"
                              placeholder="Subject"
                            />
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
                        <div className="col-lg-12">
                          <div className="submit-btn">
                            <button type="submit" className="primary-submit">
                              Submit Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
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
                          Business{" "}
                          <div className="category-lavel">
                            <span>20</span>{" "}
                            <i className="bi bi-box-arrow-right" />
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          Marketing{" "}
                          <div className="category-lavel">
                            <span>10</span>{" "}
                            <i className="bi bi-box-arrow-right" />
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          Web Development{" "}
                          <div className="category-lavel">
                            <span>50</span>{" "}
                            <i className="bi bi-box-arrow-right" />
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          Accounting{" "}
                          <div className="category-lavel">
                            <span>07</span>{" "}
                            <i className="bi bi-box-arrow-right" />
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          Software{" "}
                          <div className="category-lavel">
                            <span>18</span>{" "}
                            <i className="bi bi-box-arrow-right" />
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          Graphic Design{" "}
                          <div className="category-lavel">
                            <span>12</span>{" "}
                            <i className="bi bi-box-arrow-right" />
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          Web Design{" "}
                          <div className="category-lavel">
                            <span>00</span>{" "}
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
                        <img src={MiniGallary1}  alt="Imgs" />{" "}
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
                        <img src={MiniGallary2}  alt="Imgs" />{" "}
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
                        <img src={MiniGallary3}  alt="Imgs" />{" "}
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
                        <img src={MiniGallary4}  alt="Imgs" />{" "}
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
                        <img src={MiniGallary5}  alt="Imgs" />{" "}
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
                        <img src={MiniGallary6}  alt="Imgs" />{" "}
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
                    <Link onClick={this.scrollTop} to="event-details.html">
                      <img src={subbanner}  alt="Imgs" className="img-fluid" />
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

export default BlogDetails;
