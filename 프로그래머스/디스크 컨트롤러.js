//힙사용 문제
// 힙에는 max heap, min heap 이 있는데 max heap은 root node 가 최고값, min은 root node 가 최소값 을 갖고있다.
// 우선순위큐 === max heap, root node 가 우선 처리될 작업 1순위이다. 자바스크립트에서는 힙이 정의되어있지않아 while로 해결..
//[[0,3],[1,9],[2,6]]

let jobs = [
  [2, 6],
  [0, 3],
  [1, 9],
];

//작업을 수행하고 있지 않을때는 먼저 들어온요청을 작업해야함으로 jobs에서 요청시간순으로 정렬한다.
jobs.sort((a, b) => a[0] - b[0]);

//작업에대한 시간, 작업이 끝난 갯수, 작업들의 시간들의 총합, priority queue를 위한 배열을 선언하고 초기화시킨다.
let time = 0;
let countJob = 0;
let answer = 0;
let priorityQueue = [];

//요청 들어온 순으로 정렬한다.

//while 은 false값을 갖을때 종료된다. 두가지의 조건을 더해줬는데
//첫번째, 예시로 [[0,3],[2,6],[1,9]] 가 있을때 [0,3]이 먼저 실행되고 작업이 끝나는 시점 3초동안
//[2,6]과 [1,9] 가 대기큐로 들어오는데 jobs에 있는 모든 작업이 대기큐로 들어오기전까지 순회해야하기때문
// 두번째, priority Queue에 있는 모든 작업들이 끝날때까지 돌아야하기때문에 두가지 조건을 같이 달아줬다.

while (countJob < jobs.length || priorityQueue.length !== 0) {
  // 시간을 0으로 초기화했고 처음 [0,3]이 들어온다 3초가 끝나기전에
  //[2,6]과 [1,9]도 대기큐에 들어와야한다. 들어온 작업들을 if문에서 정렬후 다른 조건들을 거치지않고 continue로 계속해서 탐색한다.
  if (countJob < jobs.length && time >= jobs[0][0]) {
    priorityQueue.push(jobs[countJob]);
    priorityQueue.sort((a, b) => a[1] - b[1]);
    countJob += 1;
    continue;
  }

  //대기큐에 모두 다 들어와서 들어온 대기큐들을 하나씩 계산하고 빼줘야한다.
  if (priorityQueue.length !== 0) {
    time += priorityQueue[0][1];
    answer += time - priorityQueue[0][0];
    priorityQueue.shift();
  } else {
    time = jobs[countJob][0];
  }
}

//모든 작업 시간들은 answer에 더해졌으므로 jobs.length로 나눠준다

console.log(answer / jobs.length);
