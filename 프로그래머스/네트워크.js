function solution(n, computers) {
  //   let visited = Array.from(Array(n), () => new Array(n).fill(0));
  let answer = 0;

  const dfs = (node) => {
    for (let i = 0; i < n; i++) {
      if (computers[node][i] === 1) {
        computers[node][i] = 0;
        dfs(i);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (computers[i][j] === 1) {
        answer += 1;
        computers[i][j] = 0;
        computers[j][i] = 0;
        dfs(j);
      }
    }
  }

  console.log(answer);
}

solution(3, [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
]);
