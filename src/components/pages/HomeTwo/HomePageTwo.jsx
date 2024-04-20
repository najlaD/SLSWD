import React, { Component } from "react";
import AchivmentArea from "./AchivmentArea";
import BlogArea from "./BlogArea";
import EventArea from "./EventArea";
import HeroArea from "./HeroArea";
import NewsLetter from "./NewsLetter";
import PricingArea from "./PricingArea";
import RecentEventSchedule from "./RecentEventSchedule";
import SpeakerSliderArea from "./SpeakerSliderArea";
import SponsorSLiderArea from "./SponsorSLiderArea";
import Testimonial from "./Testimonial";

class HomePageTwo extends Component {
  render() {
    return (
      <>
        {/* All section componetn import start */}
        <HeroArea />
        <EventArea />
        <RecentEventSchedule />
        <AchivmentArea />
        <SpeakerSliderArea />
        <SponsorSLiderArea />
        <Testimonial />
        <PricingArea />
        <BlogArea />
        <NewsLetter />
        {/* All section componetn import end  */}
      </>
    );
  }
}

export default HomePageTwo;
