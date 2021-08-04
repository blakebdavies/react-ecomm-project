import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            Shop
          </SidebarLink>
          <SidebarLink to="/" onClick={toggle}>
            My Brightspot
          </SidebarLink>
          <SidebarLink to="/" onClick={toggle}>
            Support
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/cart" onClick={toggle}>
            <i className="fas fa-shopping-cart"></i>
          </SidebarRoute>
          <SidebarRoute to="/" onClick={toggle}>
            <i className="fas fa-user"></i>
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
