function solution(progresses, speeds) {
  let answer = [];
  let count = 0;
  let working = 0;
  let day = 1;

  while (progresses[0]) {
    working = progresses[0] + speeds[0] * day;

    if (working >= 100) {
      count += 1;
      working = 0;
      progresses.shift();
      speeds.shift();
    } else {
      if (count > 0) {
        answer.push(count);
        count = 0;
      }

      day += 1;
    }
  }

  answer.push(count);

  return answer;
}
