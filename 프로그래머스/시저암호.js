//fromCharCode 아스키코드에서 알파벳으로 문자열.fromCharCode("인덱스번호")
//charCodeAt 은 알파벳에서 숫자로
function solution(s, n) {
  let findChar = s.split("");

  let answer = findChar.map((el) => {
    if (el === " ") {
      return el;
    }

    let lowerOrUpper = el.charCodeAt() >= 65 && el.charCodeAt() <= 90 ? "upper" : "lower";

    if (lowerOrUpper === "upper") {
      let changeStr = el.charCodeAt() + n;

      if (changeStr > 90) {
        changeStr -= 26;
      }
      return String.fromCharCode(changeStr);
    } else {
      let changeStr = el.charCodeAt() + n;

      if (changeStr > 122) {
        changeStr -= 26;
      }

      return String.fromCharCode(changeStr);
    }
  });

  return answer.join("");
}
solution("z", 1);
