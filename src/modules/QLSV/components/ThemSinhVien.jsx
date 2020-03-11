import React, { Component } from "react";
import { connect } from "react-redux";
import { actAddSinhVien } from "../../../redux/actions/sinhvien";

export class ThemSinhVien extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MaSV: "",
      HoTen: "",
      Tuoi: 0,
      Email: ""
    };
  }
  handleOnchange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };
  handleOnsubmit = evt => {
    evt.preventDefault();
    console.log(this.state);
    this.props.onAddSinhVien(this.state);
  };
  render() {
    return (
      <div
        className='modal fade'
        id='themSinhVien'
        tabIndex={-1}
        role='dialog'
        aria-labelledby='modelTitleId'
        aria-hidden='true'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Thêm Sinh Viên</h5>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'>
                <span aria-hidden='true'>×</span>
              </button>
            </div>
            <div className='modal-body'>
              <form onSubmit={this.handleOnsubmit}>
                <div className='form-group'>
                  <label>Mã SV: </label>
                  <input
                    type='text'
                    className='form-control'
                    aria-describedby='helpId'
                    name='MaSV'
                    onChange={this.handleOnchange}
                  />
                </div>
                <div className='form-group'>
                  <label>Họ Tên: </label>
                  <input
                    type='text'
                    className='form-control'
                    aria-describedby='helpId'
                    name='HoTen'
                    onChange={this.handleOnchange}
                  />
                </div>
                <div className='form-group'>
                  <label>Tuổi: </label>
                  <input
                    type='text'
                    className='form-control'
                    aria-describedby='helpId'
                    name='tuoi'
                    onChange={this.handleOnchange}
                  />
                </div>
                <div className='form-group'>
                  <label>Email: </label>
                  <input
                    type='text'
                    className='form-control'
                    aria-describedby='helpId'
                    name='Email'
                    onChange={this.handleOnchange}
                  />
                </div>
                <div className='form-group'>
                  <button
                    type='submit'
                    className='btn btn-primary d-block ml-auto'>
                    Thêm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddSinhVien:sinhVien => {
      dispatch(actAddSinhVien(sinhVien));
    }
  };
};
export default connect(null, mapDispatchToProps)(ThemSinhVien);
