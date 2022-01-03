//brute force 모든 경우의 수를 탐색함.

const test = (numbers) => {
  let answer = { sum: 0, num: 0 };

  for (let i = 0; i < numbers.length; i++) {
    let str = numbers[i]
      .toString()
      .split("")
      .reduce((a, b) => {
        return a + Number(b);
      }, 0);

    if (answer.sum <= str && answer.num <= numbers[i]) {
      answer.sum = str;
      answer.num = numbers[i];
    }
  }

  console.log(answer);
};

test([124, 460, 603, 40, 521, 134, 123, 235, 1234]);
