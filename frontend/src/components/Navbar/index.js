import React from "react";
import { useGlobalContext } from "../../context";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./styles.css";

const Navigation = () => {
  const { loggedIn } = useGlobalContext();

  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      bg="dark"
      variant="dark"
      className="navbar"
    >
      <Navbar.Brand href="#home_page" className="left-items">
        <div className="">Logo</div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className={loggedIn ? "double-items" : "single-items"}>
          {loggedIn ? <Nav.Link href="/login">Log Out</Nav.Link> : null}
          <Nav.Link href="/contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navigation;
