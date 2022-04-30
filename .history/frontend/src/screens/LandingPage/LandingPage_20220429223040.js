import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import nft from'./bg.jpg';
import Lottie from 'react-lottie';
import animationData from './ptanimals';

import "./LandingPage.css";
export const LandingPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className="main">
       <div>
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
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
