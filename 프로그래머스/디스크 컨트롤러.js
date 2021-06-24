//힙사용 문제
// 힙에는 max heap, min heap 이 있는데 max heap은 root node 가 최고값, min은 root node 가 최소값 을 갖고있다.
// 우선순위큐 === max heap, root node 가 우선 처리될 작업 1순위이다.
//[[0,3],[1,9],[2,6]]

//대기중인 큐

let jobs = [
  [0, 3],
  [1, 9],
  [2, 6],
];

jobs.sort((a, b) => a[0] - b[0]);

let time = 0;
let countJob = 0;
let answer = 0;

//우선순위 큐
let priorityQueue = [];

//모든 작업이 끝났을 경우
while (jobs.length !== 0 || priorityQueue.length !== 0) {
  if (jobs.length > countJob && time >= jobs[countJob][0]) {
    if (priorityQueue.length === 0) time = jobs[countJob][0];

    priorityQueue.push(jobs[countJob]);
    priorityQueue.sort((a, b) => a[1] - b[1]);
    jobs.shift();
  } else if (priorityQueue.length !== 0) {
    time += priorityQueue[0][1];
    answer += time - priorityQueue[0][0];
    priorityQueue.shift();
  }

  countJob += 1;
}

// time += priorityQueue[0][1];
// answer += time - priorityQueue[0][0];
console.log(answer);
