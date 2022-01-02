const test = (sentence) => {
  let answer = "";
  let size = sentence.length - 1;
  let count = 1;

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === sentence[i + 1]) {
      count += 1;
    } else {
      if (count === 1) {
        answer += sentence[i];
      } else {
        answer += sentence[i] + count;
      }
      count = 1;
    }
  }

  console.log(answer);
};

test("KKHSSSSSSSE", "e");
