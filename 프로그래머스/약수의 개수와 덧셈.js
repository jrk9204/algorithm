//left 수와 right 수가 주어질때
//left부터 right까지의 수의 약수를 구해야한다.
//약수가 짝수면 더하고 홀수면 빼야한다.

function solution(left, right) {
  let obj = {};
  let answer = 0;

  for (let i = 1; i <= right; i++) {
    let index = 0;
    for (let j = left; j <= right; j++) {
      if (!obj[j]) {
        obj[j] = 0;
      }
      if (j % i === 0) {
        obj[j] += 1;
      }

      index += 1;
    }
  }

  for (let key in obj) {
    if (obj[key] % 2 === 0) {
      answer += Number(key);
    } else {
      answer -= Number(key);
    }
  }
  console.log(answer);
}

solution(13, 17);
