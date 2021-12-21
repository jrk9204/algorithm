//문자열을 모두 대문자로 통일하여 출력해라

//아스키 소문자 대문자 사용하여 가능

const test = (str) => {
  let ans = "";

  for (let word of str) {
    ans += word.toUpperCase();
  }

  console.log(ans);
};

test("ItisTimeToStudy");
