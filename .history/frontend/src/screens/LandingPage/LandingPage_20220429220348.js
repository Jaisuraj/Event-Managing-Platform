import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import nft from'./bg.jpg';

import "./LandingPage.css";
export const LandingPage = () => {
  return (
    <div className="main">
      <section className="topsec">

      <div id = "cube-container">	
      <img src = "image1.jpg"></img>
      <img src = "image2.jpg"></img>
      <img src = "image3.jpg"></img>
      <img src = "image4.jpg"></img>
      </div>
        <img src={nft} className="bgimg"></img>
        <div className="button_box"></div>
        <span className="login"><a href="/login"></a></span>
        <span className="signup"><a href="/register"></a></span>
        
      </section>
    </div>

  );
};
