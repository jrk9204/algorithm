//이분탐색 문제 예시 최소한의 값을 구하기 특정값 찾기

// n명이 입국심사를 위해 줄을 서서 기다리고 있습니다. 각 입국심사대에 있는 심사관마다 심사하는데 걸리는 시간은 다릅니다.

// 처음에 모든 심사대는 비어있습니다. 한 심사대에서는 동시에 한 명만 심사를 할 수 있습니다. 가장 앞에 서 있는 사람은 비어 있는 심사대로 가서 심사를 받을 수 있습니다. 하지만 더 빨리 끝나는 심사대가 있으면 기다렸다가 그곳으로 가서 심사를 받을 수도 있습니다.

// 모든 사람이 심사를 받는데 걸리는 시간을 최소로 하고 싶습니다.

// 입국심사를 기다리는 사람 수 n, 각 심사관이 한 명을 심사하는데 걸리는 시간이 담긴 배열 times가 매개변수로 주어질 때, 모든 사람이 심사를 받는데 걸리는 시간의 최솟값을 return 하도록 solution 함수를 작성해주세요.

function solution(n, times) {
  //답변을 위한 변수
  let answer = 0;
  // 이진탐색을 위하여 오른차순으로 정렬함.
  let sortRange = times.sort((a, b) => a - b);

  //시작지점을 1로 정함.
  let minTime = 1;
  //끝에 지점, 즉 최댓값 지정함.
  let maxTime = n * sortRange[sortRange.length - 1];

  //minTime 이 maxTime 랑 같아질때까지 구함
  while (minTime <= maxTime) {
    //중간지점에서부터 비교 시작함 (이진탐색)
    let middle = Math.floor((minTime + maxTime) / 2);

    // 중간값 시간 만큼 각 심사관들의 면접 시간동안 몇명을 심사할 수 있는지 구한다.
    let guessTime = sortRange.reduce(
      (acc, curr) => acc + Math.floor(middle / curr),
      0
    );

    // 위에서 구한 시간 값이 n명보다 크다면 시간을 max값을 중간값으로 지정
    // 그렇지 않다면 중간값을 크게 지정.
    if (n <= guessTime) {
      maxTime = middle - 1;
    } else {
      minTime = middle + 1;
    }
  }

  return minTime;
}
