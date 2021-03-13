import React, { useState } from "react";
import styled from "styled-components";
import { TodoConnecter } from "../redux/containers.js";

const TodolistContainer = styled.div`
  width: 400px;
  border: 5px solid black;

  p {
    line-height: 2rem;
    :hover {
      background-color: white;
    }
  }
`;

const Todolist = ({ todos, addTodo }) => {
  // Todolist에서는 todos만 받고, Todo.jsx를 map으로 반환한다.
  // Todo.jsx에 props로 todo action을 전달한다.
  const [Text, setText] = useState("");
  const getTextValue = (e) => {
    setText(e.currentTarget.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(Text);
    setText("");
  };

  return (
    <TodolistContainer>
      <h3>Todolist</h3>
      {todos.map((todo) => (
        <TodoConnecter key={todo.id} todo={todo} />
      ))}
      <form onSubmit={onSubmit}>
        <input type="text" value={Text} name="todo" onChange={getTextValue} />
        <input type="submit" value="등록하기" />
      </form>
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
