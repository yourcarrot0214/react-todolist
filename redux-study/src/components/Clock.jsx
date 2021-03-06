import React from "react";
import styled from "styled-components";
import { remaningPercentage } from "../modules/timeFactory.js";
import PropTypes from "prop-types";

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

  @media ${(props) => props.theme.mobile} {
    padding-top: 24px;
    padding-left: 12px;
    padding-right: 12px;
    padding-bottom: 6px;
    h1 {
      font-size: 24px;
    }
    .day {
      margin-top: 12px;
      font-size: 16px;
    }
    .percentage {
      margin-top: 20px;
      margin-bottom: 12px;
    }
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
      <div className='day'></div>
      <div className='percentage'></div>
    </ClockContainer>
  );
};

export default React.memo(Clock);

Clock.propTypes = {
  date: PropTypes.string,
};
