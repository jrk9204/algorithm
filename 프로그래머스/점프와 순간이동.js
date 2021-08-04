//점프와 순간이동을해여 주어진 거리만큼 이동해야한다.
//점프는 k칸만큼할 수 있지만 배터리 소모량이 k만큼든다. 점프는 해당위치 *2만큼든다.
//배터리 소모량이 가장 적게 사용하여 주어진 거리에 이동해야한다.

//DFS 를 사용해봤지만 제한사항이 N이 1이상 10억 이하의 자연수임으로 시간초과가남.
//수학적으로 해결해봐야하는 문제..
//어떠한 정수간에 2로 나눈 값이 0 또는 1이다. 주어진 거리에서 2로 나눴을때 나머지가 1인경우가 최소한의 에너지를 사용한 값이다.
//따라서 모든 나머지를 더해주면 최소한의 에너지를 사용한 값이 나온다.

function solution(n) {
  let answer = 1;

  while (parseInt(n / 2) !== 0) {
    answer += n % 2;

    n = parseInt(n / 2);
  }

  return answer;
}

function solution(n) {
  let answer = 9999999999;
  const DFS = (curr, useEnergy) => {
    if (curr >= n) {
      if (curr === n && useEnergy < answer) {
        answer = useEnergy;
      }

      return;
    }
    DFS(curr + 1, useEnergy + 1);
    DFS(curr * 2, useEnergy);
  };

  DFS(1, 1);
  console.log(answer);
}

solution(5000);
