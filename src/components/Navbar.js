import React, { Component } from 'react';
import {Link} from "react-router-dom";
import logo from "../logo.png";
import styled from 'styled-components';
import { ButtonContainer } from './Button'

export default class Navbar extends Component {
    render(){
        return(
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <div class="container">
               {/*
               Icons made by <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a> from <a href="https://www.flaticon.com/" 
               title="Flaticon">www.flaticon.com</a>}*/}
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
                   <ButtonContainer>
                       <span className="mr-2">
                       <i className="fas fa-cart-plus" />
                       My Cart
                       </span>
                   </ButtonContainer>
               </Link>
               </div>
            </NavWrapper>
        )
    }
}
const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color: var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform: campitalize;
}
`;
