import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import nft from'./img_home.png';

import "./LandingPage.css";
export const LandingPage = () => {
  return (
    <div className="main">
      <section className="topsec">
        <div className="c1"></div>
        <div className="c2"></div>
        <div className="c3"></div>
        <div className="c4"></div>
        <div className="c5"></div>
        <img src={nft} className="imgnft"></img>
        <h1 className="title"></h1>
        <h1 className="desc">Raise the toast<br></br>We'll get the glasses</h1>
        <div className="button_box"></div>
        <span className="login"><a href="/login"></a></span>
        <span className="signup"><a href="/register"></a></span>
        
      </section>
    </div>
  );
};
