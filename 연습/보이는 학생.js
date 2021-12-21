const test = (words) => {
  let answer = 0;
  let heighest = words[0];
  let arr = [];

  for (let i = 1; i < words.length; i++) {
    if (heighest < words[i]) {
      heighest = words[i];
      answer += 1;
      arr.push(words[i]);
    }
  }

  console.log(answer, arr);
};

test([130, 135, 148, 140, 145, 150, 150, 153]);
