import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="navbar-brand"
              width="100"
              height="90"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Shop
                </Link>
              </li>
            </ul>
            <form className="d-flex justify-content-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search products..."
                aria-label="Search"
              />
              <Link to="/">
                <ButtonContainer type="button">
                  <span className="mr-2">
                    <i className="fas fa-search"></i>
                  </span>
                </ButtonContainer>
              </Link>
            </form>
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/cart" className="ml-auto">
                  <ButtonContainer>
                    <span className="mr-2">
                      <i className="fas fa-shopping-cart" />
                    </span>
                  </ButtonContainer>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <ButtonContainer
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="mr-2">
                    <i className="fas fa-user"></i>
                  </span>
                </ButtonContainer>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li className="dropdown-item">
                    <i class="fas fa-user-circle"></i>
                    <span> Profile</span>
                  </li>
                  <li className="dropdown-item">
                    <i class="fas fa-box-open"></i>
                    <span> Orders</span>
                  </li>
                  <li className="dropdown-item">
                    <i class="far fa-heart"></i>
                    <span> Favorites</span>
                  </li>
                  <li className="dropdown-item">
                    <i class="fas fa-sign-out-alt"></i>
                    <span> Logout</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </NavWrapper>
    );
  }
}
const NavWrapper = styled.nav`
  background: var(--primary-color);
  } 
  .container {
      max-width: 80%;
  }
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
