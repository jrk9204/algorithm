//signs가 flase 일때는 음수를 나타냄으로
// forEach를 사용하여 해당 인덱스가 false인지 아닌지 판단하여
// 합을 구하면 됨

function solution(absolutes, signs) {
  signs.forEach((el, idx) => {
    if (el === false) {
      absolutes[idx] = -absolutes[idx];
    }
  });

  return absolutes.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}
