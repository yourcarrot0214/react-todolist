import React from "react";
import styled from "styled-components";
import { TodoConnecter, TodoFormConnecter } from "../redux/containers.js";

const TodolistContainer = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const Todolist = ({ todos }) => {
  return (
    <TodolistContainer>
      {todos.map((todo) => (
        <TodoConnecter key={todo.id} todo={todo} />
      ))}
      <TodoFormConnecter />
    </TodolistContainer>
  );
};

export default React.memo(Todolist);