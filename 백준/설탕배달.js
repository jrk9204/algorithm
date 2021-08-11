//설탕봉지는 3kg 5kg 두가지가있다 최소의 봉지수를 구하라..
// 그리디 알고리즘을 사용했다. 5의 나머지가 0일때까지 3을 계속해서 빼준다. 5의 나머지가 0인 순간 정답이다.

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let total = Number(input[0]);
let answer = 0;

while (total > 0) {
  if (total % 5 === 0) {
    answer += total / 5;
    console.log(answer);
    return;
  }

  total -= 3;
  answer += 1;
}

if (total < 0) console.log(-1);
else console.log(answer);
