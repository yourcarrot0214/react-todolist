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

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

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

/*
  AppContainer height: 100%가 적용되지 않음.
  - 해결 방안으로 html, body height 값을 100%로 설정했지만 변화 없음.

  styled-component
  - &:active 가 클릭을 유지할때만 적용되는 문제.
*/
