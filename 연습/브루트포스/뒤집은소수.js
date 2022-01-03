const test = (numbers) => {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    let currNum = Number(numbers[i].toString().split("").reverse().join(""));
    let isPrimeNum = true;

    for (let j = 2; j <= parseInt(Math.sqrt(currNum)); j++) {
      if (currNum % j === 0) {
        isPrimeNum = false;
        break;
      }
    }

    if (isPrimeNum && currNum !== 1) {
      answer.push(currNum);
    }
  }

  console.log(answer);
};

test([32, 55, 62, 20, 250, 370, 200, 30, 100]);
