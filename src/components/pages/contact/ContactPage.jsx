import React, { Component } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

// image import
import iconsIMG2 from "../../../assets/images/icons/c-massege.png";
import iconsIMG from "../../../assets/images/icons/c-phone.png";
import cornarShape1 from "../../../assets/images/shapes/cornoer-shape1.png";
import cornarShape2 from "../../../assets/images/shapes/cornoer-shape2.png";
class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { name, email, phone, subject, message } = this.state;
    const templateParams = {
      from_name: name,
      from_email: email,
      phone: phone,
      subject: subject,
      message: message,
    };

    emailjs
      .send(
        "service_15ez3si",
        "template_qbu24x9",
        templateParams,
        "YkWtim9Qd-XuGZdLz"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          // Clear form inputs after successful submission
          this.setState({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("FAILED...", error);
        }
      );
  }
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };
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
                    <h1>Contact Us</h1>
                  </div>
                  <h2 className="page-title">Contact Us</h2>
                  <ul className="page-switcher">
                    <li>
                      <Link
                        onClick={this.scrollTop}
                        to={`${process.env.PUBLIC_URL}/`}
                      >
                        Home <i className="bi bi-caret-right" />
                      </Link>
                    </li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  breadcrumb area end =============== */}
        {/* ===============  Contact wrapper start =============== */}
        <div className="contact-wrapper overflow-hidden">
          <div className="container pt-120 position-relative">
            <div className="background-title text-style-one">
              <h2>Contact Now</h2>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-card mt-0">
                  <div className="contact-box-corner1">
                    <img src={cornarShape1} alt="Imgs" />
                  </div>
                  <div className="contact-box-corner2">
                    <img src={cornarShape2} alt="Imgs" />
                  </div>
                  <div className="contact-icon">
                    <img src={iconsIMG} alt="Imgs" />
                  </div>
                  <div className="contact-info">
                    <h3 className="contact-title">Location</h3>
                    <Link onClick={this.scrollTop} to={"#"}>
                      Digital Agency Network 20 Eastbourne Terrace, London
                    </Link>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="contact-box-corner1">
                    <img src={cornarShape1} alt="Imgs" />
                  </div>
                  <div className="contact-box-corner2">
                    <img src={cornarShape2} alt="Imgs" />
                  </div>
                  <div className="contact-icon">
                    <img src={iconsIMG} alt="Imgs" />
                  </div>
                  <div className="contact-info">
                    <h3 className="contact-title">Phone</h3>
                    <Link onClick={this.scrollTop} to={"#"}>
                      +012 3456 789102
                    </Link>
                    <Link onClick={this.scrollTop} to={"#"}>
                      +012 3456 789102
                    </Link>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="contact-box-corner1">
                    <img src={cornarShape1} alt="Imgs" />
                  </div>
                  <div className="contact-box-corner2">
                    <img src={cornarShape2} alt="Imgs" />
                  </div>
                  <div className="contact-icon">
                    <img src={iconsIMG2} alt="Imgs" />
                  </div>
                  <div className="contact-info">
                    <h3 className="contact-title">Email</h3>
                    <Link onClick={this.scrollTop} to={"#"}>
                      info@example.com{" "}
                    </Link>
                    <Link onClick={this.scrollTop} to={"#"}>
                      support@example.com{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <form onSubmit={this.handleSubmit} id="contact-form">
                  <div className="contact-form-wrapper">
                    <h4 className="contact-form-title">Write a Message</h4>
                    <div className="primary-input-group">
                      <input
                        type="text"
                        id="name"
                        placeholder="Your Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="primary-input-group">
                      <input
                        type="email"
                        id="email"
                        placeholder="Your Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="primary-input-group">
                      <input
                        type="tel"
                        id="phone"
                        placeholder="Your Phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="primary-input-group">
                      <input
                        type="text"
                        id="subject"
                        placeholder="Subject"
                        value={this.state.subject}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="primary-input-group">
                      <textarea
                        name="message"
                        id="message"
                        cols={30}
                        rows={7}
                        placeholder="Write Message"
                        value={this.state.message}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="submit-btn">
                      <button type="submit" className="primary-submit">
                        Submit Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  Contact wrapper end =============== */}
      </>
    );
  }
}

export default ContactPage;
