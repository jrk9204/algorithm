//정규표현식 사용. match를 사용했는데 만약 못찾을경우 null을 리턴한다.
//그렇지않을경우 찾은 문자를 배열형태로 담아서 반환해준다.

function solution(s) {
  let findP = s.match(/[p?P?]/g);
  let findY = s.match(/[y?Y?]/g);

  if (findP === null || findY === null) {
    return false;
  }

  return findP.length === findY.length ? true : false;
}
