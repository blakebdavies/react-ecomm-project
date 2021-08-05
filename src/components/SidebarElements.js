import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: var(--primary-color);
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: var(--mainWhite);
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.8rem;
  background: transparent;
  font-size: 2rem;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: var(--primary-color);
`;
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and all (max-width: 480px) {
    grid-template-rows: repeat(0, 60px);
  }
`;
export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: var(--mainWhite);
  cursor: pointer;

  &:hover {
    color: var(--secondary-color);
    transition: all 0.2s ease-in-out;
  }
`;
export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
border-radius: 58px;
background: var(--mainWhite);
whitespace: nowrap;
padding: 16px 64px;
margin-right: 5px;
color: var(--primary-color);
font-size: 16px;
outline:; none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
transition: all 0.2s ease-in-out;
background: var(--secondary-color);
color: var(--mainWhite);
}
`;