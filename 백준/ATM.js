//오름차순으로 정렬한다.
//처음부터 수를 계속해서 더해간다.

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let size = +input[0];
let answer = 0;
let arr = input[1].split(" ");
arr.sort((a, b) => a - b);
let tracking = 0;

for (let i = 0; i < size; i++) {
  tracking += Number(arr[i]);
  answer += tracking;
}

console.log(answer);
