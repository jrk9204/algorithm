const test = (size, targetSum, elements) => {
  let answer = 0;
  let sum = 0;
  let leftP = 0;
  let rightP = 0;

  for (let i = 0; i < size; i++) {
    sum += elements[i];

    if (sum <= targetSum) {
      answer += i - leftP + 1;
    }

    while (sum > targetSum) {
      sum -= elements[leftP];
      leftP += 1;

      if (sum <= targetSum) {
        answer += i - leftP + 1;
      }
    }
  }

  console.log(answer);
};

test(5, 5, [1, 3, 1, 2, 3]);
