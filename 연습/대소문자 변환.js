const test = (str) => {
  let answer = "";
  for (let s of str) {
    if (s.charCodeAt() >= 60 && s.charCodeAt() <= 95) {
      answer += s.toLowerCase();
    } else {
      answer += s.toUpperCase();
    }
  }

  console.log(answer);
};

test("StuDY");
