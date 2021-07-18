// 2진법과 16진법을 사용하기위해서 toString을 사용한다.
// 빈 string을 선언해주고 t진법으로 변환하는 값을 계속해서 더해준다.
// 다 변환된 값 string에서 자기 턴에 맞는 숫자만 추출해와서 더해준다.
function solution(n, t, m, p) {
  let map = "";
  let turn = [];
  let turnStr = "";
  let answer = "";
  let count = 0;

  for (let i = 0; i <= t * m; i++) {
    map += i.toString(n).toUpperCase();
  }
  for (let i = 1; i <= map.length; i++) {
    turnStr += map[i - 1];
    if (i % m === 0) {
      turn.push(turnStr);
      turnStr = "";
    }
  }
  if (turnStr.length !== 0) turn.push(turnStr);

  while (answer.length !== t) {
    answer += turn[count][p - 1];
    count += 1;
  }

  return answer;
}
solution(16, 16, 2, 1);
