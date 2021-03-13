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

  const result = endTime - startTime;

  return {
    hours: Math.floor(result / 60),
    minutes: result % 60,
  };
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

// const checks = (state = [], action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

export { date, todos };

/*
  밤 12시가 넘어가면 dayline이 다음 날로 넘어간다.
  그럼 전날 시작해서 완료하지 못한 todo는 어떻게 처리해야 하는가?

  1. 전날 밤 12시를 기준으로 완료한 것으로 체크.
  2. 다음 날 투두 리스트에 자동으로 추가. 스타트타임 00:00

  그러면 state에 데이터는 어떻게 보관해야 하는가?
  완료된 todo를 별도로 보관한다.
  화면에선 사라지지만 메뉴버튼을 누르면 다시 확인할 수 있도록.
  출력 예시는 아래처럼.
    2021년 3월 11일 목요일
      - Todolist 만들기 : 3시간 21분
      - 포트폴리오 기획하기 : 2시간 17분
  
  state[state.date] : [{}, {}]

  구현 목표

  1. todolist
    - 소요시간이 필요되는 일을 기록한다.
    - 시작시간 / 해야할일 / 진행중 or 종료시간
  2. checklist
    - 소요시간이 필요하지 않는 일을 기록한다. 메모용도.
    - 해야할일
  3. timeline
    - 현재 시간 및 하루를 %로 계산하여 표기한다.

  store 설계

  1. todolist: [{id, text, done, start, end, lapse}]
  2. checklist: [{id, text, done}]
  3. timeline에 들어가는 정보들은 컴포넌트에서 별도로 관리한다.
    - new Date().toLocaleDateString('ko-KR', options)로 연월일을 출력한다.
    - setInterval로 현재 시간을 실시간으로 출력한다.
    - setInterval로 현재 시간을 %로 출력한다.
      - Number.toFixed(1) => "41.7" 남은 시간을 기준으로 알려줘야 좋을듯.


*/
