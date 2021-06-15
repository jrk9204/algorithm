let input = [5, ["4 1 5 2 3"], 5, ["1 3 7 9 5"]];

let arrayN = input[1].split(" ");
let arrayM = input[3].split(" ");
let listN = [];
let listM = [];

for (let i = 0; i < arrayN.length; i++) {
  listN.push(Number(arrayN[i]));
}

for (let i = 0; i < arrayM.length; i++) {
  listM.push(Number(arrayM[i]));
}

let result = [];
//오름차순정렬
listN.sort((a, b) => a - b);

for (let i = 0; i < listM.length; i++) {
  result.push(binarySearch(listN, listM[i]));
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
