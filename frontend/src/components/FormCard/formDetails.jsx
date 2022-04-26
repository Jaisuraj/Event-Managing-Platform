import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";

import MICLOGO from "../../assets/images/MIClogo.png";
const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0em 6px 0 6px;
  line-height: 1.4;
`;

const MediumText = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
`;

const ModerateText = styled.span`
  font-size: 15px;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
`;

const SmallText = styled.span`
  font-size: 11px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
`;

const SpacedHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OpenButton = styled.button`
  padding: 10px 16px;
  background-color: #3e48cb;
  color: #000;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  border: 3px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;
  border-radius: 8px;

  &:hover {
    background-color: transparent;
    color: #fff;
    border: 3px solid #3e48cb;
  }
`;
const SmallButton = styled.button`
  padding: 10px 16px;
  background-color: #3e48cb;
  color: #000;
  text-transform: uppercase;
  height: 35px;
  width: 70px;
  font-size: 16px;
  font-weight: 700;

  border: 3px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;
  border-radius: 8px;

  &:hover {
    background-color: transparent;
    color: #fff;
    border: 3px solid #3e48cb;
  }
`;

const MICLogo = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: auto;
    height: 30px;
  }
`;

export function FormDetails(props) {
  return (
    <DetailsContainer>
      <MediumText>Date :1/11</MediumText>
      <SpacedHorizontalContainer>
        <MediumText>List of items </MediumText>
        <MediumText>20</MediumText>
      </SpacedHorizontalContainer>
      <Marginer direction="vertical" margin="1.2em" />

      <MediumText>More Details</MediumText>

      <OpenButton>OPEN</OpenButton>

      <SpacedHorizontalContainer>
        <SmallButton>Delete</SmallButton>
        <SmallButton>Edit</SmallButton>
      </SpacedHorizontalContainer>

      <MICLogo>
        <img src={MICLOGO} />
      </MICLogo>
    </DetailsContainer>
  );
}
