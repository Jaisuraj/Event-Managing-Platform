import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { register } from "../../actions/userActions";
import MainScreen from "../../components/MainScreen";
import "./RegisterScreen.css";
import regi from'./register.png';

export function RegisterScreen({ history }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const postDetails = (pics) => {
    if (
      pics ===
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    ) {
      return setPicMessage("Please Select an Image");
    }
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append('file', pics);
      data.append('upload_preset', 'eventplanner');
      data.append('cloud_name' , 'event2022');
      fetch("https://api.cloudinary.com/v1_1/event2022/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPic(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setMessage("Passwords do not match");
    } else dispatch(register(name, email, password, pic));
  };

  return (
    <div className="sec1">
      <div className="sqr"></div>
      <div className="log_container">
        <div className="err1">
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        {loading && <Loading />}
        </div>
        <img src={regi} className="imglog"></img>
      <h4 className="title">Register</h4>
      <form className="frm-reg" onSubmit={submitHandler}>

      <label>Name</label>
      <h4></h4>
      <input type="text" id="fname-reg" name="firstname" placeholder="Todd" value={name} onChange={(e) => setName(e.target.value)}></input>
      <h4></h4>

      <label>Email</label>
      <h4></h4>
      <input type="text" id="pname" name="password" placeholder="example@jickmail.com" value={email} onChange={(e) => setEmail(e.target.value)}></input>
      <h4></h4>

      <label>Password</label>
      <h4></h4>
      <input type="text" id="pname" name="password" placeholder="#$*^$%#$@%^@" value={password} onChange={(e) => setPassword(e.target.value)}></input>
      <h4></h4>

      <label>Confirm Password</label>
      <h4></h4>
      <input type="text" id="pname" name="password" placeholder="#$*^$%#$@%^@" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
      <h4></h4>

      <label>Profile Pic</label>
      <h4></h4>
      <input type="file" id="prfl" name="password" placeholder="Upload Pic" onChange={(e) => postDetails(e.target.files[0])}></input>
      <h4></h4>
      
      <h4 className="laag">Have an Account?<a href="/login">Login</a></h4>
      
      
      <h4></h4>
      <input type="submit" value="Register"></input>
      </form>

      </div>
    </div>
  );
}

export default RegisterScreen;