//filter을 사용하여 나누어 떨어지는 숫자를 리턴하면된다.
//만약 비어있을경우에 -1을 넣어서 리턴해주면된다.

function solution(arr, divisor) {
  let sorted = arr.sort((a, b) => a - b);
  let answer = sorted.filter((el) => el % divisor === 0);

  if (answer.length === 0) {
    return [-1];
  }

  return answer;
}
