//해당 숫자의 최대의 숫자를 구하기위해서는 현재 최소한의 숫자들을 더해나아가야 한다.

let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
let target = Number(input);
let answer = 1;
let count = 1;

while (target >= answer) {
  count += 1;

  answer += count;
}

console.log(count - 1);
