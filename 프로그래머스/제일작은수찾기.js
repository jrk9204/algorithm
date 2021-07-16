//문자를 찾기위해서 splice를 이용할 수 도 있음. splice(index,deleteCount,replace)

function solution(arr) {
  let minNum = Math.min(...arr);

  console.log(minNum);
  let answer = [];

  arr.forEach((el) => {
    if (el !== minNum) {
      answer.push(el);
    }
  });

  if (answer.length === 0) {
    return [-1];
  }

  return answer;
}

//splice를 사용 splice는 원래 arr의 인덱스를 제거함.

function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);

  if (arr.length === 0) {
    return [-1];
  }
  return arr;
}
