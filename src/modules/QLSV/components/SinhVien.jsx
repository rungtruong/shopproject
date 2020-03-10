import React, { Component } from "react";
import { connect } from "react-redux";
import { actDeleteSinhVien } from "../../../redux/actions/sinhvien";

const handleDeleteBtn = (maSV, onDeleteSinhVien) => {
  console.log(maSV);
  onDeleteSinhVien(maSV);
};
const SinhVien = props => {
    let {MaSV, HoTen,Tuoi,Email}=props.sv;
  return (
    <tr>
      <td>{MaSV}</td>
      <td>{HoTen}</td>
      <td>{Tuoi}</td>
      <td>{Email}</td>
      <td>
        <button type='button' className='btn btn-primary mr-1'>
          Edit
        </button>
        <button
          type='button'
          className='btn btn-warning'
          onClick={() =>
            handleDeleteBtn(
              MaSV,
              props.onDeleteSinhVien
            )
          }>
          Delete
        </button>
      </td>
    </tr>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    onDeleteSinhVien: maSV => {
      dispatch(actDeleteSinhVien(maSV));
    }
  };
};

export default connect(null, mapDispatchToProps)(SinhVien);
