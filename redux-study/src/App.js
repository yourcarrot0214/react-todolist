import React from "react";
import { ClockConnecter, TodolistConnecter } from "./redux/containers.js";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    box-sizing: border-box;
    background: #e9ecef;
  }
`;

const AppContainer = styled.div`
  width: 512px;
  height: 768px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto;

  margin-top: 32px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <ClockConnecter />
        <TodolistConnecter />
      </AppContainer>
    </>
  );
}

export default React.memo(App);
