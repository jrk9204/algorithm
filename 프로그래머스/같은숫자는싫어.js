//스택을 사용하면된다. 숫자가 이전 숫자랑 다를경우 push 한다.
function solution(arr) {
  let count = 0;
  let answer = [];
  answer.push(arr[0]);
  arr.shift();
  while (count <= arr.length - 1) {
    if (answer[answer.length - 1] !== arr[count]) {
      answer.push(arr[count]);
    }

    count += 1;
  }

  return answer;
}
