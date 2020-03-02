import React, { Component } from "react";
import Headers from "../components/header";
import Footer from "../components/footer";
import Promotion from "../components/promotion";

export default class shop extends Component {
  name = "Forest";
  render() {
    return (
      <div>
        <Headers></Headers>

        <Promotion></Promotion>
        <Footer name={this.name}></Footer>
      </div>
    );
  }
}
