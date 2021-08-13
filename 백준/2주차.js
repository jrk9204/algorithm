//코딩하는데 너무 많은 시간이 걸림
//다른사람의 코드를 보며 줄일필요가있음

function solution(scores) {
  let metrix = Array.from(new Array(scores.length), () => new Array(scores.length).fill(0));
  let size = scores.length;
  let average = [];

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      metrix[i][j] = scores[j][i];
    }
  }

  let allScores = metrix.map((el, idx) => {
    let findMax = Math.max(...metrix[idx]);
    let findMaxIdx = metrix[idx].indexOf(findMax);

    let findMin = Math.min(...metrix[idx]);
    let findMinIdx = metrix[idx].indexOf(findMin);

    return el.map((innerEl, innerIdx, arr) => {
      let isUnique = false;
      let copyArr = arr.slice(0);
      let secondLarge = 0;
      let secondSmall = 0;

      if (innerEl === findMax && idx === findMaxIdx) {
        copyArr.splice(findMaxIdx, 1);
        secondLarge = Math.max(...copyArr);

        if (secondLarge === findMax) {
          return innerEl;
        } else {
          return 0;
        }
      } else if (innerEl === findMin && idx === findMinIdx) {
        copyArr.splice(findMinIdx, 1);
        secondSmall = Math.min(...copyArr);

        if (secondSmall === findMin) {
          return innerEl;
        } else {
          return 0;
        }
      } else return innerEl;
    });
  });

  allScores.forEach((el, idx) => {
    let findSize = 0;

    let total = el.reduce((acc, curr) => {
      if (curr === 0) findSize += 1;
      return acc + curr;
    }, 0);

    let totalSize = el.length - findSize;
    average[idx] = total / totalSize;
  });

  let answer = "";

  average.forEach((el) => {
    if (el >= 90) {
      answer += "A";
    } else if (80 <= el && el < 90) {
      answer += "B";
    } else if (70 <= el && el < 80) {
      answer += "C";
    } else if (50 <= el && el < 70) {
      answer += "D";
    } else {
      answer += "F";
    }
  });

  return answer;
}
