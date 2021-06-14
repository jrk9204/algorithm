//순열과는 다르게 중복된 값이 없어야함.
//선택되어진 숫자 뒤로 순회하고 앞으로는 다시 돌아오지 않음.
// 앞서 공부한 순열코드랑 비슷함.

let num = 4;
let size = 2;
let originArray = [];

for (let i = 1; i <= num; i++) {
  originArray.push(i);
}

//재귀함수를 쓰기위한 함수

function combination(originArray, size) {
  let result = [];

  //재귀함수 탈출조건
  if (size === 1) return originArray.map((el) => [el]);

  originArray.forEach((element, index, array) => {
    let pickNum = element;
    //순열에서는 이부분은 filter을 써서 foreach의 index 와 filter index 가 같지 않은 경우로 배열을 가져왔다.
    //그 이유는 중복을 허락하기때문에 해당인덱스를 제외하고
    //여기서 slice index를 쓴 이유는. 중복을 허락하지 않기때문에 숫자가 한번 선택되어지면 앞으로
    //다시 돌아갈 필요가 없다.
    let restArray = array.slice(index + 1);
    let recursion = combination(restArray, size - 1);
    let combine = recursion.map((el) => [pickNum, ...el]);

    result.push(...combine);
  });

  return result;
}

console.log(combination(originArray, size));
