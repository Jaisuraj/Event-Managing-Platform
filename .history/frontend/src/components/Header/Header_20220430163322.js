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
    <div className="main_nav">
    <nav>
  <Link to="/">HOME</Link>
  <Link to="/deets">MAPS</Link>
  <Link to="/createnote">CREATE</Link>
  <Link to="/mynotes">SPACE</Link>
  <div id="indicator"></div>
  </nav>
      <div className="logout">
        logout
      </div>
  </div>
  
    
  );
};
