import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <div class="container">
          {/*
               Icons made by <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a> from <a href="https://www.flaticon.com/" 
               title="Flaticon">www.flaticon.com</a>}*/}
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="navbar-brand"
              width="100"
              height="90"
            />
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item p-2 ml-5">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item p-2 ml-5">
              <Link to="/" className="nav-link">
                Shop
              </Link>
            </li>
            <li className="nav-item p-2 ml-5">
              <Link to="/" className="nav-link">
                About
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <a to="/" className="ml-auto">
                <ButtonContainer>
                  <span className="mr-2">
                    <i className="fas fa-search"></i>
                  </span>
                </ButtonContainer>
              </a>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                  <span className="mr-2">
                    <i className="fas fa-shopping-cart" />
                  </span>
                </ButtonContainer>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="ml-auto">
                <ButtonContainer>
                  <span className="mr-2">
                    <i className="fas fa-user"></i>
                  </span>
                </ButtonContainer>
              </Link>
            </li>
          </ul>
        </div>
      </NavWrapper>
    );
  }
}
const NavWrapper = styled.nav`
  background: var(--primary-color);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
    transition: all 150ms ease-in-out;
  }
  .nav-link:hover {
    color: var(--secondary-color) !important;
  }
`;
