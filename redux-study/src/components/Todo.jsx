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
  font-size: 16px;
  color: #495057;
  background: #38d9a9;
  padding: 6px 6px;
  margin-right: 2rem;
  border-radius: 6px;
`;

const TimeLine = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 12px;
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
  ${(props) =>
    props.editmode &&
    css`
      display: none;
    `}
`;

const InsertForm = styled.form``;

const EditInput = styled.input`
  display: none;
  flex: 1;
  outline: none;
  font-size: 21px;
  border: none;
  ${(props) =>
    props.editmode &&
    css`
      display: inline-block;
    `}
`;

const Todo = (props) => {
  const { todo, editTodo } = props;

  const [CheckBox, setCheckBox] = useState(false);
  const [EditMode, setEditMode] = useState(false);
  const [EditText, setEditText] = useState(todo.text);

  const convertedLaptime = (laptime) => {
    const { hours, minutes } = laptime;
    let result = "";
    if (
      (hours === 0 && minutes === 0) ||
      (hours === undefined && minutes === undefined)
    ) {
      return result;
    } else if (hours === 0 && minutes !== 0) {
      return <TimeTag>{`Laptime ${minutes}분`}</TimeTag>;
    } else {
      return <TimeTag>{`Laptime ${hours}시간 ${minutes}분`}</TimeTag>;
    }
  };

  const onChangeValue = (e) => {
    setEditText(e.target.value);
  };

  const onEditTodo = () => {
    setEditMode(!EditMode);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (todo.text === EditText) setEditMode(!EditMode);
    else {
      editTodo(props.todo.id, EditText);
      setEditMode(!EditMode);
    }
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
        {convertedLaptime(todo.lapse)}
      </TimeLine>
      <TodoItemBlock>
        <CheckCircle onClick={onCompleteTodo} done={todo.done}>
          {todo.done && <MdDone />}
        </CheckCircle>
        <Text editmode={EditMode} done={todo.done}>
          {todo.text}
        </Text>
        <InsertForm onSubmit={onSubmit}>
          <EditInput
            editmode={EditMode}
            onChange={onChangeValue}
            value={EditText}
            placeholder={todo.text}
            autoFocus
          />
        </InsertForm>
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
