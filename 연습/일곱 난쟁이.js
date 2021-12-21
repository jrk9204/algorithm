// 9명의 키가 주어졌을때 정확히 100이 되었을때 의 수를 출력해라.
//9개의 숫자가 100일경우를 찾아야한다.
//총 합에서 빼는 방법으로 해도 된다.
//splice 를 활용해서 arr 엘레먼트를 제거한다.

const test = (data) => {
  let answer = [];
  let sum = 0;

  sum = data.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  for (let i = 0; i < data.length - 1; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (sum - (data[i] + data[j]) === 100) {
        data.splice(i, 1);
        data.splice(j, 1);
        break;
      }
    }
  }

  console.log(data);
};

test([20, 7, 23, 19, 10, 15, 25, 8, 13]);
