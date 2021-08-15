// 알파벳이 주어졌을때 알파벳 하나당 한번의 값어치를 줄수있고 최대값을 구해야한다.
// 값어치를 구하기위해서 각 자리수의 값어치를 계속해서 더해주며 가중치를 주어준다.

//예를들어 ABC BCA가 있을경우
// ABC는 A는 100의자리수 B는 10의자리수 C는 1의 자리수 임으로 100A 10B 1C 이다.
// BCA는 B는 100의자리수 C는 10의자리수 C는 1의 자리수 임으로 100B 10C 1A 이다.
//둘을 합하면 101A 110B 11C 이다. B의 값어치가 높으니까 9 그다음 A의 값어치가 높으니까 8 그다음 C는 7이다.
// 총 합을구하면 답이된다.

//자바스크립트 언어의 접근법은 알파벳의 오브젝트를 생성하여 키값이 있으면 가중치를 계속해서 더해간다.

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let alphabet = {};

input.slice(1).forEach((el) => {
  let size = 1;

  for (let i = el.length - 1; 0 >= i; --i) {
    if (alphabet[el[i]] === undefined) {
      alphabet[el[i]] = size;
    } else {
      alphabet[el[i]] += size;
    }

    size *= 10;
  }
});

let finalGroup = Object.entries(alphabet).sort((a, b) => b[1] - a[1]);

let values = 9;

let answer = finalGroup.reduce((acc, curr) => {
  let ExactVal = curr[1] * values;
  values -= 1;
  return acc + ExactVal;
}, 0);

console.log(answer);
