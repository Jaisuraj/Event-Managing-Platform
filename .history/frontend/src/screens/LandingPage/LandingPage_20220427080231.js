import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import nft from'./img_home.png';

import "./LandingPage.css";
export const LandingPage = () => {
  return (
    <div className="main">
      <section className="topsec">
      <div class="container">
  <input type="radio" id="s1" name="slides" checked="checked"/>
  <section class="slide slide1">
    <h2>Heading One</h2>
  </section>
  <input type="radio" id="s2" name="slides"/>
  <section class="slide slide2">
    <h2>Heading Twol</h2>
  </section>
  <input type="radio" id="s3" name="slides"/>
  <section class="slide slide3">
    <h2>Heading Three</h2>
  </section>
</div>
        <div className="button_box"></div>
        <span className="login"><a href="/login"></a></span>
        <span className="signup"><a href="/register"></a></span>
        
      </section>
    </div>
  );
};
