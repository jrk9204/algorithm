//array [2,6,8,14] 가 들어왔다고 가정

//최대 공약수는 두수의 최대 공약수 결과값을 연달아 비교해서 구하면됨.
//최소 공배수는 이전에 구했던 최소 공배수의 최대 공약수를 연달아 구하면됨.
// 2와 6의 최대 공약수는 2
//최대 공약수는 2*6 /최대 공약수 그러므로 6이나옴
//2,6 비교했고 최대공약수는 2 므로 [2,8,14] 를 비교하면됨.
//2와 8의 최대 공약수는 2이다. 최소공배수는 이전에 구했던 최소공배수인 6 이랑 8의 최소공약수를 구하고
//구한 값의 이전처럼 최대 공약수를 구하면됨.
//6*8 =48 이고 48/2 = 24이다.

function findGCD(first, second) {
  while (first > 0) {
    let remainder = second % first;
    second = first;
    first = remainder;
  }

  return second;
}

function solution(arr) {
  let gcd = arr[0];
  let lcm = arr[0];

  for (let i = 1; i < arr.length; i++) {
    gcd = findGCD(gcd, arr[i]);
    lcm = (lcm * arr[i]) / findGCD(lcm, arr[i]);
  }

  return lcm;
}
