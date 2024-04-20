import React, { Component } from "react";
import CountUp from "react-countup";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
// page animation
import WOW from "wowjs";
import "../../../assets/css/animate.css";
import AboutVideo from "../../../assets/images/about/a-mini-video.png";
// mini gallary
import MiniGallary1 from "../../../assets/images/about/a-mini1.png";
import MiniGallary2 from "../../../assets/images/about/a-mini2.png";
// icon image
import Icon2 from "../../../assets/images/icons/event-sm.png";
import QuoteIcon from "../../../assets/images/icons/qoute-icon.png";
import Icon3 from "../../../assets/images/icons/sed-sm.png";
import Icon1 from "../../../assets/images/icons/speaker-sm.png";
// feature icon image import
import FeatureIcon3 from "../../../assets/images/icons/gaust-md.png";
import FeatureIcon2 from "../../../assets/images/icons/sound-md.png";
import FeatureIcon1 from "../../../assets/images/icons/speaker-md.png";
import VideoShapeIcon from "../../../assets/images/shapes/play-btn.png";

class AboutWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  componentDidMount() {
    // animation script
    new WOW.WOW().init();
  }
  render() {
    // modal video change state
    const { isOpen } = this.state;
    return (
      <>
        {/* =============== About wrapper start =============== */}
        <div className="about-wrapper mt-96">
          <div className="container">
            <div className="about-company">
              <div className="row">
                <div className="col-lg-6">
                  <div className="company-info">
                    <h5>A propos Sound Light Systems</h5>
                    <h2>
                      Que vous soyez un DJ professionnel, un organisateur
                      d'événements ou un passionné de sonorisation,
                    </h2>
                    <p>
                      Bienvenue chez SLS , votre destination de confiance pour
                      l'achat d'équipements de sonorisation et d'éclairage de
                      qualité supérieure. Depuis notre création, nous nous
                      engageons à fournir à nos clients les meilleurs produits
                      et services pour répondre à leurs besoins audiovisuels.
                    </p>
                    <div className="row">
                      <div className="col-sm-4 col-6">
                        <div className="about-infobox">
                          <div className="info-icon">
                            <img src={Icon1} alt="Imgs" />
                          </div>
                          <div className="info-content">
                            <h3>
                              <CountUp
                                start={0}
                                end={100}
                                duration={4.75}
                              ></CountUp>
                              +
                            </h3>
                            <h6>Speaker</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4 col-6">
                        <div className="about-infobox">
                          <div className="info-icon">
                            <img src={Icon2} alt="Imgs" />
                          </div>
                          <div className="info-content">
                            <h3>
                              <CountUp
                                start={0}
                                end={400}
                                duration={3.75}
                              ></CountUp>
                              +
                            </h3>
                            <h6>Event</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4 col-6">
                        <div className="about-infobox">
                          <div className="info-icon">
                            <img src={Icon3} alt="Imgs" />
                          </div>
                          <div className="info-content">
                            <h3>
                              <CountUp
                                start={0}
                                end={100}
                                duration={4.75}
                              ></CountUp>
                              +
                            </h3>
                            <h6>Schedule</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="about-more-btn">
                      <Link
                        onClick={this.scrollTop}
                        to={"#"}
                        className="primary-btn-fill"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="company-mini-gallary">
                    <div className="Gallary-item1 Gallary-item">
                      <img
                        // src="https://findbanquet.s3.amazonaws.com/findbanquet/1621071255_b4p8kmrdgjen9c0hwz2v-669.jpg"
                        src="https://images.unsplash.com/photo-1510352961804-625d6d0becc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width="260"
                        height="146"
                        alt="Imgs"
                        className="img-fluid"
                      />
                    </div>
                    <div className="Gallary-item2 Gallary-item">
                      <img
                        src="https://images.unsplash.com/photo-1521472709501-280327085513?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width="260"
                        height="146"
                        alt="Imgs"
                        className="img-fluid"
                      />
                    </div>
                    <div className="Gallary-item3 Gallary-item Gallary-video">
                      <img
                        src={AboutVideo}
                        alt="abput vedio"
                        className="img-fluid"
                      />
                      <div className="video-icon">
                        <i
                          onClick={() => this.setState({ isOpen: true })}
                          class="
                      video-popup"
                        >
                          <img src={VideoShapeIcon} alt="Imgs" />
                        </i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="company-feature mt-96">
              <div className="row">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="company-feature-box">
                        <div className="feature-icon">
                          <img src={FeatureIcon1} alt="Imgs" />
                        </div>
                        <h5>Service Clientèle de Premier Ordre</h5>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="company-feature-box">
                        <div className="feature-icon">
                          <img src={FeatureIcon2} alt="Imgs" />
                        </div>
                        <h5>Large Sélection de Produits</h5>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="company-feature-box">
                        <div className="feature-icon">
                          <img src={FeatureIcon3} alt="Imgs" />
                        </div>
                        <h5>Qualité Exceptionnelle</h5>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="company-feature-box">
                        <div className="feature-icon">
                          <img src={FeatureIcon1} alt="Imgs" />
                        </div>
                        <h5>Prix Compétitifs</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-info">
                    <h5>Pourquoi Nous Choisir ?</h5>
                    {/* <h2>
                      Sed malesuada massa lacinia, dictum dui a, dignissim sem.
                    </h2> */}
                    <p>
                      Chez SLS, nous comprenons l'importance
                      cruciale d'avoir les bons équipements de sonorisation et
                      d'éclairage pour réussir votre événement ou projet. Notre
                      engagement envers la qualité, la variété des produits, le
                      service clientèle exceptionnel et des prix compétitifs
                      font de nous le choix évident pour tous vos besoins
                      audiovisuels. Nous ne faisons aucun compromis sur la
                      qualité de nos produits, nous offrons une vaste sélection
                      pour répondre à toutes les exigences, notre équipe dévouée
                      est toujours là pour vous guider et nous nous efforçons de
                      rendre nos produits accessibles à tous les budgets. 
                      {/* Chez [Nom de l'Entreprise], votre satisfaction est notre
                      priorité absolue. Faites-nous confiance pour transformer
                      votre vision en réalité sonore et visuelle. */}
                    </p>
                    <div className="feature-list row ">
                      <div className="col-xl-4 col-sm-6">
                        <div className="single-feature">
                          <i className="bi bi-check" />{" "}
                          <span>Free Certificate</span>
                        </div>
                      </div>
                      <div className="col-xl-4 col-sm-6">
                        <div className="single-feature">
                          <i className="bi bi-check" />{" "}
                          <span>Conference Lunch</span>
                        </div>
                      </div>
                      <div className="col-xl-4 col-sm-6">
                        <div className="single-feature">
                          <i className="bi bi-check" />{" "}
                          <span>Conference Snaks</span>
                        </div>
                      </div>
                      <div className="col-xl-4 col-sm-6">
                        <div className="single-feature">
                          <i className="bi bi-check" />{" "}
                          <span>24/7 Support </span>
                        </div>
                      </div>
                      <div className="col-xl-4 col-sm-6">
                        <div className="single-feature">
                          <i className="bi bi-check" />{" "}
                          <span>All Type Event</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-history position-relative mt-120">
              <h3 className="float-title position-absolute">
                Sound Light Systems Story
              </h3>
              <div className="qoute-icon position-absolute">
                <img src={QuoteIcon} alt="Imgs" />
              </div>
              <p>
                Depuis nos débuts modestes, [Nom de l'Entreprise] a évolué pour
                devenir un leader reconnu dans le secteur de la vente
                d'équipements de sonorisation et d'éclairage. Fondée par [Nom du
                Fondateur] en [Année de Fondation], notre entreprise a su gagner
                la confiance de clients fidèles grâce à notre engagement
                indéfectible envers la qualité, le service clientèle et
                l'innovation.
              </p>
              <p>
                Au fil des ans, nous avons consolidé notre réputation en
                travaillant avec certains des plus grands noms de l'industrie et
                en fournissant des solutions audiovisuelles de pointe pour une
                multitude d'événements, des concerts en plein air aux mariages
                élégants.
              </p>
              <p>
                Aujourd'hui, notre passion pour l'excellence continue de nous
                guider dans tout ce que nous faisons. Nous sommes fiers de notre
                parcours et nous nous engageons à poursuivre notre mission
                d'offrir à nos clients des produits et services de la plus haute
                qualité.
              </p>
            </div>
          </div>
        </div>
        {/* =============== About wrapper end =============== */}
        <React.Fragment>
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="-tJYN-eG1zk"
            onClose={() => this.setState({ isOpen: false })}
          />
        </React.Fragment>
      </>
    );
  }
}

export default AboutWrapper;
