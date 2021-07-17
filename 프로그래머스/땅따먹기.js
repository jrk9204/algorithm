//이전의 인덱스를 저장하여 다음 행렬에 같은 인덱스가 저장되어지지 않도록 해야한다.
//같은 인덱스가 아니면서 큰수의 인덱스를 찾아서 더해간다.

function solution(land) {
  let trackingIdx = -1;
  let answer = land.reduce((acc, curr) => {
    let findGreatIdx = curr.indexOf(Math.max(...curr));
    if (trackingIdx !== findGreatIdx) {
      trackingIdx = findGreatIdx;
    } else {
      curr[findGreatIdx] = 0;
      trackingIdx = curr.indexOf(Math.max(...curr));
    }

    return acc + curr[trackingIdx];
  }, 0);

  console.log(answer);
}

solution([
  [
    [4, 3, 2, 1],
    [2, 2, 2, 1],
    [6, 6, 6, 4],
    [8, 7, 6, 5],
  ],
]);

function solution(land) {
  let trackingIdx = -1;
  let largestNum = -1;
  let answer = land.map((outterArr, arrIdx) => {
    if (land[outterArr + 1]) {
      outterArr.map((innerNum, numIdx) => {
        let findLargestNum = innerNum + land[arrIdx + 1][numIdx];
        if (largestNum <= findLargestNum && trackingIdx !== numIdx) {
          largestNum = innerNum;
          trackingIdx = numIdx;
        }
      });
      land[arrIdx + 1].map((el) => {
        el += largestNum;
      });
    }
  });
  console.log(answer);
}
solution([
  [4, 3, 2, 1],
  [2, 2, 2, 1],
  [6, 6, 6, 4],
  [8, 7, 6, 5],
]);

//이전의 인덱스를 저장하여 다음 행렬에 같은 인덱스가 저장되어지지 않도록 해야한다.
//같은 인덱스가 아니면서 큰수의 인덱스를 찾아서 더해간다.

function solution(land) {
  let size = land[0].length;
  let trackingIdx = -1;
  let largestNum = -1;

  land.forEach((outArr, arrIdx) => {
    if (land[arrIdx + 1]) {
      let largestIdx = outArr.indexOf(Math.max(...outArr));
      if (trackingIdx !== largestIdx) {
        trackingIdx = largestIdx;
      } else {
        outArr[largestIdx] = 0;
        trackingIdx = outArr.indexOf(Math.max(...outArr));
      }
      for (let i = 0; i < size; i++)
        if (land[arrIdx + 1]) {
          land[arrIdx + 1][i] += outArr[trackingIdx];
        }
    }
  });
  console.log(land);
  console.log(Math.max(...land[land.length - 1]));
}
solution([
  [4, 3, 2, 1],
  [2, 2, 2, 1],
  [6, 6, 6, 4],
  [8, 7, 6, 5],
]);
