//최대한 많은 부서의 예산을 맞춰야함으로 오른차순으로 정렬을한다.
//정렬한 것을 인덱스 순서대로 더해간다
// 예산을 넘어가거나 정확하게 맞을경우 해당인덱스을 리턴해준다.
//while을 사용했음으로 해당인덱스에서 -1해준다.

function solution(d, budget) {
  let sortedArr = d.sort((a, b) => a - b);
  let count = 0;
  let index = 0;

  while (count <= budget) {
    console.log(index);
    count += sortedArr[index];
    index += 1;
  }

  console.log(index - 1);
}

solution([2, 2, 3, 3], 10);
