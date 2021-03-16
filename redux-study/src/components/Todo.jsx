import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete, MdEdit } from "react-icons/md";

const FcButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  margin-left: 12px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TimeTag = styled.div`
  flex: 1;
  font-size: 16px;
  color: #495057;
  background: #20c997;
  border: 1px solid black;
`;

const TimeLine = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background: gray;
  width: 100%;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e9ecef;
  &:hover {
    ${FcButton} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

const Todo = (props) => {
  console.log(props.todo);
  const { todo } = props;

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
    <>
      <TimeLine>
        <TimeTag>{`${todo.start.hours} : ${todo.start.minutes}`}</TimeTag>
        {todo.end.minutes && (
          <TimeTag>{`${todo.end.hours} : ${todo.end.minutes}`}</TimeTag>
        )}
        {todo.lapse.minutes && (
          <TimeTag>{`${todo.lapse.hours} : ${todo.lapse.minutes}`}</TimeTag>
        )}
      </TimeLine>
      <TodoItemBlock>
        <CheckCircle onClick={onCompleteTodo} done={todo.done}>
          {todo.done && <MdDone />}
        </CheckCircle>
        <Text done={todo.done}>{todo.text}</Text>
        <FcButton>
          <MdDelete onClick={onRemoveTodo} />
        </FcButton>
        <FcButton>
          <MdEdit onClick={onEditTodo} />
        </FcButton>
      </TodoItemBlock>
    </>
  );
};

export default React.memo(Todo);

/*
  기능구현목표
    - store로부터 받아온 todo 정보를 출력한다.
    - complete 기능을 담은 버튼을 구현한다.
    - edit 기능을 담은 버튼을 구현한다.
    - delete 기능을 담은 버튼을 구현한다.

    - 시간 정보를 출력한다.
    - start, end, lapse 정보를 출력한다.
*/
