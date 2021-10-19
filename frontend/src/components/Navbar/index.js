import React from "react";
import { useGlobalContext } from "../../context";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./styles.css";

const Navigation = () => {
  const { loggedIn } = useGlobalContext();

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      variant="dark"
      className="my-nav"
    >
      <Navbar.Brand href="#home_page" className="left-items nav-btn">
        <div className="">Logo</div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end collapse-bg" id="responsive-navbar-nav">
        <Nav className="">
          {loggedIn && <Nav.Link className="mx-1 nav-btn" href="/login">Log Out</Nav.Link>}
          <Nav.Link className="mx-1 nav-btn" href="/contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navigation;
