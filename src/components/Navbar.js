import React from "react";
import { FaBars } from "react-icons/fa";
import logo from "../Brightspot.png";
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
} from "./NavbarElements";

export default function Navbar({ toggle }) {
  return (
    <NavWrapper>
      <NavbarContainer>
        <NavLogo to="/">
          <img
            src={logo}
            alt="logo"
            className="logo"
            width="167"
            height="167"
          />
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
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
        </NavMenu>
      </NavbarContainer>
    </NavWrapper>
  );
}
