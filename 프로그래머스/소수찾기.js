//완전탐색 모든경우의 수를 찾아야한다.
//완전탐색을 하기위해서는 재귀함수를 이용해야한다.

function solution(numbers) {
  const permutation = (arr, size) => {
    let result = [];

    if (size === 1) return [arr];

    arr.forEach((el, mainIdx, origin) => {
      let pickNum = el;
      let restArr = origin.filter((el, subIdx) => mainIdx !== subIdx);
      let splitNum = permutation(restArr, size - 1);
      let combine = splitNum.map((el) => [pickNum, ...el]);
      console.log(splitNum, combine);
      result.push(...combine);
    });
    return result;
  };

  let result = permutation(numbers, numbers.length);
  // console.log(result);
}

solution([1, 7, 3, 4]);
