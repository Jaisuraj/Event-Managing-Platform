import React, { useEffect } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link , useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";;


export const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

 const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };

  useEffect(() => {}, [userInfo]);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/features">Features</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
          
            <Nav.Link href="/deets">More deets</Nav.Link>
            
            
          </Nav>
          <Nav className="ml-auto">
          {userInfo ? (
            <>
            <Nav.Link eventKey={2} href="/eventnotes">
              <Link to="/myevents">My Events</Link>
            </Nav.Link>
            <NavDropdown title={`${userInfo.name}`} id="collasible-nav-dropdown">
              <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
               <NavDropdown.Item onClick={logoutHandler} >
                    Logout
                  </NavDropdown.Item>
            </NavDropdown>
            </>
            ) :(
              <Nav.Link href="/login">Login</Nav.Link>
            )}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
