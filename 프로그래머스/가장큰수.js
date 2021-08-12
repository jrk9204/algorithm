//모든 경우의수를 구하기위하여 순열을 사용했으나 시간초과...
//문제 접근법은 순열을 사용하여 모든 경우의 수를 구하는 것이아니라 각 원소들의 정렬 후 모든 원소의 합이 가장 큰수이다.

function solution(numbers) {
  let sortNums = numbers
    .map((el) => el.toString())
    .sort((a, b) => (a + b > +b + a ? -1 : 1))
    .join("");

  return sortNums[0] === "0" ? "0" : sortNums;
}

//순열 이용
function solution(numbers) {
  const arr = numbers.map((el) => el.toString());

  const permutation = (arr, size) => {
    let result = [];

    if (size === 1) {
      return [arr];
    }

    arr.forEach((outEl, outIdx, origin) => {
      let pickNum = outEl;
      let restArr = origin.filter((inEl) => inEl !== outEl);
      let singleNum = permutation(restArr, size - 1);
      let combine = singleNum.map((el) => Number(pickNum + el));

      result.push(...combine);
    });

    return result;
  };

  let final = permutation(arr, arr.length);
  console.log(final);
}

solution([6, 10, 2]);
