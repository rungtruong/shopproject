import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Shop from './modules/shop/containers/Shop';
import Header from './shared/components/Header';
import Sidebar from './shared/components/Sidebar';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DashBoard from './modules/dashboard/containers/DashBoard';
import MENU from './shared/components/menuList';

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
                <Route path="/" component={DashBoard} />
              </Switch>
            </div>
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
