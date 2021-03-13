const SECONDS_PER_DAY = 86400;
const SECONDS_PER_HOURS = 3600;
const SECONDS_PER_MINUTES = 60;

const currentTime = (date) => ({
  hours: date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds(),
});

const calculateSeconds = ({ hours, minutes, seconds }) => {
  const calculated =
    hours * SECONDS_PER_HOURS + minutes * SECONDS_PER_MINUTES + seconds;
  const result = 100 - (calculated / SECONDS_PER_DAY) * 100;
  return result.toFixed(1);
};

const printToPercentage = (string) => `오늘이 ${string}% 남았습니다.`;

const compose = (...fns) => (arg) =>
  fns.reduce((composed, Fn) => Fn(composed), arg);

export const remaningPercentage = compose(
  currentTime,
  calculateSeconds,
  printToPercentage
);

// test code
// console.log(
//   compose(currentTime, calculateSeconds, printToPercentage)(new Date())
// );
