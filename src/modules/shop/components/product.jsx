import React, { Component } from "react";
import swal from "sweetalert";

class Product extends Component {
  handleCart = () => {
    swal({
      title: "Are you sure?",
      text: "Your money will be disscount!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        swal("You lost your money!", {
          icon: "success"
        });
      } else {
        swal("Your money is safe!");
      }
    });
  };
  render() {
    let { product, addContentModal } = this.props;
    return (
      <div>
        <div className='col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3'>
          <div className='container'>
            <div className='card bg-light' style={{ width: 300 }}>
              <img
                className='card-img-top'
                src={product.img}
                alt='Cardimage'
                style={{ maxWidth: "100%", height: 250 }}
              />
              <div className='card-body text-center'>
                <h4 className='card-title text-center'>{product.name}</h4>
                <p className='card-text text-center'>{product.price}</p>
                <p className='card-text'>{product.desc}</p>
                <button
                  className='btn btn-primary mr-1'
                  data-toggle='modal'
                  data-target='#detailProduct'
                  onClick={() => addContentModal(product)}>
                  Detail
                </button>
                <button className='btn btn-danger' onClick={this.handleCart}>
                  Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
