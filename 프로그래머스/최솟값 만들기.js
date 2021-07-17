//각 자리의 숫자들을 곱하고 곱한 값에 누적 값을 더한다. 결과값이 최솟값이 나와야한다.
//결과가 최솟값이 나오기 위해서는 제일 작은숫자와 큰숫자끼리 더해야 한다.
//A배열에는 오름차순으로 정렬하고 B배열에는 내림차순으로 정렬하여 서로의 인덱스값을 곱하며
// 누적값을 더해 나면 된다.

function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  let answer = A.reduce((acc, curr, idx) => {
    return acc + curr * B[idx];
  }, 0);

  return answer;
}
