import React from "react";
import { Button, Container, Row } from "react-bootstrap";

import "./LandingPage.css";
export const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Event Planner</h1>
              <p className="subtitle">Perefct planning doesn't exis...</p>
            </div>

            <div className="buttonContainer">
              <Button size="lg" className="landingbutton">
                Login
              </Button>

              <Button
                variant="outline-primary"
                size="lg"
                className="landingbutton"
              >
                Signup
              </Button>
            </div>
          </div>
        </Row>
        <video loop autoPlay muted loop id="myVideo">
          <source
            src="https://media.istockphoto.com/videos/confetti-falling-on-white-background-video-id1291598339"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </Container>
    </div>
  );
};
