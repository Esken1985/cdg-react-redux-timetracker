import React from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

const HeaderNavLinks = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledNavLink = styled(NavLink)`
  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
  width: 77px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  margin-right: 48px;
  &.active {
    border-bottom: 3px solid #ffffff;
  }
  &:last-child {
    margin-right: 0px;
  }
  &:hover {
    color: #828282;
  }
`;


const HeaderNavbar = () => {
  return (
    <HeaderNavLinks>
      <StyledNavLink to="/" exact={true} activeClassName="active">
        Home
      </StyledNavLink>
      <StyledNavLink to="/issues">Issues</StyledNavLink>
      <StyledNavLink to="/filter">Filter</StyledNavLink>
      <StyledNavLink to="/projects">Projects</StyledNavLink>
    </HeaderNavLinks>
  );
};

export default HeaderNavbar;