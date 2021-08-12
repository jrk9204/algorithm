//처음에는 이중 for문으로 작성을 했으나 최대 입력값이 50000 임으로 시간초과가 났다.
//문제 접근법은 보트에는 총 2명밖에 탈수 없으므로 제일 무게가 큰사람과 작은사람이 타면 된다.
//만약 큰사람과 작은사람의 합이 초과가 났을경우에는 큰사람을 혼자태우고 다음 큰사람과 비교를한다.

function solution(people, limit) {
  let answer = 0;

  people.sort((a, b) => b - a);

  let start = 0;
  let end = people.length - 1;

  while (start <= end) {
    let board = people[start] + people[end];

    if (board > limit) {
      start += 1;
    } else {
      start += 1;
      end -= 1;
    }
    answer += 1;
  }

  return answer;
}
