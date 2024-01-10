import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: #007bff;
  padding: 10px;
`;

const Navbar = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin: 0;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 8px;

  &:hover {
    background-color: #0056b3;
    border-radius: 4px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Navbar>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/todo">Todo</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/weather">weather</NavLink>
        </NavItem>

      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
