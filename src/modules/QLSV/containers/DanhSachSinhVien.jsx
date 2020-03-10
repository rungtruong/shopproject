import React, { Component } from "react";
import SinhVien from "../components/SinhVien";
import ThemSinhVien from "../components/ThemSinhVien";
import { connect } from "react-redux";

class DanhSachSinhVien extends Component {
  renderSinhVien = () => {
    return this.props.DSSV.map((sinhVien, i) => {
      return <SinhVien sv={sinhVien} key={i} />;
    });
  };
  render() {
    return (
      <div className='content'>
        <h1 className='text-center'>Quản Lý Sinh Viên</h1>
        <div className='container-fluid'>
          <button
            type='button'
            className='btn btn-primary d-block ml-auto mb-2'
            data-toggle='modal'
            data-target='#themSinhVien'>
            Thêm SV
          </button>
          <div className='table-responsive'>
            <table className='table taba'>
              <thead>
                <tr>
                  <th>MSSV</th>
                  <th>Họ Tên</th>
                  <th>Tuổi</th>
                  <th>Email</th>
                  <th>Hành Động</th>
                </tr>
              </thead>
              <tbody>{this.renderSinhVien()}</tbody>
            </table>
          </div>
        </div>
        <ThemSinhVien />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { DSSV: state.DSSV };
};
export default connect(mapStateToProps, null)(DanhSachSinhVien);
