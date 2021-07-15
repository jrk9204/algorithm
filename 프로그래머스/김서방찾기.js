//findIndex 와 Indexof 배열에서 찾을경우 인덱스를 그렇지 않을경우 -1
// find는 조건에 맞을 경우 해당 엘레멘트를 반환한다.

function solution(seoul) {
  let location = seoul.findIndex((el) => el === "Kim");

  return `김서방은 ${location}에 있다`;
}
