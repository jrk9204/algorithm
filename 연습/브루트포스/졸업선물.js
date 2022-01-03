//BRUTE FORCE   모든 경우의 수를 구하고 비교한다.

//모든경우의수 이고 정렬후 카운팅한다.

const test = (totalPrice, data) => {
  let answer = 0;
  let track = [];

  let sortedData = data.sort((a, b) => {
    return a[0] - b[0];
  });

  for (let i = 0; i < data.length; i++) {
    let currPrice = sortedData[i][0] / 2 + sortedData[i][1];
    let stack = [data[i]];

    for (let j = 0; j < data.length; j++) {
      if (
        i !== j &&
        currPrice + sortedData[j][0] + sortedData[j][1] > totalPrice
      ) {
        break;
      }
      if (
        i !== j &&
        currPrice + sortedData[j][0] + sortedData[j][1] <= totalPrice
      ) {
        currPrice += sortedData[j][0] + sortedData[j][1];
        stack.push(data[j]);
      }
    }
    track = stack;
    answer = currPrice;
  }

  console.log("answer", answer, track);
};

test(28, [
  [6, 6],
  [2, 2],
  [4, 3],
  [10, 3],
  [4, 5],
]);
