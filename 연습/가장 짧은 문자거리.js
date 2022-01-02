const test = (sentence, target) => {
  let answer = [];
  let size = sentence.split("").length;
  let findTarget = 0;
  let reverseTarget = 0;

  for (let i = 0; i < size; i++) {
    if (sentence[i] === target) {
      findTarget = 0;
    } else {
      findTarget += 1;
    }

    answer.push(findTarget);
  }

  for (let i = size - 1; 0 <= i; i--) {
    if (sentence[i] === target) {
      reverseTarget = 0;
    } else {
      reverseTarget += 1;
    }

    answer[i] = Math.min(reverseTarget, answer[i]);
  }

  console.log(answer);
};

test("teachermode", "e");
