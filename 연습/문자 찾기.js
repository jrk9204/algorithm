//한개의 문자를 받고 문자열에 해당 문자가 몇개 있는지 찾으시오.

//문제 접근법은 for 문을 돌려 전체 str 에서 word 가 몇개인지 찾는것.
//split 을 활용해서 나눠지는 문법을 기준으로 숫자를 카운트한다.
//split 에서 마지막 문자를 split 할때 마지막으로 나눠지는 것은 빈 문자열이다. ''

// 두번째는 정규표현식을

const test = (str, word) => {
  let answer = str.split(word).length - 1;
  console.log(answer);
};

test("COMPUTERPROGRAMMINGR", "R");
