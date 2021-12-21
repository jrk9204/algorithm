//세수를 입력받아 가장 작은 값 출력 정렬사용 x

const findNum = (a, b, c) => {
  let arr = [a, b, c];
  let answer = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (answer > arr[i]) answer = arr[i];
  }

  console.log(answer);
};

findNum(2, -1, 100);
