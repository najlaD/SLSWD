import React, { Component } from "react";
import AboutWrapper from "./AboutWrapper";
import AchivementArea from "./AchivementArea";
import BlogArea from "./BlogArea";
import Breadcrumb from "./Breadcrumb";
import BreandLogo from "./BreandLogo";
import Speaker from "./Speaker";
import Testimonial from "./Testimonial";

class About extends Component {
  render() {
    return (
      <>
        {/* all about section componet */}
        <Breadcrumb />
        <AboutWrapper />
        <AchivementArea />
        {/* <Speaker /> */}
        <BreandLogo />
        <Testimonial />
        {/* <BlogArea /> */}
      </>
    );
  }
}

export default About;
