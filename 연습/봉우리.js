const test = (data) => {
  let answerCount = 0;
  let size = data.length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, -1, 0, 1];

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let isAnswer = 1;
      for (let z = 0; z < 4; z++) {
        let nx = i + dx[z];
        let ny = j + dy[z];

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < size &&
          ny < size &&
          data[nx][ny] > data[i][j]
        ) {
          isAnswer = 0;
          break;
        }
      }

      if (isAnswer) {
        answerCount += 1;
      }
    }
  }

  console.log(answerCount);
};

test([
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
]);
