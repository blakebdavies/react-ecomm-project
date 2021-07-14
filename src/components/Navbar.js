import React, { Component } from 'react';
import {Link} from "react-router-dom";
import logo from "../logo.png";


export default class Navbar extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                <div class="container">
               {/*
               <div>Icons made by <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a> from <a href="https://www.flaticon.com/" 
               title="Flaticon">www.flaticon.com</a></div>}*/}
               <Link to="/">
                   <img src={logo} alt="logo"
                   className="navbar-brand" width="40" height="50"/>
               </Link>
               <ul className="navbar-nav align-items-center">
                   <li className="nav-item ml-5">
                       <Link to="/" className="nav-link">
                           Products
                       </Link>
                   </li>
               </ul>
               <Link to="/cart" className="ml-auto">
                   <button>
                       <i className="fas fa-cart-plus" />
                       My Cart
                   </button>
               </Link>
               </div>
            </nav>
        )
    }
}