//소문자 문자열에서 가운데 문자 출력, 짝수일경우 2개의 문자열 출력

//문자열 자르기는 substring 과 substr

const test = (str) => {
  let answer = "";

  if (str.length % 2 === 0) {
    answer += str[parseInt(str.length / 2) - 1];
    answer += str[parseInt(str.length / 2)];
  } else {
    answer += str[parseInt(str.length / 2)];
  }

  console.log(answer);
};

test("length");
