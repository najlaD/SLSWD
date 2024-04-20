import React, { Component } from "react";
import { Link } from "react-router-dom";

class FAQ extends Component {
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
                    <h1>FAQ</h1>
                  </div>
                  <h2 className="page-title">FAQ</h2>
                  <ul className="page-switcher">
                    <li>
                      <Link
                        onClick={this.scrollTop}
                        to={`${process.env.PUBLIC_URL}/`}>
                        Home <i className="bi bi-caret-right" />
                      </Link>
                    </li>
                    <li>FAQ</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  breadcrumb area end =============== */}
        {/* ===============  FAQ wrapper start =============== */}
        <div className="faq-wrapper ">
          <div className="container position-relative pt-110">
            <div className="row">
              <div className="col-lg-12">
                <div className="background-title text-style-one">
                  <h2>ASKED QUESTION</h2>
                </div>
                <div className="section-head">
                  <h3>frequently asked question</h3>
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
                        data-bs-target="#pills-event1"
                        type="button"
                        role="tab"
                        aria-controls="pills-event1"
                        aria-selected="true">
                        General <span>01</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-tab2"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-event2"
                        type="button"
                        role="tab"
                        aria-controls="pills-event2"
                        aria-selected="false">
                        Financial <span>02</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-tab3"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-event3"
                        type="button"
                        role="tab"
                        aria-controls="pills-event3"
                        aria-selected="false">
                        Corporate <span>03</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-event1"
                    role="tabpanel"
                    aria-labelledby="pills-tab1">
                    <div className="faq-wrap">
                      <h3 className="faq-type">General Question</h3>
                      <div className="accordion" id="FaqTab1">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="faqHeadingOne">
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqCollapseOne"
                              aria-expanded="true"
                              aria-controls="faqCollapseOne">
                              Proin gravida id magna et interdum Nunc sodales?
                            </button>
                          </h2>
                          <div
                            id="faqCollapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="faqHeadingOne"
                            data-bs-parent="#FaqTab1">
                            <div className="accordion-body">
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac placerat metus tortor eget
                              magna. Donec mattis posuere pharetra. Donec
                              vestibulum ornare velit ut sollicitudin.
                              Pellentesque in faucibus purus.Nulla nisl tellus,
                              hendrerit nec dignissim pellentesque, posuere in
                              est. Suspendisse bibendum vestibulum elit eu
                              placerat. In ut ipsum in odio euismod tincidunt
                              non lacinia nunc. Donec ligula augue, mattis eu
                              varius ac, tempus vel ex. Pellentesque habitant
                              morbi tristique senectus et netus et malesuada
                              fames ac turpis egestas. Nam viverra porttitor
                              urna, quis ultricies turpis euismod et. Ut sapien
                              quam, iaculis eu purus at, egestas pharetra nisi.
                              Cras tristique.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="faqHeadingTwo">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqCollapseTwo"
                              aria-expanded="false"
                              aria-controls="faqCollapseTwo">
                              Vivamus gravida sapien ut gravida volutpat Sed?
                            </button>
                          </h2>
                          <div
                            id="faqCollapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="faqHeadingTwo"
                            data-bs-parent="#FaqTab1">
                            <div className="accordion-body">
                              Discover, Explore &amp; Understanding The Product
                              Description Maecenas ullamcorper eros libero,
                              facilisis tempor mi dapibus vel. Sed ut felis
                              ligula. Pellentesque vestibulum, tellus id euismod
                              aliquet, justo velit tincidunt justo, nec pulvinar
                              tortor elit vitae urna.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="faqHeadingThree">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqCollapseThree"
                              aria-expanded="false"
                              aria-controls="faqCollapseThree">
                              tristique vel, fermentum vel ante. Morbi ex nunc?
                            </button>
                          </h2>
                          <div
                            id="faqCollapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="faqHeadingThree"
                            data-bs-parent="#FaqTab1">
                            <div className="accordion-body">
                              Discover, Explore &amp; Understanding The Product
                              Description Maecenas ullamcorper eros libero,
                              facilisis tempor mi dapibus vel. Sed ut felis
                              ligula. Pellentesque vestibulum, tellus id euismod
                              aliquet, justo velit tincidunt justo, nec pulvinar
                              tortor elit vitae urna.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="faqHeadingFour">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqCollapseFour"
                              aria-expanded="false"
                              aria-controls="faqCollapseFour">
                              pharetra quis, ullamcorper at nunc. Quisque andi?
                            </button>
                          </h2>
                          <div
                            id="faqCollapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="faqHeadingFour"
                            data-bs-parent="#FaqTab1">
                            <div className="accordion-body">
                              Discover, Explore &amp; Understanding The Product
                              Description Maecenas ullamcorper eros libero,
                              facilisis tempor mi dapibus vel. Sed ut felis
                              ligula. Pellentesque vestibulum, tellus id euismod
                              aliquet, justo velit tincidunt justo, nec pulvinar
                              tortor elit vitae urna.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="faqHeadingFive">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqCollapseFive"
                              aria-expanded="false"
                              aria-controls="faqCollapseFive">
                              quam sit amet pretium hendrerit, sapien purus ?
                            </button>
                          </h2>
                          <div
                            id="faqCollapseFive"
                            className="accordion-collapse collapse"
                            aria-labelledby="faqHeadingFive"
                            data-bs-parent="#FaqTab1">
                            <div className="accordion-body">
                              Discover, Explore &amp; Understanding The Product
                              Description Maecenas ullamcorper eros libero,
                              facilisis tempor mi dapibus vel. Sed ut felis
                              ligula. Pellentesque vestibulum, tellus id euismod
                              aliquet, justo velit tincidunt justo, nec pulvinar
                              tortor elit vitae urna.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-event3"
                    role="tabpanel"
                    aria-labelledby="pills-tab3">
                    <div className="faq-wrap">
                      <h3 className="faq-type">Financial Question</h3>
                      <div className="accordion" id="FaqTab3">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="faqHeadingOne1">
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqCollapseOne1"
                              aria-expanded="true"
                              aria-controls="faqCollapseOne1">
                              Proin gravida id magna et interdum Nunc sodales?
                            </button>
                          </h2>
                          <div
                            id="faqCollapseOne1"
                            className="accordion-collapse collapse show"
                            aria-labelledby="faqHeadingOne1"
                            data-bs-parent="#FaqTab3">
                            <div className="accordion-body">
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac placerat metus tortor eget
                              magna. Donec mattis posuere pharetra. Donec
                              vestibulum ornare velit ut sollicitudin.
                              Pellentesque in faucibus purus.Nulla nisl tellus,
                              hendrerit nec dignissim pellentesque, posuere in
                              est. Suspendisse bibendum vestibulum elit eu
                              placerat. In ut ipsum in odio euismod tincidunt
                              non lacinia nunc. Donec ligula augue, mattis eu
                              varius ac, tempus vel ex. Pellentesque habitant
                              morbi tristique senectus et netus et malesuada
                              fames ac turpis egestas. Nam viverra porttitor
                              urna, quis ultricies turpis euismod et. Ut sapien
                              quam, iaculis eu purus at, egestas pharetra nisi.
                              Cras tristique.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="faqHeadingTwo1">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqCollapseTwo1"
                              aria-expanded="false"
                              aria-controls="faqCollapseTwo1">
                              Vivamus gravida sapien ut gravida volutpat Sed?
                            </button>
                          </h2>
                          <div
                            id="faqCollapseTwo1"
                            className="accordion-collapse collapse"
                            aria-labelledby="faqHeadingTwo1"
                            data-bs-parent="#FaqTab3">
                            <div className="accordion-body">
                              Discover, Explore &amp; Understanding The Product
                              Description Maecenas ullamcorper eros libero,
                              facilisis tempor mi dapibus vel. Sed ut felis
                              ligula. Pellentesque vestibulum, tellus id euismod
                              aliquet, justo velit tincidunt justo, nec pulvinar
                              tortor elit vitae urna.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="faqHeadingThree1">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqCollapseThree1"
                              aria-expanded="false"
                              aria-controls="faqCollapseThree1">
                              tristique vel, fermentum vel ante. Morbi ex nunc?
                            </button>
                          </h2>
                          <div
                            id="faqCollapseThree1"
                            className="accordion-collapse collapse"
                            aria-labelledby="faqHeadingThree1"
                            data-bs-parent="#FaqTab3">
                            <div className="accordion-body">
                              Discover, Explore &amp; Understanding The Product
                              Description Maecenas ullamcorper eros libero,
                              facilisis tempor mi dapibus vel. Sed ut felis
                              ligula. Pellentesque vestibulum, tellus id euismod
                              aliquet, justo velit tincidunt justo, nec pulvinar
                              tortor elit vitae urna.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="faqHeadingFour1">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqCollapseFour1"
                              aria-expanded="false"
                              aria-controls="faqCollapseFour1">
                              pharetra quis, ullamcorper at nunc. Quisque andi?
                            </button>
                          </h2>
                          <div
                            id="faqCollapseFour1"
                            className="accordion-collapse collapse"
                            aria-labelledby="faqHeadingFour1"
                            data-bs-parent="#FaqTab3">
                            <div className="accordion-body">
                              Discover, Explore &amp; Understanding The Product
                              Description Maecenas ullamcorper eros libero,
                              facilisis tempor mi dapibus vel. Sed ut felis
                              ligula. Pellentesque vestibulum, tellus id euismod
                              aliquet, justo velit tincidunt justo, nec pulvinar
                              tortor elit vitae urna.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="faqHeadingFive1">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqCollapseFive1"
                              aria-expanded="false"
                              aria-controls="faqCollapseFive1">
                              quam sit amet pretium hendrerit, sapien purus ?
                            </button>
                          </h2>
                          <div
                            id="faqCollapseFive1"
                            className="accordion-collapse collapse"
                            aria-labelledby="faqHeadingFive1"
                            data-bs-parent="#FaqTab3">
                            <div className="accordion-body">
                              Discover, Explore &amp; Understanding The Product
                              Description Maecenas ullamcorper eros libero,
                              facilisis tempor mi dapibus vel. Sed ut felis
                              ligula. Pellentesque vestibulum, tellus id euismod
                              aliquet, justo velit tincidunt justo, nec pulvinar
                              tortor elit vitae urna.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-event2"
                    role="tabpanel"
                    aria-labelledby="pills-tab2">
                    <div className="faq-wrap">
                      <h3 className="faq-type">Corporate Question</h3>
                      <div className="accordion" id="FaqTab2">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="faqHeadingOne2">
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqCollapseOne2"
                              aria-expanded="true"
                              aria-controls="faqCollapseOne2">
                              Proin gravida id magna et interdum Nunc sodales?
                            </button>
                          </h2>
                          <div
                            id="faqCollapseOne2"
                            className="accordion-collapse collapse show"
                            aria-labelledby="faqHeadingOne2"
                            data-bs-parent="#FaqTab2">
                            <div className="accordion-body">
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac placerat metus tortor eget
                              magna. Donec mattis posuere pharetra. Donec
                              vestibulum ornare velit ut sollicitudin.
                              Pellentesque in faucibus purus.Nulla nisl tellus,
                              hendrerit nec dignissim pellentesque, posuere in
                              est. Suspendisse bibendum vestibulum elit eu
                              placerat. In ut ipsum in odio euismod tincidunt
                              non lacinia nunc. Donec ligula augue, mattis eu
                              varius ac, tempus vel ex. Pellentesque habitant
                              morbi tristique senectus et netus et malesuada
                              fames ac turpis egestas. Nam viverra porttitor
                              urna, quis ultricies turpis euismod et. Ut sapien
                              quam, iaculis eu purus at, egestas pharetra nisi.
                              Cras tristique.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="faqHeadingTwo2">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqCollapseTwo2"
                              aria-expanded="false"
                              aria-controls="faqCollapseTwo2">
                              Vivamus gravida sapien ut gravida volutpat Sed?
                            </button>
                          </h2>
                          <div
                            id="faqCollapseTwo2"
                            className="accordion-collapse collapse"
                            aria-labelledby="faqHeadingTwo2"
                            data-bs-parent="#FaqTab2">
                            <div className="accordion-body">
                              Discover, Explore &amp; Understanding The Product
                              Description Maecenas ullamcorper eros libero,
                              facilisis tempor mi dapibus vel. Sed ut felis
                              ligula. Pellentesque vestibulum, tellus id euismod
                              aliquet, justo velit tincidunt justo, nec pulvinar
                              tortor elit vitae urna.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="faqHeadingThree2">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqCollapseThree2"
                              aria-expanded="false"
                              aria-controls="faqCollapseThree2">
                              tristique vel, fermentum vel ante. Morbi ex nunc?
                            </button>
                          </h2>
                          <div
                            id="faqCollapseThree2"
                            className="accordion-collapse collapse"
                            aria-labelledby="faqHeadingThree2"
                            data-bs-parent="#FaqTab2">
                            <div className="accordion-body">
                              Discover, Explore &amp; Understanding The Product
                              Description Maecenas ullamcorper eros libero,
                              facilisis tempor mi dapibus vel. Sed ut felis
                              ligula. Pellentesque vestibulum, tellus id euismod
                              aliquet, justo velit tincidunt justo, nec pulvinar
                              tortor elit vitae urna.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="faqHeadingFour2">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqCollapseFour2"
                              aria-expanded="false"
                              aria-controls="faqCollapseFour2">
                              pharetra quis, ullamcorper at nunc. Quisque andi?
                            </button>
                          </h2>
                          <div
                            id="faqCollapseFour2"
                            className="accordion-collapse collapse"
                            aria-labelledby="faqHeadingFour2"
                            data-bs-parent="#FaqTab2">
                            <div className="accordion-body">
                              Discover, Explore &amp; Understanding The Product
                              Description Maecenas ullamcorper eros libero,
                              facilisis tempor mi dapibus vel. Sed ut felis
                              ligula. Pellentesque vestibulum, tellus id euismod
                              aliquet, justo velit tincidunt justo, nec pulvinar
                              tortor elit vitae urna.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="faqHeadingFive2">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqCollapseFive2"
                              aria-expanded="false"
                              aria-controls="faqCollapseFive2">
                              quam sit amet pretium hendrerit, sapien purus ?
                            </button>
                          </h2>
                          <div
                            id="faqCollapseFive2"
                            className="accordion-collapse collapse"
                            aria-labelledby="faqHeadingFive2"
                            data-bs-parent="#FaqTab2">
                            <div className="accordion-body">
                              Discover, Explore &amp; Understanding The Product
                              Description Maecenas ullamcorper eros libero,
                              facilisis tempor mi dapibus vel. Sed ut felis
                              ligula. Pellentesque vestibulum, tellus id euismod
                              aliquet, justo velit tincidunt justo, nec pulvinar
                              tortor elit vitae urna.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="faq-question-form pt-110">
                  <div className="section-head">
                    <h2>Ask Any Question</h2>
                    <form action="#">
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
                        <div className="col-lg-6">
                          <div className="primary-input-group">
                            <input type="text" id="phone" placeholder="Phone" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="primary-input-group">
                            <input
                              type="text"
                              id="subject"
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
                        <div className="submit-btn">
                          <button type="submit" className="primary-submit">
                            Ask Question
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  FAQ wrapper end =============== */}
      </>
    );
  }
}

export default FAQ;
