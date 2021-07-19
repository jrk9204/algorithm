// charAt 은 문자열에서 숫자
//String.fromCharCod(); 숫자에서 string코드 찾기
//주어진 단어를 처음부터 끝까지 알파벳 단어장에서 탐색한다.
//만약 탐색하는 문자가 있을경우 인덱스를 출력하고 다음문자랑 더한 단어도 있는지 체크를 한다. 없을경우 단어장의 마지막에 추가해준다.

function solution(msg) {
  let library = [0];
  let answer = [];

  for (let i = "A".charCodeAt(); i <= "Z".charCodeAt(); i++) {
    library.push(String.fromCharCode(i));
  }

  while (msg.length !== 0) {
    let word = "";
    let nextWord = "";

    for (var i = 0; i < msg.length; i++) {
      word = msg.slice(0, i);
      nextWord = msg.slice(0, i + 1);

      if (library.indexOf(nextWord) === -1) {
        answer.push(library.indexOf(word));
        break;
      }

      if (i === msg.length - 1) {
        answer.push(library.indexOf(nextWord));
      }
    }

    library.push(nextWord);
    msg = msg.slice(i);
  }
  return answer;
}
solution("KAKAO");
