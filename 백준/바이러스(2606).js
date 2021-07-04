// 문제
// 신종 바이러스인 웜 바이러스는 네트워크를 통해 전파된다. 한 컴퓨터가 웜 바이러스에 걸리면 그 컴퓨터와 네트워크 상에서 연결되어 있는 모든 컴퓨터는 웜 바이러스에 걸리게 된다.
// 예를 들어 7대의 컴퓨터가 <그림 1>과 같이 네트워크 상에서 연결되어 있다고 하자. 1번 컴퓨터가 웜 바이러스에 걸리면 웜 바이러스는 2번과 5번 컴퓨터를 거쳐 3번과 6번 컴퓨터까지 전파되어 2, 3, 5, 6 네 대의 컴퓨터는 웜 바이러스에 걸리게 된다. 하지만 4번과 7번 컴퓨터는 1번 컴퓨터와 네트워크상에서 연결되어 있지 않기 때문에 영향을 받지 않는다.
// 어느 날 1번 컴퓨터가 웜 바이러스에 걸렸다. 컴퓨터의 수와 네트워크 상에서 서로 연결되어 있는 정보가 주어질 때, 1번 컴퓨터를 통해 웜 바이러스에 걸리게 되는 컴퓨터의 수를 출력하는 프로그램을 작성하시오.
// 입력
// 첫째 줄에는 컴퓨터의 수가 주어진다. 컴퓨터의 수는 100 이하이고 각 컴퓨터에는 1번 부터 차례대로 번호가 매겨진다. 둘째 줄에는 네트워크 상에서 직접 연결되어 있는 컴퓨터 쌍의 수가 주어진다. 이어서 그 수만큼 한 줄에 한 쌍씩 네트워크 상에서 직접 연결되어 있는 컴퓨터의 번호 쌍이 주어진다.

//문제 접근법 BFS를 이용하여 모든수를 탐색하려함. 그 이유는 BFS 가 탐색에 있어서는 DFS 보다 빠르다.

let answer = [];
let num = 7;
let node = [
  [1, 2],
  [2, 3],
  [1, 5],
  [5, 2],
  [5, 6],
  [4, 7],
];

let metrix = new Array(num + 1).fill(0);
let visited = new Array(num + 1).fill(0);

for (let i = 0; i < num + 1; i++) {
  metrix[i] = new Array(num + 1).fill(0);
}

for (let i = 0; i < node.length; i++) {
  let [from, to] = node[i];
  metrix[from][to] = 1;
  metrix[to][from] = 1;
}

//1번 컴퓨터가 바이러스 걸렸을때 바이러스가 걸리게 되는 컴터수
// const BFS = (startPoint) => {
//   let queue = [];
//   visited[startPoint] = 1;
//   queue.push(startPoint);

//   while (queue.length !== 0) {
//     let current = queue.shift();

//     for (let i = 1; i <= num; i++) {
//       if (metrix[current][i] === 1 && visited[i] === 0) {
//         visited[i] = 1;
//         queue.push(i);
//         answer.push(i);
//       }
//     }
//   }
// };

BFS(1);

console.log(answer.length);
