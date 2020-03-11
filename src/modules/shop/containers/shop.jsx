import React, { Component } from "react";
import Headers from "../components/Header";
import Footer from "../components/Footer";
import Promotion from "../components/Promotion";
import Carousel from "../components/Carousel";
import ProductList from "../components/ProductList";
import mobileList from "../data/mobileList";
import lapTopList from "../data/lapTopList";

export default class shop extends Component {
  name = "Forest";
  state = {
    product: {}
  };
  addContentModal = product => {
    console.log(product);
    this.setState({
      product: product
    });
  };
  render() {
    return (
      <div>
        <Headers></Headers>
        <Carousel></Carousel>
        <ProductList
          title='BEST SMARTPHONE'
          bgTitle=''
          listProduct={mobileList}
          addContentModal={this.addContentModal}/>
        <ProductList
          title='BEST LAPTOP'
          bgTitle='white'
          listProduct={lapTopList}
          addContentModal={this.addContentModal}/>
        <Promotion></Promotion>
        <Footer name={this.name}></Footer>

        {/* Modal */}
        <div
          className='modal fade'
          id='detailProduct'
          tabIndex={-1}
          role='dialog'
          aria-labelledby='modelTitleId'
          aria-hidden='true'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title'>Modal title</h5>
                <button
                  type='button'
                  className='close'
                  data-dismiss='modal'
                  aria-label='Close'>
                  <span aria-hidden='true'>×</span>
                </button>
              </div>
              <div className='modal-body'>
                <div className='card'>
                  <img className='card-img-top' src={this.state.product.img} />
                  <div className='card-body'>
                    <h4 className='card-title'>{this.state.product.name}</h4>
                    <p className='card-text'>{this.state.product.desc}</p>
                  </div>
                </div>
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-dismiss='modal'>
                  Close
                </button>
                <button type='button' className='btn btn-primary'>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
