// 모든 노드를 탐색하되 1번마을을 기준으로하여 노드의 가충치를 더해가며 연결 끝지점까지 더해나아간다.
// 문제는 이진트리가아닌 그래프이므로 인접행렬을 우선적으로 만들어야한다.
// 1번 마을부터 타겟 시간을 구하기위해 간선에대한 가중치를 더해야 한다.
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

console.log(metrix);

// BFS 인접행렬을 만들어서 이용하면된다.
// 인접행렬인데 간선에대한 가중치가있으므로 가중치를 더하면될듯함

//distance 변수 거리의 가중치 , 거리의 가중치 중에서 가장 작은 거리리 값을 뺀다

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

let metrix = new Array(nodeNum + 1).fill(0).map(() => new Array(nodeNum + 1).fill(0));
let sptSet = new Array(nodeNum + 1).fill(0);
let distance = new Array(nodeNum + 1).fill(Number.MAX_VALUE);

init.forEach((el) => {
  let [from, to, value] = el;
  metrix[from][to] = value;
  metrix[to][from] = value;
});

function minDistance(dist, sptSet) {
  let min = Number.MAX_VALUE;
  let min_index = -1;

  for (let i = 1; i < nodeNum + 1; i++) {
    if (sptSet[i] === 0 && dist[i] < min) {
      min = dist[i];
      min_index = i;
    }
  }

  return min_index;
}

function shortPath(graph, start) {
  // Distance of source vertex from itself is always 0.
  distance[start] = 0;

  //find shortest index
  for (let i = 1; i < nodeNum + 1; i++) {
    let u = minDistance(distance, sptSet);

    sptSet[u] = 1;

    // for (let j = 1; j < nodeNum + 1; j++) {
    //   if (sptSet[j] === 0 && graph[u][j] !== 0 && distance[j] !== Number.MAX_VALUE && distance[u] + graph[u][j] < distance[j]) {
    //     distance[j] = distance[u] + graph[u][j];
    //   }
    // }

    console.log(sptSet);
  }
}

shortPath(metrix, 1);

//두번째 푸는 배달

function solution(N, road, K) {
  let visited = new Array(N).fill(false);
  let answer = new Array(N).fill(Infinity);

  let metrix = Array.from(new Array(N), () => new Array(N).fill(Infinity));

  road.forEach((el, idx) => {
    const [from, to, value] = el;
    metrix[from - 1][to - 1] = Math.min(metrix[from - 1][to - 1], value);
    metrix[to - 1][from - 1] = Math.min(metrix[to - 1][from - 1], value);
  });

  for (let i = 0; i < N; i++) {
    answer[i] = metrix[0][i];
  }

  visited[0] = true;
  answer[0] = 0;

  const smallest = () => {
    let min = Infinity;
    let minIdx = 0;

    answer.forEach((el, idx) => {
      if (visited[idx] === false && el <= min) {
        min = el;
        minIdx = idx;
      }
    });

    return minIdx;
  };

  const dijkstra = () => {
    answer.forEach((el, idx) => {
      let findMin = smallest();
      visited[findMin] = true;

      for (let i = 0; i < N; i++) {
        if (visited[i] === false) {
          if (metrix[findMin][i] + answer[findMin] < answer[i]) {
            answer[i] = metrix[findMin][i] + answer[findMin];
          }
        }
      }
    });
  };

  dijkstra();
  console.log(metrix, answer);
  let final = answer.filter((el) => el <= K);

  return final.length;
}
