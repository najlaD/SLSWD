import React, { Component } from "react";
import HomeTwoFooter from "../common/HomeTwoFooter";
import HomeTwoHeader from "../common/HomeTwoHeader";
import HomePageTwo from "../pages/HomeTwo/HomePageTwo";

class MainTwoLayout extends Component {
  render() {
    return (
      <>
      {/* secound layout */}
        <HomeTwoHeader />
        <HomePageTwo />
        <HomeTwoFooter />
      </>
    );
  }
}

export default MainTwoLayout;
