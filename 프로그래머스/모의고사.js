function solution(answers) {
  let first = [1, 2, 3, 4, 5];
  let second = [2, 1, 2, 3, 2, 4, 2, 5];
  let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let answer = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (first[i % 5] === answers[i]) {
      answer[0] += 1;
    }
    if (second[i % 8] === answers[i]) {
      answer[1] += 1;
    }
    if (third[i % 10] === answers[i]) {
      answer[2] += 1;
    }
  }

  let maxNum = Math.max(...answer);

  let final = [];

  answer.forEach((el, idx) => {
    if (el === maxNum) {
      final.push(idx + 1);
    }
  });

  return final;
}
