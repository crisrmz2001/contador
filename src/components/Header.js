import React, { Component } from 'react'
import Menu from './svg/barras.svg';  
import CartIcon from './svg/carrito.svg';   
import {Link} from 'react-router-dom'
import './css/Header.css'
export class Header extends Component {
  
  render() {
    return (
     <header>
        <div className="menu">
          <img src={Menu} alt="" width="20"/>
        </div>
        <div className="logo">
           <h1><Link to="/">VanillaStore</Link></h1>
        </div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Productos">Productos</Link></li>
                <li><Link to="/Contacto">Contacto</Link></li>
            </ul>
            <div className="nav-cart">
                <span>0</span>
                <Link to="/cart">
                <img src={CartIcon} alt="" width="20"/>
                </Link>
            </div>
        </nav>
     </header>
    )
  }
}

export default Header