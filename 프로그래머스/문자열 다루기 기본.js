//문자열에 숫자가 포함되어있는지 확인하기위해 정규표현식 사용.
//문자열의 길이가 4또는 6 이며 시작부터 끝까지 숫자일경우 true
//그렇지 않을경우 false;
function solution(s) {
  let answer = s.match(/^\d{6}$|^\d{4}$/);

  return answer === null ? false : true;
}
