//한개의 문자열에서 대문자가 몇개있는지 알아내기
//아스키 코드로도 가능 charCodeAt() 으로 대문자 60~95 숫자 찾기 가능

const test = (str) => {
  const answer = str.split(/[A-Z]/g)-1;

  console.log(answer);
};

test("KoreaTimeGood");
