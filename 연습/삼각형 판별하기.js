//A,B,C 세 막대기로 삼각형을 만들 수 있 으면 Yes 아니면 NO 출력

//삼각형 조건 가장 긴변의 길이가 다른 두변의 길이의 합보다 작아야함.

const test = (data) => {
  let longestLine = 0;
  let sumTwoLine = 0;

  for (let i = 0; i < data.length; i++) {
    if (longestLine < data[i]) {
      longestLine = data[i];
    } else {
      sumTwoLine += longestLine;
    }
  }

  if (longestLine < sumTwoLine) {
    console.log("yes");
  } else {
    console.log("no");
  }
};

test([11, 7, 6]);
