//최소의 값이 나오기 위해서는 -를 가장 큰수로 만든다음 모든수를 더해주는것이다.
//예를들면 50-10+20+20+10 이면 50-(10+20+20+10) 으로 만들면 된다.
//그러기위해서는 - 기준으로 split 을 한다음 모든수를 더해주고 첫번쨰 수를  제외한 나머지수를 빼준다.

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let splitNagative = input[0].split("-");

let firstStep = splitNagative.map((el) => {
  let splitPositive = el.split("+");

  let sum = splitPositive.reduce((acc, curr) => {
    return acc + Number(curr);
  }, 0);

  return sum;
});

let firstNum = firstStep.shift();

let result = firstStep.reduce((acc, curr) => {
  return acc - curr;
}, firstNum);

console.log(result);
