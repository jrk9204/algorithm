//인접 행렬은 그래프의 연결관계를 이차원배열로 나타내는 방식이다.
//노드간에 간선으로 이뤄져있다고 할수 있다.
// DFS는 스택,  BFS는 큐

let nodeSize = 4;
let nodeLine = 5;
let start = 1;

class GraphMatrix {
  constructor() {
    this.matrix = [];
  }

  addVertex(size) {
    this.matrix = new Array(size).fill(0);
    for (let i = 0; i < size; i++) {
      this.matrix[i] = new Array(size).fill(0);
    }
  }

  addEdge(from, to) {
    this.matrix[from - 1][to - 1] = 1;
    this.matrix[to - 1][from - 1] = 1;
  }

  display() {
    console.log(this.matrix);
  }
}

let newMatrix = new GraphMatrix();
newMatrix.addVertex(4);
newMatrix.addEdge(1, 2);
newMatrix.addEdge(1, 3);
newMatrix.addEdge(1, 4);
newMatrix.addEdge(2, 4);
newMatrix.addEdge(3, 4);
newMatrix.display();
