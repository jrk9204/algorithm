//날짜의 일의자리와 자동차 번호판의 일의자리가 같은것을 찾아라
// 입력 날짜의 일의자리와 자동차의 끝 두자리가 주어짐

const test = (date, data) => {
  let answer = 0;

  for (let el of data) {
    let compareNum = el % 10;

    if (date === compareNum) {
      answer += 1;
    }
  }

  console.log(answer);
};

test(3, [25, 23, 11, 47, 53, 17, 33]);
