import uuid from "react-uuid";
import C from "./constants.js";
import { convertedTime } from "../modules/timeFactory.js";

export const addTodo = (text) => ({
  type: C.ADD_TODO,
  id: uuid(),
  text: text,
  done: false,
  start: convertedTime(new Date()),
});

export const completeTodo = (id, done) => ({
  type: C.COMPLETE_TODO,
  id,
  done,
  end: done ? convertedTime(new Date()) : {},
});

export const editTodo = (id, text) => ({
  type: C.EDIT_TODO,
  id,
  text,
});

export const removeTodo = (id) => ({
  type: C.REMOVE_TODO,
  id,
});
