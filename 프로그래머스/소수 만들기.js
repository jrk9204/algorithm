//3개의 수를 순서없이 찾아야하므로 조합을 사용하면 된다.

const combination = (dinamicArr, size) => {
  let arr = [];

  if (size === 1) {
    return dinamicArr.map((el) => [el]);
  }

  dinamicArr.forEach((element, index, originArr) => {
    let spliceArr = originArr.slice(index + 1);
    let restEle = combination(spliceArr, size - 1);
    let combin = restEle.map((el) => [element, ...el]);
    arr.push(...combin);
  });

  return arr;
};

function solution(nums) {
  let filterArr = combination(nums, 3);
  let answer = 0;
  let reduceArr = filterArr.map((el) => {
    return el.reduce((arr, curr) => {
      return arr + curr;
    }, 0);
  });

  console.log(reduceArr);

  let findNum = reduceArr.filter((el) => {
    let result = true;
    for (let i = 2; i <= Math.floor(Math.sqrt(el)); i++) {
      if (el % i === 0) {
        result = false;
        break;
      }
    }

    return result === true;
  });

  console.log(findNum.length);
}

solution([1, 2, 7, 6, 4]);
