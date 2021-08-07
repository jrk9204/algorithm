// 첫째 줄 N은 1이상 8이하의 숫자.
// 1부터 N까지의 모든 순열 사전순으로 출력
// 순열이 있는 배열에서 3개의 순열을 만드는 예시
// 하나의 숫자를 픽한다.
// 배열에서 하나를 픽한 숫자를 제외하고 나머지 숫자를 배열 형태로 만든다.
//하나의 숫자를 이미 픽했으므로 2개의 숫자만 픽하면됨. 독립적인 숫자의 배열이 나올때까지 반복
//(예시)
// [1,2,3,4] 의 배열이 있고 3개의 순열숫자를 뽑으려함.
// 첫번쨰 for each 에서 1을 픽한 나머지 arr  [2,3,4]
// 재귀 함수로 돌아감 탈출 조건문에 맞지 않으므로 [2,3,4] 는 다시 for each 문으로 돌아감
// [2,3,4] 에서 for each 문으로 2가 픽이되고 나머지 어레이는 [3,4]가 됨
// 다시 재귀 함수로 돌아가고 종료 조건문으로 [[3],[4]] 가 리턴됨
// 리턴이되어 다시 본 함수로 돌아오면 픽이 된 숫자는 2 므로 [[2,3],[2,4]]로 합쳐지고 리턴이됨
// [2,3,4] 에서 2가 픽이된 함수가 끝났으므로 이제는 3이 픽이되고 나머지 배열 [2,4]로 다시 반복됨
// [2,4] 는 [[2],[4]]가 되어지고 픽이되어진 숫자 3으로 [[3,2],[3,4]]가 되고 앞에서 리턴된
// 결과값에 더해짐
// 3이 종료되어 다시 [2,3,4] 로 돌아가고 [[2],[3]] 이된다.
// 이것 또한 역시 [[4,2],[4,3]]이 되어져 처음 스타트인 for each 문이 종료되는 동시에
// 처음에 픽했던 1이 합쳐진다.
// 처음 for each 문이 종료된 결과 === [[1,2,3],[1,2,4],[1,3,2],[1,3,4],[1,4,2],[1,4,3]]
// 이렇게 1부터 끝 숫자까지 반복하게된다.

// 숫자 3이들어옴
let number = 3;

//숫자 3을 1부터 3까지 배열형태로 만들어야함
let originArray = [];

for (let i = 1; i <= number; i++) {
  originArray.push(i);
}

//1부터 3까지 들어가있는 배열을 순열형태로 만들기 위해서 함수를 작성하고
//array 는 [1,2,3], selectNumber 은 3
function permutation(array, selectNumber) {
  //결과값을 반환하기 위한 변수
  let result = [];
  //종료조건 한개의 숫자가 픽이 될때까지 재귀함수를 돌고 조건에 만족하면 독립적인 숫자배열로 반환
  if (selectNumber === 1) {
    return array.map((el) => [el]);
  }
  //array 함수를 foreach로 순회

  array.forEach((element, index, tempArray) => {
    //선택되어진 숫자
    let pickNum = element;
    //선택되어진 숫자를 제외한 나머지 어래이 index 가 같지 않도록 필터링함
    //그 이유는 중복값없이 모든 경우의 수 를 뽑기위함.
    let restArray = tempArray.filter((el, idx) => index !== idx);
    // console.log(pickNum, restArray, selectNumber);

    //나머지 Array가 selectNumber 에 해당할때까지 재귀함수를 순회.
    //종료 조건을 탈출하면 더해져야함.
    let singleNumArr = permutation(restArray, selectNumber - 1);

    let combine = singleNumArr.map((el) => [pickNum, ...el]);
    console.log(singleNumArr, combine);

    //합쳐진 숫자를 결과값에 push한다. push할때 모든 결과값을 유지해야한다.
    result.push(...combine);
  });
  //foreach 문이 종료되면 result 값을 리턴.

  return result;
}

let final = permutation(originArray, number);

for (let i = 0; i < final.length; i++) {
  console.log(...final[i]);
}
