import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <Navbar color="dark" dark expand="md">
      <Container>
        <NavbarBrand href="/">
          <img src={logo} alt="CargoFast" width="40" height="40" className="me-2" /> CargoFast
        </NavbarBrand>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink href="#services">Xidmətlər</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact">Əlaqə</NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
