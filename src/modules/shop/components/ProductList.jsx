import React, { Component } from "react";
import Product from "./Product";
export default class ProductList extends Component {
  renderProductList = () => {
    return this.props.listProduct.map((product, index) => {
      return <Product addContentModal={this.props.addContentModal} product={product} key={index}></Product>;
    });
  };
  render() {
    return (
      <div className={this.props.bgTitle === "white" ? "bg-white" : "bg-dark"}>
        {/* <!-- BEGIN SMARTPHONE --> */}
        <section id='smartphone' className='container-fluid pt-5 pb-5'>
          <h1
            className={
              this.props.bgTitle === "white"
                ? "text-center text-dark"
                : "text-center text-white"
            }>
            {this.props.title}
          </h1>
          <div className='row'>{this.renderProductList()}</div>
        </section>

        {/* <!-- END SMARTPHONE --> */}
      </div>
    );
  }
}
