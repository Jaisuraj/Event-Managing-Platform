import React, { useEffect } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link , useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";
import "./Header.css";


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
    
    <nav>
  <a href="#"><Link to="/react">React</Link></a>
  <a href=""><Link to="/react">React</Link></a>
  <a href="#"><Link to="/react">React</Link></a>
  <a href="#"><Link to="/react">React</Link></a>
  <div id="indicator"></div>
</nav>
    
  );
};
