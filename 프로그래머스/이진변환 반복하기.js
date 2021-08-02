//출력값은 이진수가 1이 될때까지 몇회가 걸렸으며 0을 몇번지웠는지 나타내야함.
// 모든 0을 체크하며 확인해야함. 0을 다지운 숫자의 배열의 이진수로 다시 바꿔야함. 첫째인덱스 횟수 둘째인덱스 0의 갯수

//1. 0이 몇개인지 찾아낸다.
//2. 0을 제거하고 1만 나타낸다.
//3. 길이가 몇인지 알아내어 다시 string 형태로 이진법으로 나타내고 전체횟수를 업데이트시킨다.
//4. 이진법이 1이 될때까지 1~3을 반복한다. while 을 사용하여 나태낼수있다.

function solution(s) {
  let answer = [0, 0];

  while (s.length !== 1) {
    //match 에서 만약 찾았을경우에는 0을 담은 배열을 반환하지만 그렇지 않을경우 || 을 사용하여 빈배열을 반환한다.
    let findZero = s.match(/0/g) || [];
    let findOne = s.match(/1/g);
    let decimal = findOne.join("").length;

    s = decimal.toString(2);

    answer[0] += 1;

    answer[1] += findZero.length;
  }

  return answer;
}

solution("01110");
