import React, { Component } from "react";
import { Link } from "react-router-dom";
// image import
import BGTextIMG from "../../../assets/images/background-texts/ticket-watermark.png";
import IconIMG1 from "../../../assets/images/icons/diamond-fa2.png";
import IconIMG2 from "../../../assets/images/icons/sliver-fa2.png";
class PricingArea extends Component {
  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    return (
      <>
        {/* ===============  pricing area two start =============== */}
        <div className="pricing-style-two pt-110 position-relative">
          <div className="watermark-bg mt-110">
            <img src={BGTextIMG} alt="PrcingIMG" className="img-fluid" />
          </div>
          <div className="container">
            <div className="row">
              <div className="section-head-style-two">
                <h5>Ticket Plan</h5>
                <h3>
                  Get sponsor <span>Ticket</span>
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="pricing-card-style-two">
                  <div className="pricing-card-top">
                    <div className="pricing-card-lavel">
                      <span>10%</span> Off
                    </div>
                    <h5 className="plan-status">Silver</h5>
                    <h3 className="plan-price">
                       
                      <span>$</span> 100
                    </h3>
                    <div className="plan-icon">
                      <img src={IconIMG2} alt="PrcingIMG" />
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
                          <i className="bi bi-check2" /> Conference Ticket
                        </li>
                        <li>
                          <i className="bi bi-x" /> Free Certificate
                        </li>
                        <li>
                          <i className="bi bi-x" /> Free Lunch &amp; Coffe
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
                <div className="pricing-card-style-two active">
                  <div className="pricing-card-top">
                    <div className="pricing-card-lavel">
                      <span>10%</span> Off
                    </div>
                    <h5 className="plan-status">Gold</h5>
                    <h3 className="plan-price">
                       
                      <span>$</span> 120
                    </h3>
                    <div className="plan-icon">
                      <img src={IconIMG2} alt="PrcingIMG" />
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
                          <i className="bi bi-check2" /> Conference Ticket
                        </li>
                        <li>
                          <i className="bi bi-x" /> Free Certificate
                        </li>
                        <li>
                          <i className="bi bi-x" /> Free Lunch &amp; Coffe
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
                <div className="pricing-card-style-two">
                  <div className="pricing-card-top">
                    <div className="pricing-card-lavel">
                      <span>10%</span> Off
                    </div>
                    <h5 className="plan-status">Diamond</h5>
                    <h3 className="plan-price">
                       
                      <span>$</span> 150
                    </h3>
                    <div className="plan-icon">
                      <img src={IconIMG1} alt="PrcingIMG" />
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
                          <i className="bi bi-check2" /> Conference Ticket
                        </li>
                        <li>
                          <i className="bi bi-x" /> Free Certificate
                        </li>
                        <li>
                          <i className="bi bi-x" /> Free Lunch &amp; Coffe
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
        {/* ===============  pricing area two end =============== */}
      </>
    );
  }
}

export default PricingArea;
