//7개의 숫자가 주어지면 가장 작은수 출력하기
//Number.MAX_SAFE_INTEGER 가장 큰 정수 출력
// Max.min.apply(null,배열) 형태

const test = (smallest) => {
  console.log(Number.MAX_SAFE_INTEGER);
  console.log(Math.min(...smallest));
};

test([5, 3, 7, 11, 2, 15, 17]);
