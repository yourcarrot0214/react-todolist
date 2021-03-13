import { createStore, combineReducers } from "redux";
import { date, todos } from "./reducers.js";

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
};

const initialState = {
  date: new Date().toLocaleDateString("ko-KR", options),
  todos: [
    {
      id: 0,
      text: "hello",
      done: false,
      start: { hours: 12, minutes: 57 },
      end: {},
      lapse: {},
    },
    {
      id: 1,
      text: "HI",
      done: false,
      start: { hours: 14, minutes: 21 },
      end: {},
      lapse: {},
    },
  ],
};

// store setup
const store = createStore(combineReducers({ date, todos }), initialState);

// store.subscribe
// store.subscribe(() => console.log("store updated : ", store.getState()));

export default store;

/*
  Day Line Store setup

  initialState
  - date: {hours, minutes}
  - newDate: [{start, end}]

*/
