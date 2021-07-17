function solution(s) {
  let arr = s.split("");

  let answer = arr.sort((a, b) => b.charCodeAt() - a.charCodeAt());

  return answer.join("");
}
