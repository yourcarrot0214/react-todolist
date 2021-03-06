import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";
import PropTypes from "prop-types";

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 60px;
  height: 60px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}

  @media ${(props) => props.theme.mobile} {
    width: 40px;
    height: 40px;
    font-size: 24px;
  }
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;

  @media ${(props) => props.theme.mobile} {
    padding-left: 12px;
    padding-top: 20px;
    padding-right: 12px;
    padding-bottom: 30px;
  }
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;

  @media ${(props) => props.theme.mobile} {
    padding: 8px;
    font-size: 14px;
  }
`;

const TodoForm = (props) => {
  const { addTodo } = props;
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const onToggle = () => setOpen(!open);
  const onChangeValue = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
    setOpen(!open);
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              value={text}
              onChange={onChangeValue}
              autoFocus
              placeholder='??? ?????? ?????? ??? Enter?????? ????????????.'
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
};

export default React.memo(TodoForm);

TodoForm.propTypes = {
  addTodo: PropTypes.func,
};
