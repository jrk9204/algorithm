//모든 학생은 처음에 1개의 체육복을 갖고있으므로 n개의 배열을 1 로 초기화하여 만든다.
// n개의 인덱스를 갖은 배열에서 도난당한 학생의 index 는 0으로 만들고
// 여벌의 체육복의 학생의 index는 +1을 해준다
// n개의 인덱스를 갖은 배열에서 도난당한 학생일경우 (0)
// 앞의 학생의 체육복의 갯수가 2개인지 확인하고 맞을경우
// 앞의 학생의 체육복과 도난당한 학생의 인덱스가 1로 바뀐다.
// 만약 앞의 학생의 체육복수가 2가 안될경우 뒤의 학생의 체육복을 확인하고
// 앞의 경우처럼 2개일경우 도난 당한 학생과 뒤의 학생의 인덱스는 1로 바뀐다.

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
