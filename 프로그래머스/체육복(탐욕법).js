function solution(n, lost, reserve) {
  let studentNum = new Array(n).fill(1);
  let count = 0;
  let answer = 0;

  lost.map((el) => {
    studentNum[el - 1] = 0;
  });
  reserve.map((el) => {
    studentNum[el - 1] += 1;
  });

  console.log(studentNum);
  while (count < n) {
    if (studentNum[count] === 0) {
      if (studentNum[count - 1] === 2) {
        studentNum[count] = 1;
        studentNum[count - 1] = 1;
      } else if (studentNum[count + 1] === 2) {
        studentNum[count] = 1;
        studentNum[count + 1] = 1;
      }
    }
    count += 1;
  }

  studentNum.forEach((el) => {
    if (el !== 0) answer += 1;
  });

  console.log(answer);
}

solution(3, [3], [1]);
