const test = (data) => {
  let answer = data.slice();
  let answerSum = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === 1 && data[i - 1] === 1) {
      answer[i] += answer[i - 1];
    }
  }

  answerSum = answer.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  console.log(answerSum);
};

test([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]);
