import React from "react";
import { ClockConnecter, TodolistConnecter } from "./redux/containers.js";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #f8f9fa;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 1rem;

  width: 70%;
`;

function App() {
  return (
    <AppContainer>
      <ClockConnecter />
      <TodolistConnecter />
    </AppContainer>
  );
}

export default React.memo(App);
