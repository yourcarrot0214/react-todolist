import { createStore } from "redux";
import { todos } from "./reducers.js";

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
  todos,
  localStorage["DayLine-store"]
    ? JSON.parse(localStorage["DayLine-store"])
    : initialState
);

// localStorage sync
store.subscribe(
  () => (localStorage["DayLine-store"] = JSON.stringify(store.getState()))
);

export default store;
