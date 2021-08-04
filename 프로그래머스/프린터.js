//인덱스를 사용하여 큐를 사용함.
//priority 에 2,1,3,2 가 있을때 해당 중요도는 인덱스 0,1,2,3 에 해당함.
//location 이 2일경우 해당인덱스 숫자 3을 프린트하면됨.
//priority를 빼와서 해당 숫자가 제일큰지 안큰지 확인함 만약 더큰숫자가 있을경우
//priority의 맨뒤에 넣는다. 만약 더큰 숫자가 없을경우 queue 배열에 넣는다.

function solution(priorities, location) {
  let queue = [];
  let answer = 0;

  for (let i = 0; i < priorities.length; i++) {
    priorities[i] = [priorities[i], i];
  }

  while (priorities.length !== 0) {
    let curr = priorities.shift();
    let findLarge = false;

    for (let i = 0; i < priorities.length; i++) {
      if (curr[0] < priorities[i][0]) {
        priorities.push(curr);
        findLarge = true;
        break;
      }
    }

    if (findLarge === false) queue.push(curr);
  }

  queue.forEach((el, idx) => {
    if (el[1] === location) answer = idx;
  });

  console.log(answer);

  return answer;
}

solution([2, 1, 3, 2], 2);
