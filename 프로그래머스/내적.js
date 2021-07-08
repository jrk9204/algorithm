//A 와 B의 인덱스 는 같다.
// 서로의 같은 인덱스끼리 곱한 값을 다 더해주면 내적을 구할 수 있다.
// reduce의 인자로 (arr,curr,idx)를 사용하여 curr 의 a 값과 idx 를 사용해서 b의 값 을 곱하며 더해주면 된다.

function solution(a, b) {
  return a.reduce((arr, curr, index) => {
    return arr + curr * b[index];
  }, 0);
}

solution([1, 2, 3, 4], [-3, -1, 0, 2]);
