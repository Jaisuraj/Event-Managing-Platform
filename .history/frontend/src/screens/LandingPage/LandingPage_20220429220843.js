import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import nft from'./bg.jpg';
import image1 from'./img1.jpg';
import image2 from'./img2.jpg';
import image3 from'./img3.jpg';
import image4 from'./img4.jpg';

import "./LandingPage.css";
export const LandingPage = () => {
  return (
    <div className="main">
      <section className="topsec">

      <div id = "cube-container">	
      <img src = {image1}></img>
      <img src = {image2}></img>
      <img src = {image3}></img>
      <img src = {image4}></img>
      </div>
        <img src={nft} className="bgimg"></img>
        <div className="button_box"></div>
        <span className="login"><a href="/login"></a></span>
        <span className="signup"><a href="/register"></a></span>
        
      </section>
    </div>

  );
};
