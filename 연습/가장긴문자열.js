// N 개의 문자열이 입력 될때 가장 긴 문자열 찾기

const test = (data) => {
  let longest = "";

  for (let str of data) {
    if (longest.length < str.length) {
      longest = str;
    }
  }

  console.log(longest);
};

test(["teacher", "time", "student", "beautiful", "good"]);
