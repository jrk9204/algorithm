//최적의 해를 구해야하는 조건 두가지 1. 알파벳 선택, 2. 자리수 선택.
//1. 알파벳을 선택할때 A에서 뒤에서 ('Z')로 가는 방향이 빠른지 또는
// A에서 앞으로 가는방향 'B' 로 가서 선택하는 방향이 빠른지 선택해야한다.
//2. 자리수 선택 AAAAA가 있을때 뒤로가서 선택할지, 앞으로가서 선택할지 최적의 해를 구해야함
// 4번째 자리수를 선택하려면 첫쨋 자리수에서 뒤로 2번 선택하는게 가장 빠르다.

let alpha = [];
let answer = 0;

function solution(name) {
  let init = new Array(name.length).fill("A");
  //바꾸던 안바꾸던 끝까지 가야하는 인덱스 숫자;
  let currentIndex = 0;
  //A일경우 움직이지않는다.
  let countIndex = 0;
  for (let i = 65; i <= 90; i++) {
    alpha.push(String.fromCharCode(i));
  }

  console.log(init);

  // 최적의 자릿수 구하기
  while (countIndex < name.length) {
    if (name[countIndex] !== init[countIndex]) {
      let findAlpha = alpha.findIndex((el) => {
        return el === name[countIndex];
      });

      currentIndex =
        countIndex > name.length - countIndex + currentIndex
          ? name.length - countIndex + currentIndex
          : countIndex;

      console.log(currentIndex);
      answer += findAlpha + currentIndex;
    } else {
      answer += 1;
    }

    countIndex += 1;
  }
  console.log(answer);
}

solution("JANAB");
