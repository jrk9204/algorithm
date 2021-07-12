// 0부터 9까지 영문으로 이뤄진 배열을 생성한다. 인덱스는 해당 영문임으로 영문일경우에는 replace를 사용하여 해당 인덱스로 바꿔준다.
// search는 전체를 찾는게 아니고 처음에만 찾기때문에 while을 사용하여 전체를 탐색해야한다.

let alphabet = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
let arr = "1zerotwozero3";
let answer = arr.slice(0);

while (!Number(answer)) {
  alphabet.forEach((el, index) => {
    let findIdx = answer.search(el);
    if (findIdx !== -1) {
      console.log(el);
      answer = answer.replace(el, index);
    }
  });
}

console.log(answer);
