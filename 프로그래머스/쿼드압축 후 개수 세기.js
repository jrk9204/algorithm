//백준 2630번 색종이 만들기랑 똑같은 문제이다.
//큰 범위를 작은 범위로 분할하여 문제를 해결하는 방식 분할정복이다.
//해당 color(숫자가) 같은지 다른지를 판단한다.
//만약 다를 경우에는 분할을하는데 1,2,3,4 분면으로 분할을 한다.
//재귀함수에 들어올때 for문이 start또는 end 에서 divideSize를 더해주는 이유는
//해당 사분면을 순환하기위함이다.

function solution(arr) {
  let size = arr.length;
  let answer = [0, 0];

  const divider = (start, end, divideSize) => {
    let color = arr[start][end];
    for (let x = start; x < start + divideSize; x++) {
      for (let y = end; y < end + divideSize; y++) {
        if (color !== arr[x][y]) {
          divider(start, end, divideSize / 2);
          divider(start, end + divideSize / 2, divideSize / 2);
          divider(start + divideSize / 2, end, divideSize / 2);
          divider(start + divideSize / 2, end + divideSize / 2, divideSize / 2);
          return;
        }
      }
    }
    answer[color] += 1;
  };

  divider(0, 0, size);

  console.log(answer);
  return answer;
}

solution([
  [1, 1, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
]);

// solution([
//   [1, 1, 1, 1, 1, 1, 1, 1],
//   [0, 1, 1, 1, 1, 1, 1, 1],
//   [0, 0, 0, 0, 1, 1, 1, 1],
//   [0, 1, 0, 0, 1, 1, 1, 1],
//   [0, 0, 0, 0, 0, 0, 1, 1],
//   [0, 0, 0, 0, 0, 0, 0, 1],
//   [0, 0, 0, 0, 1, 0, 0, 1],
//   [0, 0, 0, 0, 1, 1, 1, 1],
// ]);
