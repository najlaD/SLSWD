import React, { Component } from "react";
import { Link } from "react-router-dom";
import Icons1 from '../../../assets/images/icons/silverl-fa.png'
import Icons2 from '../../../assets/images/icons/gold-fa.png'
import Icons3 from '../../../assets/images/icons/diamond-fa.png'
class Pricing extends Component {
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
                    <h1>SPONSOR TICKET</h1>
                  </div>
                  <h2 className="page-title">Ticket Plan</h2>
                  <ul className="page-switcher">
                    <li>
                      <Link
                        onClick={this.scrollTop}
                        to={`${process.env.PUBLIC_URL}/`}>
                        Home <i className="bi bi-caret-right" />
                      </Link>
                    </li>
                    <li>Ticket Plan</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  breadcrumb area end =============== */}
        {/* ===============  Recent schedule start  =============== */}
        <div className="pricing-wrapper">
          <div className="container position-relative pt-110">
            <div className="row">
              <div className="col-lg-12">
                <div className="background-title text-style-one">
                  <h2>Corporate</h2>
                </div>
                <div className="section-head">
                  <h3>Get Sponsor Ticket</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="event-category-buttons d-flex justify-content-center">
                  <ul
                    className="nav nav-pills mb-3"
                    id="pills-tab"
                    role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-tab1"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-pricing1"
                        type="button"
                        role="tab"
                        aria-controls="pills-pricing1"
                        aria-selected="true">
                        Corporate <span>01</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-tab2"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-pricing2"
                        type="button"
                        role="tab"
                        aria-controls="pills-pricing2"
                        aria-selected="false">
                        Business <span>02</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-tab3"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-pricing3"
                        type="button"
                        role="tab"
                        aria-controls="pills-pricing3"
                        aria-selected="false">
                        Creative <span>03</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="all-pricing-tables">
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-pricing1"
                      role="tabpanel"
                      aria-labelledby="pills-tab1">
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          <div className="pricing-card">
                            <div className="pricing-card-top">
                              <h5 className="plan-status">Silver</h5>
                              <h3 className="plan-price">
                                {" "}
                                <span>$</span> 100
                              </h3>
                              <div className="plan-icon">
                                <img
                                  src={Icons1}
                                   alt="Imgs"
                                />
                              </div>
                            </div>
                            <div className="pricing-features">
                              <div className="ticket-availability">
                                <h5>Available Tickets</h5>
                                <h4>
                                  270 / <span>500</span>
                                </h4>
                              </div>
                              <div className="feature-list">
                                <ul>
                                  <li className="tick">
                                    <i className="bi bi-check2" /> Conference
                                    Ticket
                                  </li>
                                  <li>
                                    <i className="bi bi-x" /> Free Certificate
                                  </li>
                                  <li>
                                    <i className="bi bi-x" /> Free Lunch &amp;
                                    Coffe
                                  </li>
                                </ul>
                              </div>
                              <div className="purchase-btn">
                                <Link onClick={this.scrollTop} to={"#"}>
                                  Buy Ticket
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="pricing-card active">
                            <div className="pricing-card-top">
                              <div className="pricing-card-lavel">
                                <span>10%</span> Off
                              </div>
                              <h5 className="plan-status">Gold</h5>
                              <h3 className="plan-price">
                                {" "}
                                <span>$</span> 120
                              </h3>
                              <div className="plan-icon">
                                <img
                                  src={Icons2}
                                   alt="Imgs"
                                />
                              </div>
                            </div>
                            <div className="pricing-features">
                              <div className="ticket-availability">
                                <h5>Available Tickets</h5>
                                <h4>
                                  300 / <span>500</span>
                                </h4>
                              </div>
                              <div className="feature-list">
                                <ul>
                                  <li className="tick">
                                    <i className="bi bi-check2" /> Conference
                                    Ticket
                                  </li>
                                  <li className="tick">
                                    <i className="bi bi-check2" /> Free
                                    Certificate
                                  </li>
                                  <li>
                                    <i className="bi bi-x" /> Free Lunch &amp;
                                    Coffe
                                  </li>
                                </ul>
                              </div>
                              <div className="purchase-btn">
                                <Link onClick={this.scrollTop} to={"#"}>
                                  Buy Ticket
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="pricing-card">
                            <div className="pricing-card-top">
                              <h5 className="plan-status">Silver</h5>
                              <h3 className="plan-price">
                                {" "}
                                <span>$</span> 150
                              </h3>
                              <div className="plan-icon">
                                <img
                                  src={Icons3}
                                   alt="Imgs"
                                />
                              </div>
                            </div>
                            <div className="pricing-features">
                              <div className="ticket-availability">
                                <h5>Available Tickets</h5>
                                <h4>
                                  270 / <span>500</span>
                                </h4>
                              </div>
                              <div className="feature-list">
                                <ul>
                                  <li className="tick">
                                    <i className="bi bi-check2" /> Conference
                                    Ticket
                                  </li>
                                  <li className="tick">
                                    <i className="bi bi-check2" /> Free
                                    Certificate
                                  </li>
                                  <li className="tick">
                                    <i className="bi bi-check2" /> Free Lunch
                                    &amp; Coffe
                                  </li>
                                </ul>
                              </div>
                              <div className="purchase-btn">
                                <Link onClick={this.scrollTop} to={"#"}>
                                  Buy Ticket
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-pricing2"
                      role="tabpanel"
                      aria-labelledby="pills-tab2">
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          <div className="pricing-card">
                            <div className="pricing-card-top">
                              <h5 className="plan-status">Silver</h5>
                              <h3 className="plan-price">
                                {" "}
                                <span>$</span> 100
                              </h3>
                              <div className="plan-icon">
                                <img
                                  src={Icons1}
                                   alt="Imgs"
                                />
                              </div>
                            </div>
                            <div className="pricing-features">
                              <div className="ticket-availability">
                                <h5>Available Tickets</h5>
                                <h4>
                                  270 / <span>500</span>
                                </h4>
                              </div>
                              <div className="feature-list">
                                <ul>
                                  <li className="tick">
                                    <i className="bi bi-check2" /> Conference
                                    Ticket
                                  </li>
                                  <li>
                                    <i className="bi bi-x" /> Free Certificate
                                  </li>
                                  <li>
                                    <i className="bi bi-x" /> Free Lunch &amp;
                                    Coffe
                                  </li>
                                </ul>
                              </div>
                              <div className="purchase-btn">
                                <Link onClick={this.scrollTop} to={"#"}>
                                  Buy Ticket
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="pricing-card active">
                            <div className="pricing-card-top">
                              <div className="pricing-card-lavel">
                                <span>10%</span> Off
                              </div>
                              <h5 className="plan-status">Gold</h5>
                              <h3 className="plan-price">
                                {" "}
                                <span>$</span> 120
                              </h3>
                              <div className="plan-icon">
                                <img
                                  src={Icons2}
                                   alt="Imgs"
                                />
                              </div>
                            </div>
                            <div className="pricing-features">
                              <div className="ticket-availability">
                                <h5>Available Tickets</h5>
                                <h4>
                                  300 / <span>500</span>
                                </h4>
                              </div>
                              <div className="feature-list">
                                <ul>
                                  <li className="tick">
                                    <i className="bi bi-check2" /> Conference
                                    Ticket
                                  </li>
                                  <li className="tick">
                                    <i className="bi bi-check2" /> Free
                                    Certificate
                                  </li>
                                  <li>
                                    <i className="bi bi-x" /> Free Lunch &amp;
                                    Coffe
                                  </li>
                                </ul>
                              </div>
                              <div className="purchase-btn">
                                <Link onClick={this.scrollTop} to={"#"}>
                                  Buy Ticket
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="pricing-card">
                            <div className="pricing-card-top">
                              <h5 className="plan-status">Silver</h5>
                              <h3 className="plan-price">
                                {" "}
                                <span>$</span> 150
                              </h3>
                              <div className="plan-icon">
                                <img
                                  src={Icons3}
                                   alt="Imgs"
                                />
                              </div>
                            </div>
                            <div className="pricing-features">
                              <div className="ticket-availability">
                                <h5>Available Tickets</h5>
                                <h4>
                                  270 / <span>500</span>
                                </h4>
                              </div>
                              <div className="feature-list">
                                <ul>
                                  <li className="tick">
                                    <i className="bi bi-check2" /> Conference
                                    Ticket
                                  </li>
                                  <li className="tick">
                                    <i className="bi bi-check2" /> Free
                                    Certificate
                                  </li>
                                  <li className="tick">
                                    <i className="bi bi-check2" /> Free Lunch
                                    &amp; Coffe
                                  </li>
                                </ul>
                              </div>
                              <div className="purchase-btn">
                                <Link onClick={this.scrollTop} to={"#"}>
                                  Buy Ticket
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-pricing3"
                      role="tabpanel"
                      aria-labelledby="pills-tab3">
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          <div className="pricing-card">
                            <div className="pricing-card-top">
                              <h5 className="plan-status">Silver</h5>
                              <h3 className="plan-price">
                                {" "}
                                <span>$</span> 100
                              </h3>
                              <div className="plan-icon">
                                <img
                                  src={Icons1}
                                   alt="Imgs"
                                />
                              </div>
                            </div>
                            <div className="pricing-features">
                              <div className="ticket-availability">
                                <h5>Available Tickets</h5>
                                <h4>
                                  270 / <span>500</span>
                                </h4>
                              </div>
                              <div className="feature-list">
                                <ul>
                                  <li className="tick">
                                    <i className="bi bi-check2" /> Conference
                                    Ticket
                                  </li>
                                  <li>
                                    <i className="bi bi-x" /> Free Certificate
                                  </li>
                                  <li>
                                    <i className="bi bi-x" /> Free Lunch &amp;
                                    Coffe
                                  </li>
                                </ul>
                              </div>
                              <div className="purchase-btn">
                                <Link onClick={this.scrollTop} to={"#"}>
                                  Buy Ticket
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="pricing-card active">
                            <div className="pricing-card-top">
                              <div className="pricing-card-lavel">
                                <span>10%</span> Off
                              </div>
                              <h5 className="plan-status">Gold</h5>
                              <h3 className="plan-price">
                                {" "}
                                <span>$</span> 120
                              </h3>
                              <div className="plan-icon">
                                <img
                                  src={Icons2}
                                   alt="Imgs"
                                />
                              </div>
                            </div>
                            <div className="pricing-features">
                              <div className="ticket-availability">
                                <h5>Available Tickets</h5>
                                <h4>
                                  300 / <span>500</span>
                                </h4>
                              </div>
                              <div className="feature-list">
                                <ul>
                                  <li className="tick">
                                    <i className="bi bi-check2" /> Conference
                                    Ticket
                                  </li>
                                  <li className="tick">
                                    <i className="bi bi-check2" /> Free
                                    Certificate
                                  </li>
                                  <li>
                                    <i className="bi bi-x" /> Free Lunch &amp;
                                    Coffe
                                  </li>
                                </ul>
                              </div>
                              <div className="purchase-btn">
                                <Link onClick={this.scrollTop} to={"#"}>
                                  Buy Ticket
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="pricing-card">
                            <div className="pricing-card-top">
                              <h5 className="plan-status">Silver</h5>
                              <h3 className="plan-price">
                                {" "}
                                <span>$</span> 150
                              </h3>
                              <div className="plan-icon">
                                <img
                                  src={Icons3}
                                   alt="Imgs"
                                />
                              </div>
                            </div>
                            <div className="pricing-features">
                              <div className="ticket-availability">
                                <h5>Available Tickets</h5>
                                <h4>
                                  270 / <span>500</span>
                                </h4>
                              </div>
                              <div className="feature-list">
                                <ul>
                                  <li className="tick">
                                    <i className="bi bi-check2" /> Conference
                                    Ticket
                                  </li>
                                  <li className="tick">
                                    <i className="bi bi-check2" /> Free
                                    Certificate
                                  </li>
                                  <li className="tick">
                                    <i className="bi bi-check2" /> Free Lunch
                                    &amp; Coffe
                                  </li>
                                </ul>
                              </div>
                              <div className="purchase-btn">
                                <Link onClick={this.scrollTop} to={"#"}>
                                  Buy Ticket
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
        </div>
        {/* ===============  Recent schedule end  =============== */}
      </>
    );
  }
}

export default Pricing;
