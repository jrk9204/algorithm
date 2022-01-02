const test = (data) => {
  let maxSum = 0;
  let leftSum = 0;
  let rightCross = 0;

  for (let i = 0; i < data.length; i++) {
    let rowSum = 0;
    let columnSum = 0;

    for (let j = 0; j < data.length; j++) {
      rowSum += data[i][j];
      columnSum += data[j][i];
    }

    leftSum += data[i][i];
    rightCross += data[i][data.length - i - 1];
    maxSum = Math.max(maxSum, rowSum, columnSum);
  }

  maxSum = Math.max(maxSum, leftSum, rightCross);

  console.log(maxSum);
};

test([
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
]);
