import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import nft from'./img_home.png';

import "./LandingPage.css";
export const LandingPage = () => {
  return (
    <div className="main">
      <section className="topsec">
        
        <div className="button_box"></div>
        <span className="login"><a href="/login"></a></span>
        <span className="signup"><a href="/register"></a></span>
        
      </section>
    </div>
  );
};
