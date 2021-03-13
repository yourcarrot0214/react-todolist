import uuid from "react-uuid";
import C from "./constants.js";

// test 완료
export const addTodo = (text) => ({
  type: C.ADD_TODO,
  id: uuid(),
  text: text,
  done: false,
  start: { hours: new Date().getHours(), minutes: new Date().getMinutes() },
});

// test 완료
export const completeTodo = (id, done) => ({
  type: C.COMPLETE_TODO,
  id,
  done,
  end: done
    ? { hours: new Date().getHours(), minutes: new Date().getMinutes() }
    : {},
});

// test 완료
export const editTodo = (id, text) => ({
  type: C.EDIT_TODO,
  id,
  text,
});

// test 완료
export const removeTodo = (id) => ({
  type: C.REMOVE_TODO,
  id,
});

/*
  updateTime
  - hours, minutes 정보를 받아 state를 업데이트 한다.
*/
