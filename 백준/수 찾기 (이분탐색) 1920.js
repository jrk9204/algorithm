//Binary Search === 이진탐색
// 오른차순으로 정렬되어진 자료를 반으로 쪼개나아가며 탐색함
//Time Complexity  = O(logN)
//Insert Sort , bubble sort, selection sort 는 모드 O(n^2)의 복잡도를 갖고있다(비효율)

let size = 5;

let num1 = [4, 1, 5, 2, 3];
let num2 = [1, 3, 7];
let result = [];
//오름차순정렬
num1.sort((a, b) => a - b);

for (let i = 0; i < num2.length; i++) {
  result.push(binarySearch(num1, num2[i]));
}

function binarySearch(array, targetNum) {
  let findResult = 0;
  let first = 0;
  let last = array.length - 1;

  while (first <= last) {
    let mid = Math.round((first + last) / 2);

    if (targetNum === array[mid]) {
      findResult = 1;
      return findResult;
    } else if (targetNum < array[mid]) {
      last = mid - 1;
    } else {
      first = mid + 1;
    }
  }

  return findResult;
}

for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}

// function binarySearch(array, targetNum) {
//   let findNum = false;
//   let first = 0;
//   let end = array.length - 1;

//   while (first <= end) {
//     let mid = Math.round((first + end) / 2);

//     if (targetNum === array[mid]) {
//       findNum = true;
//       return findNum;
//     } else if (targetNum < array[mid]) {
//       end = mid - 1;
//     } else {
//       first = mid + 1;
//     }
//   }

//   return findNum;
// }
