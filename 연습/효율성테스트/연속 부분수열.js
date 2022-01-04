//계속 더해가다가 만약 조건에 일치하지 않을경우 다시 돌아가서 계산을 한다.
// 투포인터 사용가능 두개의 포인터로 계속해서 트레킹한다.

const test = (size, targetSum, elements) => {
  let arr = [];
  let answer = 0;
  let leftIdx = 0;
  let rightIdx = 0;
  let sum = 0;

  while (rightIdx <= size) {
    if (sum === targetSum) {
      console.log(leftIdx, rightIdx);
      answer += 1;
    }
    if (sum >= targetSum) {
      sum -= elements[leftIdx];
      leftIdx += 1;
    } else {
      sum += elements[rightIdx];
      rightIdx += 1;
    }
  }

  console.log(answer);
};

test(9, 6, [1, 2, 1, 3, 1, 1, 1, 2, 2]);

// const test = (size, targetSum, elements) => {
//   let arr = [];
//   let answer = 0;
//   let leftIdx = 0;
//   let rightIdx = 0;
//   let sum = 0;

//   while (rightIdx < size - 1) {
//     if (sum === targetSum) {
//       answer += 1;
//       rightIdx += 1;
//     } else if (sum > targetSum) {
//       sum -= elements[leftIdx];
//       console.log(leftIdx, rightIdx);

//       leftIdx += 1;
//     } else {
//       sum += elements[rightIdx];
//       rightIdx += 1;
//     }
//   }

//   console.log(answer);
// };

// test(8, 6, [1, 2, 1, 3, 1, 1, 1, 2]);

// const test = (size, m, arr) => {
//   let answer = 0,
//     lt = 0,
//     sum = 0;
//   for (let rt = 0; rt < arr.length; rt++) {
//     sum += arr[rt];
//     if (sum === m) answer++;
//     while (sum >= m) {
//       sum -= arr[lt++];
//       if (sum === m) answer++;
//     }
//   }
//   console.log(answer);
// };

// test(8, 6, [1, 2, 1, 3, 1, 1, 1, 2]);
