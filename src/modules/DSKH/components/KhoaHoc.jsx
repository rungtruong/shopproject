import React from "react";
import { Link } from "react-router-dom";

const KhoaHoc = props => {
  let {
    MaKhoaHoc,
    HinhAnh,
    TenKhoaHoc,
    MoTa,
    LuotXem,
    NguoiTao
  } = props.khoaHoc;
  return (
    <div className='border p-2 text-center mb-2'>
      <img src={HinhAnh} alt='kh-img' className='w-100' />
      <p className='lead font-weight-bold'>{TenKhoaHoc}</p>
      <p className='lead font-weight-bold'>Người tạo: {NguoiTao}</p>
      <Link to={"/chitiet/" + MaKhoaHoc} className='btn btn-success'>
        Chi tiết
      </Link>
    </div>
  );
};

export default KhoaHoc;
