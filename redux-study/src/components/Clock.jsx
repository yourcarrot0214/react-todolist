import React from "react";
import styled from "styled-components";
import { remaningPercentage } from "../modules/remaningPercent.js";

const ClockContainer = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
    height: 1rem;
  }
  .percentage {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
    height: 1rem;
  }
`;

const Clock = (props) => {
  setInterval(() => {
    const clock = document.querySelector(".day");
    const percentage = document.querySelector(".percentage");
    clock.innerText = new Date().toLocaleTimeString();
    percentage.innerText = remaningPercentage(new Date());
  }, 1000);

  return (
    <ClockContainer>
      <h1>{props.date}</h1>
      <div className="day"></div>
      <div className="percentage"></div>
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
