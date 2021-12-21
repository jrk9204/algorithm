const test = (a, b) => {
  let answer = [];

  for (let i = 0; i < a.length; i++) {
    if (Math.abs(a[i] - b[i]) === 1) {
      if (a[i] > b[i]) {
        answer.push("A");
      } else {
        answer.push("B");
      }
    } else if (Math.abs(a[i] - b[i]) === 2) {
      if (a[i] > b[i]) {
        answer.push("B");
      } else {
        answer.push("A");
      }
    } else {
      answer.push("D");
    }
  }

  console.log(answer);
};

test([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]);
