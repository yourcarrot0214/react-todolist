import React, { useState } from "react";
import styled from "styled-components";

const TodoContainer = styled.div`
    width: 100%
    height: 100px;
    border: 2px solid black;
    padding: 12px;
`;

const Todo = (props) => {
  console.log(props.todo);

  const [CheckBox, setCheckBox] = useState(false);

  const onEditTodo = () => {
    props.editTodo(props.todo.id, "test edit");
  };

  const onCompleteTodo = () => {
    props.completeTodo(props.todo.id, !CheckBox);
    setCheckBox((prev) => !prev);
  };

  const onRemoveTodo = () => {
    props.removeTodo(props.todo.id);
  };

  return (
    <TodoContainer>
      <h3>{props.todo.text}</h3>
      <input type="button" name="edit" value="수정하기" onClick={onEditTodo} />
      <input
        type="button"
        value={CheckBox ? "완료취소" : "완료하기"}
        onClick={onCompleteTodo}
      />
      <input type="button" value="삭제하기" onClick={onRemoveTodo} />
      {props.todo.start && (
        <p>
          시작시간 : {props.todo.start.hours}시 {props.todo.start.minutes}분
        </p>
      )}
      {props.todo.end !== {} && (
        <p>
          종료시간 : {props.todo.end.hours}시 {props.todo.end.minutes}분
        </p>
      )}
      {props.todo.lapse !== {} && (
        <p>
          경과시간 : {props.todo.lapse.hours}시간 {props.todo.lapse.minutes}분
        </p>
      )}
    </TodoContainer>
  );
};

export default React.memo(Todo);

/*
  1. todo 기능 구현

    1-1. 체크박스
      - 체크시 todo.done 값을 true로 변경한다.
      - todo.done이 ture면 종료시간을 기록한다.
      - todo.done이 true면 경과시간을 기록한다.
      - todo.done이 false면 종료시간을 초기화한다.
      - todo.done이 false면 경과시간을 초기화한다.
      - checkbox 클릭시 boolean 값을 변환한다. 이에 따라 dispatch 동작이 변경된다.
      - true : completeTodo, false: completeCancle
    
    1-2 시간출력
      - 시작시간, 종료시간, 경과시간을 출력한다.
*/
