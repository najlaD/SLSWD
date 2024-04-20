import React, { Component } from "react";
import { Link } from "react-router-dom";
// image import
import BGIconIMG from "../../../assets/images/background-texts/schedule-watermark.png";
import LunchIcon from "../../../assets/images/icons/dine.png";
import Speaker1 from "../../../assets/images/speaker/sp-1.png";
import Speaker2 from "../../../assets/images/speaker/sp-2.png";
import Speaker3 from "../../../assets/images/speaker/sp-3.png";
import Speaker4 from "../../../assets/images/speaker/sp-4.png";
class RecentEventSchedule extends Component {
  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    return (
      <>
        {/* ===============  Recent schedule start  =============== */}
        <div className="recent-schedule-style-one pt-110 position-relative">
          <div className="watermark-bg mt-110">
            <img src={BGIconIMG} alt="speakerIMG" className="img-fluid" />
          </div>
          <div className="container">
            <div className="row">
              <div className="section-head-style-two">
                <h5>Schedule</h5>
                <h3>
                  Recent Event <span>Schedule</span>
                </h3>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-3 col-lg-6">
                <div className="schedule-tab-buttons">
                  <div
                    className="nav flex-column nav-pills "
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <button
                      className="nav-link active"
                      id="schedule-tab1"
                      data-bs-toggle="pill"
                      data-bs-target="#schedule-pill1"
                      type="button"
                      role="tab"
                      aria-controls="schedule-pill1"
                      aria-selected="true"
                    >
                      30 Sep 2021
                    </button>
                    <button
                      className="nav-link"
                      id="schedule-tab2"
                      data-bs-toggle="pill"
                      data-bs-target="#schedule-pill2"
                      type="button"
                      role="tab"
                      aria-controls="schedule-pill2"
                      aria-selected="false"
                    >
                      29 Sep 2021
                    </button>
                    <button
                      className="nav-link"
                      id="schedule-tab3"
                      data-bs-toggle="pill"
                      data-bs-target="#schedule-pill3"
                      type="button"
                      role="tab"
                      aria-controls="schedule-pill3"
                      aria-selected="false"
                    >
                      28 Sep 2021
                    </button>
                    <button
                      className="nav-link"
                      id="schedule-tab4"
                      data-bs-toggle="pill"
                      data-bs-target="#schedule-pill4"
                      type="button"
                      role="tab"
                      aria-controls="schedule-pill4"
                      aria-selected="false"
                    >
                      27 Sep 2021
                    </button>
                    <button
                      className="nav-link"
                      id="schedule-tab5"
                      data-bs-toggle="pill"
                      data-bs-target="#schedule-pill5"
                      type="button"
                      role="tab"
                      aria-controls="schedule-pill5"
                      aria-selected="false"
                    >
                      26 Sep 2021
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="schedule-pill1"
                    role="tabpanel"
                    aria-labelledby="schedule-tab1"
                  >
                    <div className="schedule-wrapper-two">
                      <div className="single-schedule-card-style-two row">
                        <div className="col-xl-4 col-lg-5 p-0">
                          <div className="single-schedule-left">
                            <div className="schedule-top">
                              <h4>10.00 AM - 11.30 PM</h4>
                              <h5>
                                Room No - <span>01</span>
                              </h5>
                            </div>
                            <div className="schedule-bottom">
                              <div className="speaker-image">
                                <img src={Speaker2} alt="speakerIMG" />
                              </div>
                              <div className="speaker-info">
                                <h4>John Loganin</h4>
                                <p>Marketing</p>
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
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 p-0">
                          <div className="single-schedule-right">
                            <h3 className="schedule-title">
                              <Link onClick={this.scrollTop} to={"#"}>
                                Nulla nisl tellus hendrerit nec dignissim
                                pellentesqu posu in est Suspendisse bibendum.
                              </Link>
                            </h3>
                            <p className="schedule-discription">
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac placerat metus tortor eget
                              magna. Donec mattis posuere pharetra.
                            </p>
                            <div className="schedule-topics">
                              <h5>Topic</h5>
                              <div className="row">
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Color
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Typhography
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Allingment
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Development
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Graphic
                                      Design
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Web Design
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="schedule-buttons">
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Available Seat: 390-500
                              </Link>
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Book Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-schedule-card-style-two row">
                        <div className="col-xl-4 col-lg-5 p-0">
                          <div className="single-schedule-left">
                            <div className="schedule-top">
                              <h4>12.00 AM - 1.30 PM</h4>
                              <h5>
                                Room No - <span>02</span>
                              </h5>
                            </div>
                            <div className="schedule-bottom">
                              <div className="speaker-image">
                                <img src={Speaker1} alt="speakerIMG" />
                              </div>
                              <div className="speaker-info">
                                <h4>Loganin Zohan</h4>
                                <p>Marketing</p>
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
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 p-0">
                          <div className="single-schedule-right">
                            <h3 className="schedule-title">
                              <Link onClick={this.scrollTop} to={"#"}>
                                Nulla nisl tellus hendrerit nec dignissim
                                pellentesqu posu in est Suspendisse bibendum.
                              </Link>
                            </h3>
                            <p className="schedule-discription">
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac placerat metus tortor eget
                              magna. Donec mattis posuere pharetra.
                            </p>
                            <div className="schedule-topics">
                              <h5>Topic</h5>
                              <div className="row">
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Color
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Typhography
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Allingment
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Development
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Graphic
                                      Design
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Web Design
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="schedule-buttons">
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Available Seat: 390-500
                              </Link>
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Book Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-schedule-card-style-two row">
                        <div className="col-xl-4 col-lg-5 p-0">
                          <div className="single-schedule-left lunch-time">
                            <div className="schedule-top">
                              <h4>01.00 AM - 01.30 PM</h4>
                              <h5>
                                Room No - <span>05</span>
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 p-0">
                          <div className="single-schedule-right has-break">
                            <h3 className="break-type">Lunch Time</h3>
                            <div className="lunch-icon">
                              <img src={LunchIcon} alt="speakerIMG" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-schedule-card-style-two row">
                        <div className="col-xl-4 col-lg-5 p-0">
                          <div className="single-schedule-left">
                            <div className="schedule-top">
                              <h4>02.00 AM - 03.30 PM</h4>
                              <h5>
                                Room No - <span>06</span>
                              </h5>
                            </div>
                            <div className="schedule-bottom">
                              <div className="speaker-image">
                                <img src={Speaker3} alt="speakerIMG" />
                              </div>
                              <div className="speaker-info">
                                <h4>Imruz Lalin</h4>
                                <p>Marketing</p>
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
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 p-0">
                          <div className="single-schedule-right">
                            <h3 className="schedule-title">
                              <Link onClick={this.scrollTop} to={"#"}>
                                Nulla nisl tellus hendrerit nec dignissim
                                pellentesqu posu in est Suspendisse bibendum.
                              </Link>
                            </h3>
                            <p className="schedule-discription">
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac placerat metus tortor eget
                              magna. Donec mattis posuere pharetra.
                            </p>
                            <div className="schedule-topics">
                              <h5>Topic</h5>
                              <div className="row">
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Color
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Typhography
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Allingment
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Development
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Graphic
                                      Design
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Web Design
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="schedule-buttons">
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Available Seat: 390-500
                              </Link>
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Book Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-schedule-card-style-two row">
                        <div className="col-xl-4 col-lg-5 p-0">
                          <div className="single-schedule-left">
                            <div className="schedule-top">
                              <h4>10.00 AM - 11.30 PM</h4>
                              <h5>
                                Room No - <span>04</span>
                              </h5>
                            </div>
                            <div className="schedule-bottom">
                              <div className="speaker-image">
                                <img src={Speaker4} alt="speakerIMG" />
                              </div>
                              <div className="speaker-info">
                                <h4>Tomas Jons</h4>
                                <p>Marketing</p>
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
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 p-0">
                          <div className="single-schedule-right">
                            <h3 className="schedule-title">
                              <Link onClick={this.scrollTop} to={"#"}>
                                Nulla nisl tellus hendrerit nec dignissim
                                pellentesqu posu in est Suspendisse bibendum.
                              </Link>
                            </h3>
                            <p className="schedule-discription">
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac placerat metus tortor eget
                              magna. Donec mattis posuere pharetra.
                            </p>
                            <div className="schedule-topics">
                              <h5>Topic</h5>
                              <div className="row">
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Color
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Typhography
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Allingment
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Development
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Graphic
                                      Design
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Web Design
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="schedule-buttons">
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Available Seat: 390-500
                              </Link>
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Book Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="schedule-pill2"
                    role="tabpanel"
                    aria-labelledby="schedule-tab2"
                  >
                    <div className="schedule-wrapper-two">
                      <div className="single-schedule-card-style-two row">
                        <div className="col-xl-4 col-lg-5 p-0">
                          <div className="single-schedule-left">
                            <div className="schedule-top">
                              <h4>10.00 AM - 11.30 PM</h4>
                              <h5>
                                Room No - <span>01</span>
                              </h5>
                            </div>
                            <div className="schedule-bottom">
                              <div className="speaker-image">
                                <img src={Speaker2} alt="speakerIMG" />
                              </div>
                              <div className="speaker-info">
                                <h4>John Loganin</h4>
                                <p>Marketing</p>
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
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 p-0">
                          <div className="single-schedule-right">
                            <h3 className="schedule-title">
                              <Link onClick={this.scrollTop} to={"#"}>
                                Nulla nisl tellus hendrerit nec dignissim
                                pellentesqu posu in est Suspendisse bibendum.
                              </Link>
                            </h3>
                            <p className="schedule-discription">
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac placerat metus tortor eget
                              magna. Donec mattis posuere pharetra.
                            </p>
                            <div className="schedule-topics">
                              <h5>Topic</h5>
                              <div className="row">
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Color
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Typhography
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Allingment
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Development
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Graphic
                                      Design
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Web Design
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="schedule-buttons">
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Available Seat: 390-500
                              </Link>
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Book Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-schedule-card-style-two row">
                        <div className="col-xl-4 col-lg-5 p-0">
                          <div className="single-schedule-left">
                            <div className="schedule-top">
                              <h4>12.00 AM - 1.30 PM</h4>
                              <h5>
                                Room No - <span>02</span>
                              </h5>
                            </div>
                            <div className="schedule-bottom">
                              <div className="speaker-image">
                                <img src={Speaker1} alt="speakerIMG" />
                              </div>
                              <div className="speaker-info">
                                <h4>John mark</h4>
                                <p>Marketing</p>
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
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 p-0">
                          <div className="single-schedule-right">
                            <h3 className="schedule-title">
                              <Link onClick={this.scrollTop} to={"#"}>
                                Suspendisse potenti. Nullam nec ullamcorper
                                lacus Fusce sodales suscipit neque.
                              </Link>
                            </h3>
                            <p className="schedule-discription">
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac placerat metus tortor eget
                              magna. Donec mattis posuere pharetra.
                            </p>
                            <div className="schedule-topics">
                              <h5>Topic</h5>
                              <div className="row">
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Color
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Typhography
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Allingment
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Development
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Graphic
                                      Design
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Web Design
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="schedule-buttons">
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Available Seat: 390-500
                              </Link>
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Book Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-schedule-card-style-two row">
                        <div className="col-xl-4 col-lg-5 p-0">
                          <div className="single-schedule-left lunch-time">
                            <div className="schedule-top">
                              <h4>01.00 AM - 01.30 PM</h4>
                              <h5>
                                Room No - <span>05</span>
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 p-0">
                          <div className="single-schedule-right has-break">
                            <h3 className="break-type">Lunch Time</h3>
                            <div className="lunch-icon">
                              <img src={LunchIcon} alt="speakerIMG" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-schedule-card-style-two row">
                        <div className="col-xl-4 col-lg-5 p-0">
                          <div className="single-schedule-left">
                            <div className="schedule-top">
                              <h4>02.00 AM - 03.30 PM</h4>
                              <h5>
                                Room No - <span>06</span>
                              </h5>
                            </div>
                            <div className="schedule-bottom">
                              <div className="speaker-image">
                                <img src={Speaker3} alt="speakerIMG" />
                              </div>
                              <div className="speaker-info">
                                <h4>Markos Roho</h4>
                                <p>Marketing</p>
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
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 p-0">
                          <div className="single-schedule-right">
                            <h3 className="schedule-title">
                              <Link onClick={this.scrollTop} to={"#"}>
                                Integer lobortis consectetur purus, eget nibh
                                tempor ante finibus id. Ut ut hendrerit.
                              </Link>
                            </h3>
                            <p className="schedule-discription">
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac placerat metus tortor eget
                              magna. Donec mattis posuere pharetra.
                            </p>
                            <div className="schedule-topics">
                              <h5>Topic</h5>
                              <div className="row">
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Color
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Typhography
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Allingment
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Development
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Graphic
                                      Design
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Web Design
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="schedule-buttons">
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Available Seat: 390-500
                              </Link>
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Book Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-schedule-card-style-two row">
                        <div className="col-xl-4 col-lg-5 p-0">
                          <div className="single-schedule-left">
                            <div className="schedule-top">
                              <h4>10.00 AM - 11.30 PM</h4>
                              <h5>
                                Room No - <span>04</span>
                              </h5>
                            </div>
                            <div className="schedule-bottom">
                              <div className="speaker-image">
                                <img src={Speaker4} alt="speakerIMG" />
                              </div>
                              <div className="speaker-info">
                                <h4>John Loganin</h4>
                                <p>Marketing</p>
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
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 p-0">
                          <div className="single-schedule-right">
                            <h3 className="schedule-title">
                              <Link onClick={this.scrollTop} to={"#"}>
                                Proin feugiat maximus ante in gravida potenti.
                                Suspendisse Donec eu sapien dui.
                              </Link>
                            </h3>
                            <p className="schedule-discription">
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac placerat metus tortor eget
                              magna. Donec mattis posuere pharetra.
                            </p>
                            <div className="schedule-topics">
                              <h5>Topic</h5>
                              <div className="row">
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Color
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Typhography
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Allingment
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Development
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Graphic
                                      Design
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Web Design
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="schedule-buttons">
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Available Seat: 390-500
                              </Link>
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Book Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="schedule-pill3"
                    role="tabpanel"
                    aria-labelledby="schedule-tab3"
                  >
                    <div className="schedule-wrapper-two">
                      <div className="single-schedule-card-style-two row">
                        <div className="col-xl-4 col-lg-5 p-0">
                          <div className="single-schedule-left">
                            <div className="schedule-top">
                              <h4>10.00 AM - 11.30 PM</h4>
                              <h5>
                                Room No - <span>01</span>
                              </h5>
                            </div>
                            <div className="schedule-bottom">
                              <div className="speaker-image">
                                <img src={Speaker2} alt="speakerIMG" />
                              </div>
                              <div className="speaker-info">
                                <h4>John Loganin</h4>
                                <p>Marketing</p>
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
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 p-0">
                          <div className="single-schedule-right">
                            <h3 className="schedule-title">
                              <Link onClick={this.scrollTop} to={"#"}>
                                Nulla nisl tellus hendrerit nec dignissim
                                pellentesqu posu in est Suspendisse bibendum.
                              </Link>
                            </h3>
                            <p className="schedule-discription">
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac placerat metus tortor eget
                              magna. Donec mattis posuere pharetra.
                            </p>
                            <div className="schedule-topics">
                              <h5>Topic</h5>
                              <div className="row">
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Color
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Typhography
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Allingment
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Development
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Graphic
                                      Design
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Web Design
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="schedule-buttons">
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Available Seat: 390-500
                              </Link>
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Book Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-schedule-card-style-two row">
                        <div className="col-xl-4 col-lg-5 p-0">
                          <div className="single-schedule-left">
                            <div className="schedule-top">
                              <h4>12.00 AM - 1.30 PM</h4>
                              <h5>
                                Room No - <span>02</span>
                              </h5>
                            </div>
                            <div className="schedule-bottom">
                              <div className="speaker-image">
                                <img src={Speaker1} alt="speakerIMG" />
                              </div>
                              <div className="speaker-info">
                                <h4>John Loganin</h4>
                                <p>Marketing</p>
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
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 p-0">
                          <div className="single-schedule-right">
                            <h3 className="schedule-title">
                              <Link onClick={this.scrollTop} to={"#"}>
                                Nulla nisl tellus hendrerit nec dignissim
                                pellentesqu posu in est Suspendisse bibendum.
                              </Link>
                            </h3>
                            <p className="schedule-discription">
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac placerat metus tortor eget
                              magna. Donec mattis posuere pharetra.
                            </p>
                            <div className="schedule-topics">
                              <h5>Topic</h5>
                              <div className="row">
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Color
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Typhography
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Allingment
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Development
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Graphic
                                      Design
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Web Design
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="schedule-buttons">
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Available Seat: 390-500
                              </Link>
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Book Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-schedule-card-style-two row">
                        <div className="col-xl-4 col-lg-5 p-0">
                          <div className="single-schedule-left lunch-time">
                            <div className="schedule-top">
                              <h4>01.00 AM - 01.30 PM</h4>
                              <h5>
                                Room No - <span>05</span>
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 p-0">
                          <div className="single-schedule-right has-break">
                            <h3 className="break-type">Lunch Time</h3>
                            <div className="lunch-icon">
                              <img src={LunchIcon} alt="speakerIMG" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-schedule-card-style-two row">
                        <div className="col-xl-4 col-lg-5 p-0">
                          <div className="single-schedule-left">
                            <div className="schedule-top">
                              <h4>02.00 AM - 03.30 PM</h4>
                              <h5>
                                Room No - <span>06</span>
                              </h5>
                            </div>
                            <div className="schedule-bottom">
                              <div className="speaker-image">
                                <img src={Speaker3} alt="speakerIMG" />
                              </div>
                              <div className="speaker-info">
                                <h4>John Loganin</h4>
                                <p>Marketing</p>
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
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 p-0">
                          <div className="single-schedule-right">
                            <h3 className="schedule-title">
                              <Link onClick={this.scrollTop} to={"#"}>
                                Nulla nisl tellus hendrerit nec dignissim
                                pellentesqu posu in est Suspendisse bibendum.
                              </Link>
                            </h3>
                            <p className="schedule-discription">
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac placerat metus tortor eget
                              magna. Donec mattis posuere pharetra.
                            </p>
                            <div className="schedule-topics">
                              <h5>Topic</h5>
                              <div className="row">
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Color
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Typhography
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Allingment
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Development
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Graphic
                                      Design
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Web Design
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="schedule-buttons">
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Available Seat: 390-500
                              </Link>
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Book Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-schedule-card-style-two row">
                        <div className="col-xl-4 col-lg-5 p-0">
                          <div className="single-schedule-left">
                            <div className="schedule-top">
                              <h4>10.00 AM - 11.30 PM</h4>
                              <h5>
                                Room No - <span>04</span>
                              </h5>
                            </div>
                            <div className="schedule-bottom">
                              <div className="speaker-image">
                                <img src={Speaker4} alt="speakerIMG" />
                              </div>
                              <div className="speaker-info">
                                <h4>John Loganin</h4>
                                <p>Marketing</p>
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
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 p-0">
                          <div className="single-schedule-right">
                            <h3 className="schedule-title">
                              <Link onClick={this.scrollTop} to={"#"}>
                                Nulla nisl tellus hendrerit nec dignissim
                                pellentesqu posu in est Suspendisse bibendum.
                              </Link>
                            </h3>
                            <p className="schedule-discription">
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac placerat metus tortor eget
                              magna. Donec mattis posuere pharetra.
                            </p>
                            <div className="schedule-topics">
                              <h5>Topic</h5>
                              <div className="row">
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Color
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Typhography
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Allingment
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Development
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Graphic
                                      Design
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Web Design
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="schedule-buttons">
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Available Seat: 390-500
                              </Link>
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Book Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="schedule-pill4"
                    role="tabpanel"
                    aria-labelledby="schedule-tab4"
                  >
                    <div className="schedule-wrapper-two">
                      <div className="single-schedule-card-style-two row">
                        <div className="col-xl-4 col-lg-5 p-0">
                          <div className="single-schedule-left">
                            <div className="schedule-top">
                              <h4>10.00 AM - 11.30 PM</h4>
                              <h5>
                                Room No - <span>01</span>
                              </h5>
                            </div>
                            <div className="schedule-bottom">
                              <div className="speaker-image">
                                <img src={Speaker2} alt="speakerIMG" />
                              </div>
                              <div className="speaker-info">
                                <h4>John Loganin</h4>
                                <p>Marketing</p>
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
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 p-0">
                          <div className="single-schedule-right">
                            <h3 className="schedule-title">
                              <Link onClick={this.scrollTop} to={"#"}>
                                Nulla nisl tellus hendrerit nec dignissim
                                pellentesqu posu in est Suspendisse bibendum.
                              </Link>
                            </h3>
                            <p className="schedule-discription">
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac placerat metus tortor eget
                              magna. Donec mattis posuere pharetra.
                            </p>
                            <div className="schedule-topics">
                              <h5>Topic</h5>
                              <div className="row">
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Color
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Typhography
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Allingment
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Development
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Graphic
                                      Design
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Web Design
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="schedule-buttons">
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Available Seat: 390-500
                              </Link>
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Book Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-schedule-card-style-two row">
                        <div className="col-xl-4 col-lg-5 p-0">
                          <div className="single-schedule-left">
                            <div className="schedule-top">
                              <h4>12.00 AM - 1.30 PM</h4>
                              <h5>
                                Room No - <span>02</span>
                              </h5>
                            </div>
                            <div className="schedule-bottom">
                              <div className="speaker-image">
                                <img src={Speaker1} alt="speakerIMG" />
                              </div>
                              <div className="speaker-info">
                                <h4>John Loganin</h4>
                                <p>Marketing</p>
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
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 p-0">
                          <div className="single-schedule-right">
                            <h3 className="schedule-title">
                              <Link onClick={this.scrollTop} to={"#"}>
                                Nulla nisl tellus hendrerit nec dignissim
                                pellentesqu posu in est Suspendisse bibendum.
                              </Link>
                            </h3>
                            <p className="schedule-discription">
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac placerat metus tortor eget
                              magna. Donec mattis posuere pharetra.
                            </p>
                            <div className="schedule-topics">
                              <h5>Topic</h5>
                              <div className="row">
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Color
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Typhography
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Allingment
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Development
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Graphic
                                      Design
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Web Design
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="schedule-buttons">
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Available Seat: 390-500
                              </Link>
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Book Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-schedule-card-style-two row">
                        <div className="col-xl-4 col-lg-5 p-0">
                          <div className="single-schedule-left lunch-time">
                            <div className="schedule-top">
                              <h4>01.00 AM - 01.30 PM</h4>
                              <h5>
                                Room No - <span>05</span>
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 p-0">
                          <div className="single-schedule-right has-break">
                            <h3 className="break-type">Lunch Time</h3>
                            <div className="lunch-icon">
                              <img src={LunchIcon} alt="speakerIMG" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-schedule-card-style-two row">
                        <div className="col-xl-4 col-lg-5 p-0">
                          <div className="single-schedule-left">
                            <div className="schedule-top">
                              <h4>02.00 AM - 03.30 PM</h4>
                              <h5>
                                Room No - <span>06</span>
                              </h5>
                            </div>
                            <div className="schedule-bottom">
                              <div className="speaker-image">
                                <img src={Speaker3} alt="speakerIMG" />
                              </div>
                              <div className="speaker-info">
                                <h4>John Loganin</h4>
                                <p>Marketing</p>
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
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 p-0">
                          <div className="single-schedule-right">
                            <h3 className="schedule-title">
                              <Link onClick={this.scrollTop} to={"#"}>
                                Nulla nisl tellus hendrerit nec dignissim
                                pellentesqu posu in est Suspendisse bibendum.
                              </Link>
                            </h3>
                            <p className="schedule-discription">
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac placerat metus tortor eget
                              magna. Donec mattis posuere pharetra.
                            </p>
                            <div className="schedule-topics">
                              <h5>Topic</h5>
                              <div className="row">
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Color
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Typhography
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Allingment
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Development
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Graphic
                                      Design
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Web Design
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="schedule-buttons">
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Available Seat: 390-500
                              </Link>
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Book Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-schedule-card-style-two row">
                        <div className="col-xl-4 col-lg-5 p-0">
                          <div className="single-schedule-left">
                            <div className="schedule-top">
                              <h4>10.00 AM - 11.30 PM</h4>
                              <h5>
                                Room No - <span>04</span>
                              </h5>
                            </div>
                            <div className="schedule-bottom">
                              <div className="speaker-image">
                                <img src={Speaker4} alt="speakerIMG" />
                              </div>
                              <div className="speaker-info">
                                <h4>John Loganin</h4>
                                <p>Marketing</p>
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
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 p-0">
                          <div className="single-schedule-right">
                            <h3 className="schedule-title">
                              <Link onClick={this.scrollTop} to={"#"}>
                                Nulla nisl tellus hendrerit nec dignissim
                                pellentesqu posu in est Suspendisse bibendum.
                              </Link>
                            </h3>
                            <p className="schedule-discription">
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac placerat metus tortor eget
                              magna. Donec mattis posuere pharetra.
                            </p>
                            <div className="schedule-topics">
                              <h5>Topic</h5>
                              <div className="row">
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Color
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Typhography
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Allingment
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Development
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Graphic
                                      Design
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Web Design
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="schedule-buttons">
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Available Seat: 390-500
                              </Link>
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Book Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="schedule-pill5"
                    role="tabpanel"
                    aria-labelledby="schedule-tab5"
                  >
                    <div className="schedule-wrapper-two">
                      <div className="single-schedule-card-style-two row">
                        <div className="col-xl-4 col-lg-5 p-0">
                          <div className="single-schedule-left">
                            <div className="schedule-top">
                              <h4>10.00 AM - 11.30 PM</h4>
                              <h5>
                                Room No - <span>01</span>
                              </h5>
                            </div>
                            <div className="schedule-bottom">
                              <div className="speaker-image">
                                <img src={Speaker2} alt="speakerIMG" />
                              </div>
                              <div className="speaker-info">
                                <h4>John Loganin</h4>
                                <p>Marketing</p>
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
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 p-0">
                          <div className="single-schedule-right">
                            <h3 className="schedule-title">
                              <Link onClick={this.scrollTop} to={"#"}>
                                Nulla nisl tellus hendrerit nec dignissim
                                pellentesqu posu in est Suspendisse bibendum.
                              </Link>
                            </h3>
                            <p className="schedule-discription">
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac placerat metus tortor eget
                              magna. Donec mattis posuere pharetra.
                            </p>
                            <div className="schedule-topics">
                              <h5>Topic</h5>
                              <div className="row">
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Color
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Typhography
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Allingment
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Development
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Graphic
                                      Design
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Web Design
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="schedule-buttons">
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Available Seat: 390-500
                              </Link>
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Book Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-schedule-card-style-two row">
                        <div className="col-xl-4 col-lg-5 p-0">
                          <div className="single-schedule-left">
                            <div className="schedule-top">
                              <h4>12.00 AM - 1.30 PM</h4>
                              <h5>
                                Room No - <span>02</span>
                              </h5>
                            </div>
                            <div className="schedule-bottom">
                              <div className="speaker-image">
                                <img src={Speaker1} alt="speakerIMG" />
                              </div>
                              <div className="speaker-info">
                                <h4>John Loganin</h4>
                                <p>Marketing</p>
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
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 p-0">
                          <div className="single-schedule-right">
                            <h3 className="schedule-title">
                              <Link onClick={this.scrollTop} to={"#"}>
                                Nulla nisl tellus hendrerit nec dignissim
                                pellentesqu posu in est Suspendisse bibendum.
                              </Link>
                            </h3>
                            <p className="schedule-discription">
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac placerat metus tortor eget
                              magna. Donec mattis posuere pharetra.
                            </p>
                            <div className="schedule-topics">
                              <h5>Topic</h5>
                              <div className="row">
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Color
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Typhography
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Allingment
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Development
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Graphic
                                      Design
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Web Design
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="schedule-buttons">
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Available Seat: 390-500
                              </Link>
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Book Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-schedule-card  row">
                        <div className="col-xl-4 col-lg-5 p-0">
                          <div className="single-schedule-left lunch-time">
                            <div className="schedule-top">
                              <h4>01.00 AM - 01.30 PM</h4>
                              <h5>
                                Room No - <span>05</span>
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 p-0">
                          <div className="single-schedule-right has-break">
                            <h3 className="break-type">Lunch Time</h3>
                            <div className="lunch-icon">
                              <img src={LunchIcon} alt="speakerIMG" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-schedule-card-style-two row">
                        <div className="col-xl-4 col-lg-5 p-0">
                          <div className="single-schedule-left">
                            <div className="schedule-top">
                              <h4>02.00 AM - 03.30 PM</h4>
                              <h5>
                                Room No - <span>06</span>
                              </h5>
                            </div>
                            <div className="schedule-bottom">
                              <div className="speaker-image">
                                <img src={Speaker3} alt="speakerIMG" />
                              </div>
                              <div className="speaker-info">
                                <h4>John Loganin</h4>
                                <p>Marketing</p>
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
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 p-0">
                          <div className="single-schedule-right">
                            <h3 className="schedule-title">
                              <Link onClick={this.scrollTop} to={"#"}>
                                Nulla nisl tellus hendrerit nec dignissim
                                pellentesqu posu in est Suspendisse bibendum.
                              </Link>
                            </h3>
                            <p className="schedule-discription">
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac placerat metus tortor eget
                              magna. Donec mattis posuere pharetra.
                            </p>
                            <div className="schedule-topics">
                              <h5>Topic</h5>
                              <div className="row">
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Color
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Typhography
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Allingment
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Development
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Graphic
                                      Design
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Web Design
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="schedule-buttons">
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Available Seat: 390-500
                              </Link>
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Book Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-schedule-card-style-two row">
                        <div className="col-xl-4 col-lg-5 p-0">
                          <div className="single-schedule-left">
                            <div className="schedule-top">
                              <h4>10.00 AM - 11.30 PM</h4>
                              <h5>
                                Room No - <span>04</span>
                              </h5>
                            </div>
                            <div className="schedule-bottom">
                              <div className="speaker-image">
                                <img src={Speaker4} alt="speakerIMG" />
                              </div>
                              <div className="speaker-info">
                                <h4>John Loganin</h4>
                                <p>Marketing</p>
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
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 p-0">
                          <div className="single-schedule-right">
                            <h3 className="schedule-title">
                              <Link onClick={this.scrollTop} to={"#"}>
                                Nulla nisl tellus hendrerit nec dignissim
                                pellentesqu posu in est Suspendisse bibendum.
                              </Link>
                            </h3>
                            <p className="schedule-discription">
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac placerat metus tortor eget
                              magna. Donec mattis posuere pharetra.
                            </p>
                            <div className="schedule-topics">
                              <h5>Topic</h5>
                              <div className="row">
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Color
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Typhography
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Allingment
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Development
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Graphic
                                      Design
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Web Design
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="schedule-buttons">
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Available Seat: 390-500
                              </Link>
                              <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}
                              >
                                Book Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  Recent schedule end  =============== */}
      </>
    );
  }
}

export default RecentEventSchedule;
