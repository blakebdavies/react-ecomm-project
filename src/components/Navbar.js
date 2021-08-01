import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper>
        <div className="container-fluid">
          <div className="logo">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="logo"
                width="70"
                height="70"
              />
            </Link>
          </div>
          <div className="main-nav">
            <ul className="main-nav_list">
              <li className="main-nav_list_item">
                <a href="/">Shop</a>
              </li>
              <li className="main-nav_list_item">
                <a href="/">My Brightspot</a>
                <ul className="dropdown-list">
                  <li className="dropdown-list_item">
                    <a href="/">
                      <i class="fas fa-file-invoice"></i> Billing and Payments
                    </a>
                  </li>
                  <li className="dropdown-list_item">
                    <a href="/">
                      <i class="fas fa-mobile-alt"></i> My Products
                    </a>
                  </li>
                  <li className="dropdown-list_item">
                    <a href="/">
                      <i class="fab fa-app-store-ios"></i> My Apps
                    </a>
                  </li>
                  <li className="dropdown-list_item">
                    <a href="/">
                      <i class="fas fa-cog"></i> Settings
                    </a>
                  </li>
                </ul>
              </li>
              <li className="main-nav_list_item">
                <a href="/">Support</a>
                <ul className="dropdown-list">
                  <li className="dropdown-list_item">
                    <a href="/">
                      <i class="fas fa-truck"></i> Delivery
                    </a>
                  </li>
                  <li className="dropdown-list_item">
                    <a href="/">
                      <i class="fas fa-database"></i> Data Charges
                    </a>
                  </li>
                  <li className="dropdown-list_item">
                    <a href="/">
                      <i class="fas fa-plane"></i> Traveling Abroad
                    </a>
                  </li>
                  <li className="dropdown-list_item">
                    <a href="/">
                      <i class="fas fa-users"></i> Our Community
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* Search Bar */}
          <div className="search-bar">
            <form action="#" className="search">
              <input
                type="text"
                className="search_input"
                placeholder="Search phones..."
                autoFocus={false}
              />
              <button className="search_button">
                <span className="mr-2">
                  <i className="fas fa-search"></i>
                </span>
              </button>
            </form>
          </div>
          {/* Cart Nav and Profile */}
          <div className="main-nav_user-nav">
            <ul className="main-nav_user-nav_list">
              <li className="main-nav_user-nav_list_item">
                <a href="/cart" className="cart-icon ml-auto">
                  <ButtonContainer>
                    <span className="mr-2">
                      <i className="fas fa-shopping-cart"></i>
                    </span>
                  </ButtonContainer>
                </a>
              </li>
              <li className="main-nav_user-nav_list_item">
                <a href="/" className="user-icon ml-auto">
                  <ButtonContainer>
                    <span className="mr-2">
                      <i className="fas fa-user"></i>
                    </span>
                  </ButtonContainer>
                </a>
                {/* Profile Dropdown*/}
                <ul className="dropdown-list">
                  <li className="dropdown-list_item">
                    <a href="/" className="user-nav_dropdown-link">
                      <i className="fas fa-user"></i>
                      <span> Profile</span>
                    </a>
                  </li>
                  <li className="dropdown-list_item">
                    <a href="/" className="user-nav_dropdown-link">
                      <i className="fas fa-sign-out-alt"></i>
                      <span> Logout</span>
                    </a>
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
  align-items: center;
  background-color: var(--primary-color);
  color: var(--mainWhite);
  display: flex;
  font-size: 1.4rem;
  justify-content: space-between;
}
.container{
  max-width: 100%;
}
.main-nav{
  display: inline-block;
  float:left;
  padding: 10px;
  position: relative;
  left: 7rem;
}
.main-nav_list_item {
  display: inline;
  float: left;
  list-style: none;
  position: relative;
}
.main-nav_list_item a {
  align-items: center;
  color: var(--mainWhite);
  justify-content: space-between;
  padding: 20px;
  text-decoration: none;
  transition: all 200ms ease-in-out;
  cursor: pointer;
}
.main-nav_list_item a:hover {
  color: var(--secondary-color);
}
.main-nav_list_item:hover .dropdown-list{
  display: block;
}
.dropdown-list {
  background-color: var(--primary-color);
  border-radius: 0px 0px 4px; 4px;
  display: none;
  margin: .05rem;
  position: absolute;
  padding: 12px;
}

.dropdown-list_item {
  border-radius: 4px;
  font-size: 1rem;
  list-style: none;
  width: 200px;
  padding-bottom:5px;
}
.dropdown-list_item a {
color: var(--mainWhite);
padding: 5px 15px 5px 15px;
text-align: left;
}
.dropdown-list_item a:hover {
background-color: var(--mainYellow);
border-radius: 2px;
text-decoration: none;
}
.search{
  align-items: center;
  display: flex;
  flex: 0 0 40%;
  justify-content: center;
  position: relative
}

.search_input{
  background-color: var(--mainWhite);
  border: none;
  border-radius: 100px;
  color: var(--secondary-color);
  font-family: inherit;
  font-size: 1rem;
  margin-right: -3.25rem;
  padding: .7rem 2rem;
  transition: all .2s;
  width: 40%;
}
.search_button{
  background-color: var(--mainWhite);
  border: none;
  color: var(--secondary-color);
  font-size: 1.3rem;
}

.main-nav_user-nav_list{
  display: flex;
  float: right;
  margin-right: 5rem;
  position: relative;
  padding-top:-5rem;
}
.main-nav_user-nav_list_item{
  list-style: none;
  text-decoration: none;
}
.main-nav_user-nav_list_item:hover .dropdown-list {
  display: block;
}
.user-nav_dropdown-link{
  text-decoration: none;
}
.user-nav_dropdown-link:hover {
  color: var(--secondary-color);
}
`;
