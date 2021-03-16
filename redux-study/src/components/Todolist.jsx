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
      <h3>Todolist</h3>
      {todos.map((todo) => (
        <TodoConnecter key={todo.id} todo={todo} />
      ))}
      <TodoFormConnecter />
    </TodolistContainer>
  );
};

export default React.memo(Todolist);

/*
    1. todolist 화면 구성
    오늘의 목표는 0개 입니다.
    
    체크박스 / 텍스트 / hover: 수정버튼
    시작시간 / 종료시간 / 경과시간

    todo 입력폼
      - +버튼 클릭시 toggle값이 true가 되고 입력 폼이 나타난다.
      - 입력폼은 text를 받아서 store에 dispatch 한다.
      - dispatch type: C.ADD_TODO, id: uuid(), text: text, done: false, start: {}


*/
