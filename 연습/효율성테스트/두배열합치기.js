// const test = (a, b) => {
//   let combine = [...new Set(a.concat(b))];

//   combine.sort((a, b) => a - b);
//   console.log(combine);
// };

// test([1, 3, 5], [2, 3, 6, 7, 9]);

const test = (a, b) => {
  let answer = [];

  let sizeA = a.length;
  let sizeB = b.length;

  let currA = 0;
  let currB = 0;

  while (currA < sizeA && currB < sizeB) {
    if (a[currA] <= b[currB]) {
      answer.push(a[currA]);
      currA += 1;
    } else {
      answer.push(b[currB]);
      currB += 1;
    }
  }

  while (currA < sizeA) {
    answer.push(a[currA]);
    currA += 1;
  }

  while (currB < sizeB) {
    answer.push(b[currB]);
    currB += 1;
  }

  console.log(answer);
};

test([1, 3, 5], [2, 3, 6, 7, 9, 2]);

// const test = (arr1, arr2) => {
//   let answer = [];
//   let n = arr1.length;
//   let m = arr2.length;
//   let p1 = (p2 = 0);
//   while (p1 < n && p2 < m) {
//     if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
//     else answer.push(arr2[p2++]);
//   }
//   while (p1 < n) answer.push(arr1[p1++]);
//   while (p2 < m) answer.push(arr2[p2++]);
//   console.log(answer);
// };

// test([1, 3, 5], [3, 6, 7, 9, 2]);
