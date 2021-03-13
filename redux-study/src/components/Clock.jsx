import React from "react";
import styled from "styled-components";
import { remaningPercentage } from "../modules/remaningPercent.js";

const ClockContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: blue;

  div {
    width: 300px;
    height: 50px;
  }
`;

const Clock = (props) => {
  setInterval(() => {
    const clock = document.getElementById("clock");
    const percentage = document.getElementById("percentage");
    clock.innerText = new Date().toLocaleTimeString();
    percentage.innerText = remaningPercentage(new Date());
  }, 1000);

  return (
    <ClockContainer>
      <h1>{props.date}</h1>
      <div id="clock"></div>
      <div id="percentage"></div>
    </ClockContainer>
  );
};

export default React.memo(Clock);

/*
    1. date
      - 연월일 요일을 출력한다.
    
    2. clock
      - 현재 시간을 출력한다.
    
    3. percentage
      - 남은 시간을 percentage로 출력한다.
*/
