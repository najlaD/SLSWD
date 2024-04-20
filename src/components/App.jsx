import React, { Component } from "react";
import LayoutFooter from "./common/LayoutFooter";
import LayoutHeader from "./common/LayoutHeader";

class Layout extends Component {
  render() {
    return (
      <>
      {/* all inner page componnets and innner heade footer */}
        <LayoutHeader />
        {this.props.children}
        <LayoutFooter />
      </>
    );
  }
}

export default Layout;
