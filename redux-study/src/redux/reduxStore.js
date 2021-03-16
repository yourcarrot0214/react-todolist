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
};

// store setup
const store = createStore(
  combineReducers({ date, todos }),
  localStorage["DayLine-store"]
    ? JSON.parse(localStorage["DayLine-store"])
    : initialState
);

// store.subscribe
store.subscribe(
  () => (localStorage["DayLine-store"] = JSON.stringify(store.getState()))
);

export default store;

/*
  Day Line Store
    1. date
      - 현재 시각을 문자열로 변환하여 저장한다.
    2. todos
      - todo를 저장하는 배열
      - {id, text, done, start, end, lapse}

*/
