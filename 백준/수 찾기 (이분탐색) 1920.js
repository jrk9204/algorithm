//Binary Search === 이진탐색
// 오른차순으로 정렬되어진 자료를 반으로 쪼개나아가며 탐색함
//Time Complexity  = O(logN)
//Insert Sort , bubble sort, selection sort 는 모드 O(n^2)의 복잡도를 갖고있다(비효율)

let size = 5;

let num1 = [4, 6, 7, 2, 0, 1];
let num2 = [1, 3, 7, 9, 5];
let result = [];
//오름차순정렬
num1.sort((a, b) => a - b);
num2.sort((a, b) => a - b);

// [1,2,3,4,5]

// for (let i = 0; i < num2.length; i++) {
//   result.push(readyForSearching(num2[i]));
// }

// function readyForSearching(targetNum) {

//     function binarySearch (first,mid,end,array){

//     }

// }
let targetNum = 2;

function binarySearch(array, targetNum) {
  let first = 0;
  let end = array.length - 1;

  while (first <= end) {
    let mid = Math.round((first + end) / 2);

    if (targetNum === array[mid]) {
      console.log(targetNum);
    } else if (targetNum < array[mid]) {
      end = mid;
    } else {
      first = mid;
    }
  }
}

binarySearch(num1, targetNum);
