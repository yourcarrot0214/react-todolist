import { connect } from "react-redux";
import { addTodo, editTodo, removeTodo, completeTodo } from "./actions.js";
import Clock from "../components/Clock.jsx";
import Todolist from "../components/Todolist.jsx";
import Todo from "../components/Todo.jsx";
import TodoForm from "../components/TodoForm.jsx";

// mapDispatchToProps
const mapDispatchTodoAction = (dispatch) => ({
  addTodo: (text) => dispatch(addTodo(text)),
  completeTodo: (id, done) => dispatch(completeTodo(id, done)),
  editTodo: (id, text) => dispatch(editTodo(id, text)),
  removeTodo: (id) => dispatch(removeTodo(id)),
});

// mapStateToProps
// clock.jsx
const mapStateDateToProps = (state) => ({ date: state.date });
// todolist.jsx
const mapStateTodosToProps = (state) => ({ todos: [...state.todos] });

export const ClockConnecter = connect(mapStateDateToProps, null)(Clock);
export const TodolistConnecter = connect(mapStateTodosToProps, null)(Todolist);
export const TodoConnecter = connect(null, mapDispatchTodoAction)(Todo);
export const TodoFormConnecter = connect(null, mapDispatchTodoAction)(TodoForm);
