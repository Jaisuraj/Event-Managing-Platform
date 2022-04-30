import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { login } from "../../actions/userActions";
import MainScreen from "../../components/MainScreen";
import "./LoginScreen.css";
import axios from "axios";
import log from'./login.png';

export const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/eventnotes");
    }
  }, [history, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="sec1">
      <div className="sqr"></div>
      <div className="bgpink"></div>
      <div className="log_container">
      <img src={log} className="imglog"></img>
      <div className="err">
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      </div>
      <h4 className="title">Log In</h4>
      <form className="frm" onSubmit={submitHandler}>
      <label>Email</label>
      <h4></h4>
      <input type="text" id="fname" name="firstname" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
      <h4></h4>
      <label>Password</label>
      <h4></h4>
      <input type="text" id="pname" name="password" placeholder="#$*^$%#$@%^@" onChange={(e) => setPassword(e.target.value)}></input>
      <h4></h4>
      <h4 className="reg">New user?<a href="/register">Register Here</a></h4>
      
      <input type="submit" value="Login"></input>
      </form>
      </div>
    </div>
  );
};
export default LoginScreen;
