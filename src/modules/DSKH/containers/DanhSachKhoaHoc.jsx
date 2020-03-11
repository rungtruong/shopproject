import React, { Component } from "react";
import KhoaHoc from "../components/KhoaHoc";
import { actSaveAll } from "../../../redux/actions/khoahoc";
import { connect } from "react-redux";
import Axios from "axios";

export class DanhSachKhoaHoc extends Component {
  componentDidMount() {
    this.props.onSaveDSKH();
  }
  renderKH = () => {
    return this.props.DSKH.map((khoaHoc, index) => {
      return (
        <div className='col-3' key={index}>
          <KhoaHoc khoaHoc={khoaHoc} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='w-100 text-center mb-4'>
            <h1 className='display-4'>Danh Sách Khóa Học</h1>
          </div>
          {this.renderKH()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    DSKH: state.DSKH
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSaveDSKH: () => {
      dispatch(actSaveAll());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachKhoaHoc);
