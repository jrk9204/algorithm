//짝수와 홀수 구분하여 문자열 더해주기

//repeat을 사용할 수 도 있다.

function solution(n) {
  let answer = "";

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      answer += "수";
    } else {
      answer += "박";
    }
  }
  return answer;
}

console.log("수박".repeat(4));
