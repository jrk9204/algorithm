// const test = (sizeA, valueA, sizeB, valueB) => {
//   let commonSize = Math.min(sizeA, sizeB);
//   let sortedA = valueA.sort((a, b) => a - b);
//   let sortedB = valueB.sort((a, b) => a - b);

//   let answer = [];

//   for (let i = 0; i < commonSize; i++) {
//     if (sortedB.indexOf(sortedA[i]) !== -1) {
//       answer.push(sortedA[i]);
//     }
//   }

//   console.log(answer);
// };

// test(5, [1, 3, 9, 5, 2], 7, [3, 2, 5, 7, 8, 10, 9, 1]);

const test = (sizeA, valueA, sizeB, valueB) => {
  let sortedA = valueA.sort((a, b) => a - b);
  let sortedB = valueB.sort((a, b) => a - b);
  let answer = [];
  let currA = 0;
  let currB = 0;

  while (currA < sizeA - 1 && currB < sizeB - 1) {
    if (sortedA[currA] === sortedB[currB]) {
      answer.push(sortedA[currA]);
      currA += 1;
      currB += 1;
    } else if (sortedA[currA] < sortedB[currB]) {
      currA += 1;
    } else {
      currB == 1;
    }
  }

  console.log(answer);
};

test(5, [0, 1, 3, 9, 5, 2], 7, [3, 2, 5, 7, 8, 10, 9, 1, 0]);
