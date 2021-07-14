function solution(dartResult) {
  let storeNums = [];
  let answer = [];
  let currentNum = "";

  for (let i = 0; i < dartResult.length; i++) {
    let current = dartResult[i];

    if (parseInt(current) || current === "0") {
      currentNum += dartResult[i];
    }
    if (current === "S") {
      storeNums.push(Number(currentNum));
      currentNum = "";
    } else if (current === "D") {
      storeNums.push(Math.pow(Number(currentNum), 2));
      currentNum = "";
    } else if (current === "T") {
      storeNums.push(Math.pow(Number(currentNum), 3));
      currentNum = "";
    }
    if (current === "*") {
      storeNums[Math.floor(i / 3) - 1] *= 2;
      storeNums[Math.floor(i / 3)] *= 2;
    } else if (current === "#") {
      storeNums[Math.floor(i / 3)] *= -1;
    }
  }
  console.log(storeNums);
  answer = storeNums.reduce((acc, curr) => {
    return acc + curr;
  });

  return answer;
}

solution("1D2S#10S");
