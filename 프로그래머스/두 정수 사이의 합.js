function solution(a, b) {
  let from = Math.min(a, b);
  let to = Math.max(a, b);

  let answer = 0;

  for (let i = from; i <= to; i++) {
    answer += i;
  }
  return answer;
}
