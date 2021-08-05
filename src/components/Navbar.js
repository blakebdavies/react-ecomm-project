import React from "react";
import { FaBars } from "react-icons/fa";
import logo from "../logo.png";
import {
  NavWrapper,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  Searchbar,
} from "./NavbarElements";

export default function Navbar({ toggle }) {
  return (
    <NavWrapper>
      <NavbarContainer>
        <NavLogo to="/">
          <img src={logo} alt="logo" className="logo" width="70" height="70" />
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <Searchbar>
          <form action="#" className="search">
            <input
              type="text"
              className="search_input"
              placeholder="Search.."
              autoFocus={false}
            />
            <button className="search_button">
              <span className="mr-2">
                <i className="fas fa-search"></i>
              </span>
            </button>
          </form>
        </Searchbar>
        <NavMenu>
          <NavItem>
            <NavLinks
              to="/"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Shop
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/">My Brightspot</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/">Support</NavLinks>
          </NavItem>
          <NavBtn>
            <NavBtnLink to="/cart">
              <i className="fas fa-shopping-cart"></i> My Cart
            </NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/">
              <i className="fas fa-user"></i> My Account
            </NavBtnLink>
          </NavBtn>
        </NavMenu>
      </NavbarContainer>
    </NavWrapper>
  );
}
