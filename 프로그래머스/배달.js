// 모든 노드를 탐색하되 1번마을을 기준으로하여 노드의 가충치를 더해가며 연결 끝지점까지 더해나아간다.
// 한 노드에서 모든 노드 간의 가장 짧은 경로를 찾는 알고리즘 다익스트라를 사용했다.
// 문제는 이진트리가아닌 그래프이므로 인접행렬을 우선적으로 만들어야했다.

let init = [
  [1, 2, 1],
  [2, 3, 3],
  [5, 2, 2],
  [1, 4, 2],
  [5, 3, 1],
  [5, 4, 2],
];
let nodeNum = 5;
let deliverTime = 3;

//노드들은 시작이 1부터이므로 편하게 만들기위해서 1을 더해준 인접 행렬을 만든다.
let metrix = new Array(nodeNum + 1).fill(0);
//노드를 탐색 했는지 안했는지를 알기위해서 visited 를 만듬.
let visited = new Array(nodeNum + 1).fill(0);
let answer = 0;

for (let i = 0; i <= nodeNum; i++) {
  metrix[i] = new Array(nodeNum + 1).fill(0);
}

//간선들을 추가해준다.

for (let i = 0; i < init.length; i++) {
  let [from, to, value] = init[i];
  metrix[from][to] = value;
  metrix[to][from] = value;
}

let distance = metrix[1].slice(1);

// const dfs = (currentNode, value) => {
//   if (currentNode > nodeNum) {
//     return;
//   }

//   for (let i = 1; i <= nodeNum; i++) {
//     if (metrix[currentNode][i] && visited[i] === 0) {
//       visited[i] = 1;
//       metrix[currentNode][i] += value;
//       metrix[i][currentNode] = metrix[currentNode][i];
//       dfs(currentNode + 1, metrix[currentNode][i]);
//     }
//   }
// };

const shortestPath = (startNode) => {
  let queue = [];
  queue.push(startNode);
  visited[startNode] = 1;
  answer += 1;

  while (queue.length !== 0) {
    let current = queue.shift();

    for (let i = 1; i <= nodeNum; i++) {}
  }

  return answer;
};

shortestPath(1);

console.log(distance);

// dfs(1, 0);
