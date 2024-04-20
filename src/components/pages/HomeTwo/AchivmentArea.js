import React, { Component } from "react";
import CountUp from "react-countup";
class AchivmentArea extends Component {
  render() {
    return (
      <>
        {/* ===============  achievement area start =============== */}
        <div className="achievement-style-two mt-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="achievement-box-two">
                  <h2>
                    <CountUp
                      start={0}
                      end={100}
                      className="number"
                      duration={1.75}
                    ></CountUp>
                    +
                  </h2>
                  <h5>Best Speaker</h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="achievement-box-two">
                  <h2>
                    <CountUp
                      start={0}
                      end={500}
                      className="number"
                      duration={2.0}
                    ></CountUp>
                    +
                  </h2>
                  <h5>Ideal Event</h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="achievement-box-two">
                  <h2>
                    <CountUp
                      start={0}
                      end={100}
                      className="number"
                      duration={1.75}
                    ></CountUp>
                    +
                  </h2>
                  <h5>New Schedule</h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="achievement-box-two">
                  <h2>
                    <CountUp
                      start={0}
                      end={900}
                      className="number"
                      duration={2.75}
                    ></CountUp>
                    +
                  </h2>
                  <h5>Participants</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  achievement area end =============== */}
      </>
    );
  }
}

export default AchivmentArea;
