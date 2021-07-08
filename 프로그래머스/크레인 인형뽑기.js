//이차원 배열형태로 주어진 board 에서 moves 의 순서대로 인형들이 바구니에 옮겨진다.
//바구니로 옮겨지는 과정에서 같은 종류의 인형이 있을경우에 인형 2개가 사라진다.
//스택을 사용할것 임으로 바구니를 스택 배열로 생각하고 board 에서 moves의 순서대로 스택 바구니에 넣는다.
//맨위에 있는 인형과 넣으려는 인형이 같을경우 맨위에 있는 이형이 pop 과 동시에 answer 배열에 2가 추가된다.
//moves 가 모두 사라질때까지 반복한다.

function solution(board, moves) {
  let stack = [];
  let size = board.length;
  let answer = 0;

  moves.forEach((el) => {
    for (let i = 0; i < size; i++) {
      if (board[i][el - 1]) {
        if (stack[stack.length - 1] === board[i][el - 1]) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(board[i][el - 1]);
        }

        board[i][el - 1] = 0;
        break;
      }
    }
  });

  console.log(answer);
  console.log(board);
}

solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);
