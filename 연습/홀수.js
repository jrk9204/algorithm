//홀수들의 합과 홀수값중의 최소값을 출력하라
// arr 사용할때 index 가 굳이 필요없다면 for(let el of arr) 이런형태로 사용하는게 편함.

const test = (data) => {
  let oddSum = 0;
  let minOdd = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 !== 0) {
      oddSum += data[i];

      if (minOdd > data[i]) {
        minOdd = data[i];
      }
    }
  }

  console.log(oddSum, minOdd);
};

test([12, 77, 38, 41, 53, 92, 85]);
