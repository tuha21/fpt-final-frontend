import React, { Component } from 'react'
import {
  Link
} from "react-router-dom"

export default class SiderBar extends Component {
  render() {
    return (
      <div className="sider-bar">
        <div className="logo">
          <span>ADMIN</span>
        </div>
        <div className="menu">
          <div className="catalog">
            <p className="menu-sub-title">CATALOG</p>
            <ul className="menu-sub-list">
              <li><Link className="link" to="/"><i className="fas fa-tachometer-alt"></i>Dashboard</Link></li>
              <li><Link className="link" to="/categories"><i className="fas fa-list"></i>Category</Link></li>
              <li><i className="fab fa-product-hunt"></i>Product</li>
              <li><i className="fas fa-dolly-flatbed"></i>Inventory</li>
            </ul>
          </div>
        </div>

      </div>
    )
  }
}
