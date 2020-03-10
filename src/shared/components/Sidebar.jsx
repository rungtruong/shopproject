import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class Sidebar extends Component {
  renderMenu = () => {
    return this.props.menu.map((menu, i) => {
      if (menu.isGroup === false) {
        return (
          <li className='nav-item has-treeview' key={i}>
            <NavLink
              to={menu.url}
              activeClassName='active'
              className='nav-link text-left'>
              <i className={"nav-icon fas " + menu.icon} />
              <p>{menu.name}</p>
            </NavLink>
          </li>
        );
      } else
        return (
          <li className='nav-item has-treeview' key={i}>
            <NavLink
              to={menu.url}
              activeClassName='active'
              className='nav-link text-left'>
              <i className={"nav-icon fas " + menu.icon} />
              <p>
                {menu.name}
                <i className='right fas fa-angle-left' />
              </p>
            </NavLink>
            {menu.childs.map((submenu, j) => {
              return (
                <ul className='nav nav-treeview ' key={j}>
                  <li className='nav-item'>
                    <NavLink
                      to={submenu.url}
                      activeClassName='active'
                      className='nav-link text-left'>
                      <i className={"far nav-icon " + submenu.icon} />
                      <p>{submenu.name}</p>
                    </NavLink>
                  </li>
                </ul>
              );
            })}
          </li>
        );
    });
  };
  checkPermission = () => {};
  render() {
    return (
      <aside className='main-sidebar sidebar-dark-primary elevation-4 sidebar-no-expand'>
        {/* Brand Logo */}
        <NavLink to='dashboard' className='brand-link'>
          AdminLTE 3
        </NavLink>
        {/* Sidebar */}
        <div className='sidebar'>
          {/* Sidebar Menu */}
          <nav className='mt-2'>
            <ul
              className='nav nav-pills nav-sidebar flex-column nav-child-indent text-sm'
              data-widget='treeview'
              role='menu'>
              {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
              {this.renderMenu()}
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    );
  }
}
