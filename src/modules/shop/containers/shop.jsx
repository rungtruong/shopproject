import React, { Component } from "react";
import Headers from "../components/header";
import Footer from "../components/footer";
import Promotion from "../components/promotion";
import Carousel from "../components/carousel";
import ProductList from "../components/ProductList";

export default class shop extends Component {
  name = "Forest";
  render() {
    return (
      <div>
        <Headers></Headers>
        <Carousel />
        <ProductList></ProductList>
        <Promotion></Promotion>
        <Footer name={this.name}></Footer>
      </div>
    );
  }
}
