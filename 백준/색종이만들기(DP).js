//분할 정복 문제이다.
//프로그래머스 쿼드압축 후 개수 세기 문제랑 같다.

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let inputSize = Number(input[0]);
const data = input.slice(1).map((v) => v.split(" "));

const main = (paper) => {
  let answer = [0, 0];

  const divider = (start, end, size) => {
    let color = paper[+start][+end];
    for (let x = start; x < start + size; x++) {
      for (let y = end; y < end + size; y++) {
        if (color !== paper[+x][+y]) {
          divider(start, end, size / 2);
          divider(start, end + size / 2, size / 2);
          divider(start + size / 2, end, size / 2);
          divider(start + size / 2, end + size / 2, size / 2);
          return;
        }
      }
    }
    answer[color] += 1;
  };
  divider(0, 0, paper.length);

  console.log(...answer);
};

main(data);
