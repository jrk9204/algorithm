//점프와 순간이동을해여 주어진 거리만큼 이동해야한다.
//점프는 k칸만큼할 수 있지만 배터리 소모량이 k만큼든다. 점프는 해당위치 *2만큼든다.
//배터리 소모량이 가장 적게 사용하여 주어진 거리에 이동해야한다.
//DP 다이나믹 프로그래밍은 이 전값을 계속해서 기억해나가면서 해결해 나아간다.
//분할 정복은 큰 문제를 작은 단위로 나눠 해결해 나아가는 방법이다.
//점프와 순간이동을 번갈아가며
// 최소한의 베터리를 사용하여 점프와 순간이동을 번갈아야 함으로 DFS를 이용하면된다.

function solution(n) {
  let answer = 0;
  const DFS = (curr, jump, teleport, shortest) => {
    if (curr >= n) {
      return;
    }
    console.log(curr);

    DFS(jump + 1, jump + 1, teleport, shortest);
    DFS(curr, jump, teleport * 2, shortest);
  };
  DFS(0, 0, 0, 0);
  //   console.log(answer);
}

solution(2);
