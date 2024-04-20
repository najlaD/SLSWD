import React, { Component } from "react";
import HomeOneFooter from "../common/HomeOneFooter";
import HomeOneHeader from "../common/HomeOneHeader";
import HomePage from "../pages/home/HomePage";

class MainLayout extends Component {
  render() {
    return (
      <>
      {/* main layout  */}
        <HomeOneHeader />
        <HomePage />
        <HomeOneFooter />
      </>
    );
  }
}

export default MainLayout;
