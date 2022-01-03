const test = (data) => {
  let allCase = [];
  let answer = 0;

  for (let i = 1; i <= data[0][0]; i++) {
    for (let j = 1; j <= data[0][0]; j++) {
      let count = 0;
      let pi = 0;
      let pj = 0;
      let x = 0;
      let y = 0;

      for (let k = 1; k <= data[0][1]; k++) {
        for (let z = 0; z < data[0][0]; z++) {
          if (data[k][z] === i) {
            pi = z;
          }

          if (data[k][z] === j) {
            pj = z;
          }
        }

        if (pi < pj) {
          count++;
        }
      }

      if (count === data[0][1]) {
        answer += 1;
        allCase.push([i, j]);
      }
    }
  }

  console.log(answer, allCase);
};

test([
  [4, 3],
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
]);
