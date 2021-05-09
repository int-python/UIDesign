import React from "react";
import {
  Button,
  Form,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import AboutUs from "./AboutUs";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Navbar className="header_nav" collapseOnSelect expand="lg">
        <Navbar.Brand href="#home">
          <img
            src="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/logo-header-1.png"
            alt=""
            className="header_leftLogo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="header_right" id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <NavDropdown
              className="drop "
              renderMenuOnMount={true}
              title="Home"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              renderMenuOnMount={true}
              title="Pages"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Services</Nav.Link>
            <NavDropdown
              renderMenuOnMount={true}
              title="Blog"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              renderMenuOnMount={true}
              title="Contact"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <AboutUs />
    </div>
  );
}

export default Header;
