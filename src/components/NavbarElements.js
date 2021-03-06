import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import "../App.css";

export const NavWrapper = styled.nav`
  align-items: center;
  background-color: var(--primary-color);
  color: var(--mainWhite);
  display: flex;
  font-size: 1.3rem;
  justify-content: space-between;
  height:100px;
  position: sticky;
  top:0;
  z-index: 10;
}

@media screen and (max-width: 960px){
  transition: 0.8s all ease;
}
`;
export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
margin-left: 2rem;
}
`;

export const NavLogo = styled(LinkR)`
justify-self: flex-start;
cursor: pointer;
display: flex;
align-items: center; 
margin-left: 24px;
filter: drop-shadow(0px 0px 10px rgba(247, 243, 243, 0.2));
}
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: var(--mainWhite);
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  text-align: center;
  margin-top: 1.7rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const NavLinks = styled(LinkS)`
color: var(--mainWhite);
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%
cursor: pointer;

&:hover{
    cursor: pointer;
    color: var(--secondary-color);
}
&.active{
  border-bottom: 3px solid var(--mainWhite);
}
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  background: var(--mainWhite);
  border: none;
  border-radius: 50px;
  color: var(--primary-color);
  font-size: 1rem;
  margin: 5px;
  outline: none;
  padding: 10px 30px;
  text-decoration: none;
  transition: all 200ms ease-in-out;
  white-space: nowrap;

  &:hover {
    transition: all 200ms ease-in-out;
    background: var(--secondary-color);
    color: var(--mainWhite);
  }
`;
