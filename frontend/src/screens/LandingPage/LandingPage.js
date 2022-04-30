import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import nft from'./bg.jpg';
import Lottie from 'react-lottie';
import animationData from './ptanimals';

import "./LandingPage.css";
export const LandingPage = () => {
  const defaultOptions = {
    loop: false,
    autoplay: false,
    onHover:true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
      <div className="main">
        <div className="animation">
        <Lottie 
        options={defaultOptions}
          height={400}
          width={600}
        />
      </div>
      <section className="topsec">
        <img src={nft} className="bgimg"></img>
        <div className="button_box"></div>
        <span className="login"><a href="/login"></a></span>
        <span className="signup"><a href="/register"></a></span>
        
      </section>
    </div>

  );
};
