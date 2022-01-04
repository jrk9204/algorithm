const test = (info, data) => {
  let dataSize = info[0];
  let slidSize = info[1];

  let rightP = 0;
  let sum = 0;
  let answer = 0;

  for (let i = 0; i < slidSize; i++) {
    sum += data[i];
  }

  answer = sum;

  for (let i = slidSize; i < dataSize; i++) {
    sum = sum - data[i - slidSize] + data[i];

    answer = Math.max(answer, sum);
  }

  console.log(answer);
};

test([10, 3], [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]);

// const test = (info, data) => {
//   let dataSize = info[0];
//   let slidSize = info[1];

//   let rightP = 0;
//   let answer = 0;

//   for (let i = 0; i < dataSize - 2; i++) {
//     let currData = data[i] + data[i + 1] + data[i + 2];

//     if (answer < currData) {
//       answer = currData;
//     }
//   }

//   console.log(answer);
// };

// test([10, 3], [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]);
