import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export const NavHead = ({ links = [], children, ...rest }) => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">ViewURL</Navbar.Brand>
        <Nav className="mx-auto">
          {/* {links.map((v, i) => (
            <Nav.Link as={Link} to={v.path}>
              {v.name}
            </Nav.Link>
          ))} */}
          {children}
        </Nav>
      </Navbar>
    </>
  );
};
