import C from "./constants.js";

const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = 1440;

const date = (state = "", action) => {
  switch (action.type) {
    case C.UPDATE_TIME:
      return action.date;
    default:
      return state;
  }
};

const lapseTime = (start, end) => {
  const startTime = start.hours * MINUTES_PER_HOUR + start.minutes;
  const endTime =
    start.hours > end.hours
      ? MINUTES_PER_DAY
      : end.hours * MINUTES_PER_HOUR + end.minutes;

  const calculated = endTime - startTime;
  const result = {
    hours: Math.floor(calculated / 60),
    minutes: calculated % 60,
  };

  return result;
};

const todos = (state = [], action) => {
  switch (action.type) {
    case C.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          done: action.done,
          start: action.start,
          end: {},
          lapse: {},
        },
      ];
    case C.COMPLETE_TODO:
      return state.map((todo) =>
        todo.id === action.id
          ? {
              ...todo,
              done: action.done,
              end: action.end,
              lapse: action.done ? lapseTime(todo.start, action.end) : {},
            }
          : todo
      );
    case C.EDIT_TODO:
      return state.map((todo) =>
        todo.id === action.id
          ? {
              ...todo,
              text: action.text,
            }
          : todo
      );
    case C.REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

export { date, todos };
