//dp 문제이다. 작은 문제를 해결함으로써 큰문제를 해결한다.
// 분할정복이랑 다른점은 작은 문제들을 해결해 나아가면서 memrization 을 사용한다.
// 이 전값들을 기억해 나아간다.

function solution(board) {
  let rowSize = board.length;
  let columnSize = board[0].length;
  let answer = [];

  for (let i = 1; i < rowSize; i++) {
    for (let j = 1; j < columnSize; j++) {
      if (board[i][j] !== 0) {
        board[i][j] += Math.min(board[i][j - 1], board[i - 1][j - 1], board[i - 1][j]);
      }
    }
  }

  console.log(board);

  for (let i = 0; i < rowSize; i++) {
    answer.push(...board[i]);
  }

  console.log(typeof answer[0]);

  console.log(Math.max(...answer));
}

solution([
  [1, 0],
  [0, 0],
]);
