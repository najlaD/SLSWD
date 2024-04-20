import React, { Component } from "react";
import { Link } from "react-router-dom";

class Breadcrumb extends Component {
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
                    <h1>À propos de nous</h1>
                  </div>
                  <h2 className="page-title">À propos de nous</h2>
                  <ul className="page-switcher">
                    <li>
                      <Link
                        onClick={this.scrollTop}
                        to={`${process.env.PUBLIC_URL}/event-details`}
                      >
                        Home <i className="bi bi-caret-right" />
                      </Link>
                    </li>
                    <li>À propos de nous</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  breadcrumb area end =============== */}
      </>
    );
  }
}

export default Breadcrumb;
