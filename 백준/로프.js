//오름차순으로 정렬후 작은 작은숫자부터 사이즈를 곱해나아가며 정답을 찾는다.

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let size = Number(input[0]);
let arr = [];

for (let i = 1; i <= size; i++) {
  arr.push(Number(input[i]));
}

arr.sort((a, b) => a - b);

let answer = Math.max(...arr);

arr.forEach((el, idx) => {
  let maxWeight = el * (size - idx);

  if (maxWeight >= answer) {
    answer = maxWeight;
  }
});

console.log(answer);
