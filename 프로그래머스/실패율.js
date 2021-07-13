//객체를 생성한 이유는 키에는 스테이지 값에는 인원수가 필요하다.
// 객체를 생성해서 전체인원숫자와 각스테이를 생성한다.
// 전체 인원숫자는 각 스테이지에 몇명의 사용자가 도전한지 계산하기 위함이다.
// 각스테이지의 사람의 숫자 그리고 해당 스테이의 실패율을 담을수 있는 배열을 생성한다.

function solution(N, stages) {
  let filterObj = [];
  let answer = [];
  let obj = { total: stages.length };
  let sortedStages = stages.sort((a, b) => a - b);

  for (let i = 1; i <= N + 1; i++) {
    obj[i] = [0, 0];
  }

  sortedStages.forEach((el, idx) => {
    obj[el][0] += 1;
  });

  for (let key in obj) {
    if (obj[key][1] === 0) {
      if (obj[key][0] === 0 && obj["total"] === 0) {
        obj[key][1] = 0;
      } else {
        obj[key][1] = (obj[key][0] / obj["total"]).toFixed(4);
      }
      filterObj.push([key, obj[key][1]]);
      filterObj.sort((a, b) => b[1] - a[1]);
      obj["total"] -= obj[key][0];
    }
  }
  filterObj.forEach((el) => {
    if (Number(el[0]) <= N) {
      answer.push(Number(el[0]));
    }
  });

  console.log(answer);
  return answer;
}
solution(6, [2, 1, 2, 6, 2, 4, 3, 3]);

function solution(N, stages) {
  let answer = [];
  let final = [];
  let size = stages.length;
  let sortedStages = stages.sort((a, b) => a - b);

  for (let i = 1; i <= N; i++) {
    answer.push({ stage: i, people: 0, ratio: 0 });
  }
  stages.forEach((el, idx) => {
    if (el <= N) answer[el - 1]["people"] += 1;
  });

  answer.forEach((el) => {
    el.ratio = (el.people / size).toFixed(4);
    answer.sort((a, b) => b.ratio - a.ratio);
    size -= el.people;
  });
  console.log(answer);
  answer.forEach((el) => {
    final.push(el.stage);
  });

  console.log(final);
  return answer;
}
