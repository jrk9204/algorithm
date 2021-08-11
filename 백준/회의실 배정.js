//회의실배정...
//회의 종료시간이 빠른순대로 정렬한다.
//만약 종료시간이 겹친다면 먼저 시작한순으로 정렬해야한다.
//정렬이 다 되었다면 처음부터 끝까지 순회를 하되 시작시간과 종료시간이 겹치지않는 것을
//골라낸다.

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let size = Number(input[0]);
let timeRange = [];
let answer = 0;
for (let i = 1; i <= size; i++) {
  const [start, end] = input[i].split(" ");
  timeRange.push([+start, +end]);
}

timeRange.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

let time = 0;

for (let i = 0; i < timeRange.length; i++) {
  if (timeRange[i][0] >= time) {
    time = timeRange[i][1];
    answer += 1;
  }
}

console.log(answer);
