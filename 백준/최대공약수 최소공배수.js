//2609번 최대공약수 최소공배수  LCM(least common Multiple) GCD (Greatest common Divisor)
//최대 공약수를 구하기 위해서는 숫자 2부터 두 수중 작은 수까지 두수를 모두 나눠준다.
// 두개의 숫자의 나머지가 모두 0일 경우에 리턴해주면 최대공약수이다. 유클리드 호제법을 이용하면 편함
// (a,b)가 있을때 (b,r) r은 a를 b로 나눈 나머지 이고 나머지가 0일때까지 반복하면
// b가 최대 공약수가 나온다.
// 최대 공약수를 구하면 최소 공배수는 구하기쉽다. 두수의 곱에서 최대 공약수를 나누면 최대공약수가 나옴.

// 문제
// 두 개의 자연수를 입력받아 최대 공약수와 최소 공배수를 출력하는 프로그램을 작성하시오.

let firstNum = "24";
let secondNum = "18";

let findGCD = function (firstNum, secondNum) {
  while (secondNum > 0) {
    let remainder = firstNum % secondNum;
    firstNum = secondNum;
    secondNum = remainder;
  }

  return firstNum;
};

let gcd = findGCD(firstNum, secondNum);

console.log(gcd);

//최소 공배수는 두수를 곱한후 최대 공약수를 나눠주면됨.
let lcm = (firstNum * secondNum) / gcd;
console.log(lcm);
