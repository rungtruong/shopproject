import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Shop from './modules/shop/containers/Shop';
import Header from './shared/components/Header';
import Sidebar from './shared/components/Sidebar';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import DashBoard from './modules/dashboard/containers/DashBoard';
import MENU from './shared/components/menuList';
import DanhSachSinhVien from './modules/QLSV/containers/DanhSachSinhVien';
import DanhSachKhoaHoc from './modules/DSKH/containers/DanhSachKhoaHoc';
import ChiTetKhoaHoc from './modules/DSKH/components/ChiTetKhoaHoc';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <div className="wrapper">
            <Header />
            <Sidebar menu={MENU} />
            <div className="content-wrapper">
              <Switch>
                <Route path="/shop" component={Shop} />
                <Route path="/dashboard" component={DashBoard} />
                <Route path="/qlsv" component={DanhSachSinhVien} />
                <Route path="/dskh" component={DanhSachKhoaHoc} />
                <Route path="/chitiet/:makh" component={ChiTetKhoaHoc} />

                {/* <Route path="/" component={DanhSachKhoaHoc} /> */}

                <Redirect to="/dashboard"/>
              </Switch>
            </div>
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
