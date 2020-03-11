import React, { Component } from "react";

export default class ChiTetKhoaHoc extends Component {
  componentDidMount() {
    let maKhoaHoc = this.props.match.params.makh;
    console.log(maKhoaHoc);
  }
  render() {
    return (
      <div>
        <h1 className='display-4 m-4'>Trang chi tiết</h1>
      </div>
    );
  }
}
