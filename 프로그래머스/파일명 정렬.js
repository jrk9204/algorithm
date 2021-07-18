//head,number,tail 세가지로 나눠져있는 파일명들이 배열에 들어있다.
// head 에는 대소문자 관계없이 사전순으로 정렬하고
// head 가 같을시에는 Number순으로 정렬하되 앞에 0은 무시된다.
// head 와 Number 둘다 같을시에는 배열에 있는 그대로 순으로 한다.

function solution(files) {
  let obj = [];
  let answer = [];

  files.forEach((el, idx) => {
    let split = el.split(/(\d+)/);
    obj.push({ Head: split[0], Number: Number(split[1]), Index: idx });
  });

  console.log(obj);
  obj.sort((a, b) => {
    let x = a.Head.toLowerCase();
    let y = b.Head.toLowerCase();
    if (x < y) {
      return -1;
    } else if (x > y) {
      return 1;
    } else {
      if (a.Number < b.Number) {
        return -1;
      } else if (a.Number > b.Number) {
        return 1;
      } else {
        if (a.Index < b.Index) return -1;
        else return 1;
      }
    }
  });

  obj.forEach((el) => {
    answer.push(files[el.Index]);
  });

  console.log(answer);

  return answer;
}

// function solution(files) {
//   let obj = [];
//   let answer = [];

//   files.forEach((el, idx) => {
//     let head = el.match(/[a-z]+\-?\s?(?=[0-9])/i);
//     let number = el.match(/[0-9]+/);
//     obj.push({ Head: head[0], Number: Number(number[0]), Index: idx });
//   });

//   console.log(obj);
//   obj.sort((a, b) => {
//     let x = a.Head.toLowerCase();
//     let y = b.Head.toLowerCase();
//     if (x < y) {
//       return -1;
//     } else if (x > y) {
//       return 1;
//     } else {
//       if (a.Number < b.Number) {
//         return -1;
//       } else if (a.Number > b.Number) {
//         return 1;
//       } else {
//         if (a.Index < b.Index) return -1;
//         else return 1;
//       }
//     }
//   });

//   obj.forEach((el) => {
//     answer.push(files[el.Index]);
//   });

//   console.log(answer);

//   return answer;
// }

solution([
  "F- asdf 5 Freedom Fighter",
  "B-50 Superfortress",
  "A-10 Thunderbolt II",
  "F-14 Tomcat",
]);
