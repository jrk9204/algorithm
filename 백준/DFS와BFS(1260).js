// 문제
// 그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성하시오.
// 단, 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하고, 더 이상 방문할 수 있는 점이 없는 경우 종료한다.
// 정점 번호는 1번부터 N번까지이다.

// 입력
// 첫째 줄에 정점의 개수 N(1 ≤ N ≤ 1,000), 간선의 개수 M(1 ≤ M ≤ 10,000), 탐색을 시작할 정점의 번호 V가 주어진다.
// 다음 M개의 줄에는 간선이 연결하는 두 정점의 번호가 주어진다. 어떤 두 정점 사이에 여러 개의 간선이 있을 수 있다.
// 입력으로 주어지는 간선은 양방향이다.

// 출력
// 첫째 줄에 DFS를 수행한 결과를, 그 다음 줄에는 BFS를 수행한 결과를 출력한다. V부터 방문된 점을 순서대로 출력하면 된다.

//BFS  = Depth First Search 로 넓이 우선 (높이 우선이 아닌 층을 우선적으로 탐색한다, Queue를 주로 사용함).
//DFS = Breadth First Search 로 높이 우선 탐색이다. (backtracking / 스택 사용)
//DFS에는 In-order / pre-order/ post-order 세가지 출력방법이있다.
//order 순서는 root 노드 출력을 어디서 부터 하냐에 따라 다름.

let input = [4, 5, 1];
let node = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 4],
  [3, 4],
];

//인접노드 초기화 하기
let nodeNum = input[0] + 1;
let vertexNum = input[1];
let currentNode = input[2];

let metrix = new Array(nodeNum).fill(false);
let visitedDFS = new Array(nodeNum).fill(false);
let visitedBFS = new Array(nodeNum).fill(false);
let answerDFS = [];
let answerBFS = [];

for (let i = 0; i < nodeNum; i++) {
  metrix[i] = new Array(nodeNum).fill(false);
}

//간선 연결하기
for (let i = 0; i < node.length; i++) {
  metrix[node[i][0]][node[i][1]] = true;
}

//DFS 탐색하기

const DFS = (currentNode) => {
  visitedDFS[currentNode] = true;
  answerDFS.push(currentNode);

  for (let i = 1; i <= nodeNum; i++) {
    if (metrix[currentNode][i] === true && visitedDFS[i] === false) {
      DFS(i);
    }
  }
};

const BFS = (currentNode) => {
  console.log("CurrentNode =======>", currentNode);

  let queue = [];
  queue.push(currentNode);
  answerBFS.push(currentNode);
  visitedBFS[currentNode] = true;

  while (queue.length !== 0) {
    let current = queue.shift();

    for (let i = 1; i <= nodeNum; i++) {
      if (metrix[current][i] === true && visitedBFS[i] === false) {
        queue.push(i);
        answerBFS.push(i);
        visitedBFS[i] = true;
      }
    }
  }
};

DFS(currentNode);
BFS(currentNode);

console.log(...answerDFS);
console.log(...answerBFS);

// === 는 boolean 과 0,1 정확하게 구분함
