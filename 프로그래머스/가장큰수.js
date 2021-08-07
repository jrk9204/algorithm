//모든 경우의수를 순열을 사용하여 구함...
//하지만 시간 초과로 오류뜸.

function solution(numbers) {
  const permutation = (arr, size) => {
    let result = [];

    if (size === 1) return [arr];

    arr.forEach((el, mainIdx, origin) => {
      let pickNum = el;
      let restArr = origin.filter((el, subIdx) => mainIdx !== subIdx);
      let splitNum = permutation(restArr, size - 1);
      let combine = splitNum.map((el) => [pickNum, ...el]);
      result.push(...combine);
    });
    return result;
  };

  let result = permutation(numbers, numbers.length);
  let sortResult = result.map((el) => +el.join(""));
  sortResult.sort((a, b) => a - b);
  return sortResult[sortResult.length - 1] + "";
}
