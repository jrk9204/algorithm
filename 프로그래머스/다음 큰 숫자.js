//10진수를 2진수로 바꾸기 위해서 2로 나눈 값이 0일때까지
// 자바스크립트 toString을 사용하면 2진수 16진수등 바꾸기쉽다.
// ex (8).toString(2) = "1000"

let findOne = (num) => {
  let countOne = 0;

  while (num / 2 !== 0) {
    if (num % 2 === 1) countOne += 1;
    num = parseInt(num / 2);
  }

  return countOne;
};

function solution(n) {
  let countOriginOne = 0;
  let countCopyOne = 0;
  let findNum = n + 1;
  countOriginOne = findOne(n);

  while (countOriginOne !== countCopyOne) {
    countCopyOne = findOne(findNum);
    findNum += 1;
  }

  console.log(findNum - 1);
}

solution(8);
