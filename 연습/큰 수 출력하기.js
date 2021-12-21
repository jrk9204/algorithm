const test = (words) => {
  let answer = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i - 1] < words[i]) {
      answer.push(words[i]);
    }
  }

  console.log(answer);
};

test([7, 3, 9, 5, 6, 12]);
