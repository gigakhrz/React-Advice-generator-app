import { useState, useEffect } from "react";
import styled from "styled-components";
import DiceImage from "../assets/icon-dice.svg";

const Advicebox = (): JSX.Element => {
  return (
    <AdviceContainer>
      <h4>ADVICE #117</h4>
      <h2>
        “It is easy to sit up and take notice, what's difficult is getting up
        and taking action.”
      </h2>
      <svg
        className="mobile"
        width="295"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fill-rule="evenodd">
          <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
          <g transform="translate(138)" fill="#CEE3E9">
            <rect width="6" height="16" rx="3" />
            <rect x="14" width="6" height="16" rx="3" />
          </g>
        </g>
      </svg>

      <svg
        className="desktop"
        width="444"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fill-rule="evenodd">
          <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
          <g transform="translate(212)" fill="#CEE3E9">
            <rect width="6" height="16" rx="3" />
            <rect x="14" width="6" height="16" rx="3" />
          </g>
        </g>
      </svg>

      <div className="generate">
        <img src={DiceImage} alt="Dice image" />
      </div>
    </AdviceContainer>
  );
};

export default Advicebox;

const AdviceContainer = styled.div`
  width: 343px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  padding: 40px 24px 64px;
  background: #313a48;
  box-shadow: 30px 50px 80px rgba(0, 0, 0, 0.100202);
  border-radius: 10px;
  position: relative;

  h4 {
    font-size: 11px;
    line-height: 15px;
    letter-spacing: 3.46px;
    color: #53ffaa;
  }

  h2 {
    font-size: 24px;
    color: #cee3e9;
    line-height: 33px;
    letter-spacing: -0.257px;
    text-align: center;
  }

  .desktop {
    display: none;
    @media (min-width: 1024px) {
      display: block;
    }
  }

  .mobile {
    display: block;
    @media (min-width: 1024px) {
      display: none;
    }
  }

  .generate {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    position: absolute;
    background-color: #53ffaa;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: -32px;
  }
`;
