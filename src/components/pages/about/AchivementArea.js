import React, { Component } from "react";
import CountUp from "react-countup";
// images import
import icon2IMG from '../../../assets/images/icons/calander.png';
import icon4IMG from '../../../assets/images/icons/people.png';
import icon3IMG from '../../../assets/images/icons/schedule.png';
import icon1IMG from '../../../assets/images/icons/speaker.png';

class AchivementArea extends Component {
  render() {
    return (
      <>
        {/* ===============  achievement area start  =============== */}
        <div className="achievement-area pt-120">
          <div className="achievement-overlay">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 com-sm-6">
                  <div className="single-achievement">
                    <div className="achievement-icon">
                      <img src={icon1IMG} alt="about icon " />
                    </div>
                    <h2>
                      <CountUp
                        start={0}
                        end={150}
                        duration={5.75}
                        className="number"></CountUp>
                      +
                    </h2>
                    <h5>Best Speaker</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 com-sm-6">
                  <div className="single-achievement">
                    <div className="achievement-icon">
                      <img src={icon2IMG} alt="about icon " />
                    </div>
                    <h2>
                      <CountUp
                        start={0}
                        end={300}
                        duration={6.75}
                        className="number"></CountUp>
                      +
                    </h2>
                    <h5>Ideal Event</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 com-sm-6">
                  <div className="single-achievement">
                    <div className="achievement-icon">
                      <img src={icon3IMG} alt="about icon " />
                    </div>
                    <h2>
                      <CountUp
                        start={0}
                        end={500}
                        duration={4.75}
                        className="number"></CountUp>
                      +
                    </h2>
                    <h5>New Schedule</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 com-sm-6">
                  <div className="single-achievement">
                    <div className="achievement-icon">
                      <img src={icon4IMG} alt="about icon " />
                    </div>
                    <h2>
                      <CountUp
                        start={0}
                        end={700}
                        duration={7.75}
                        className="number"></CountUp>
                      +
                    </h2>
                    <h5>Participants</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  achievement area end  =============== */}
      </>
    );
  }
}

export default AchivementArea;
