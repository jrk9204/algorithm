//단어 사이에서 중복되지 않은 단어들을 골라내기
//str 또는 배열에서 중복단어 찾기위해서 indexOf 사용

//filter 와 indexof 를 사용해서 해결방법
//indexOf 는 처음발견한 index 만 출력한다. 
//따라서 처음 나온 문자는 index 랑 같을수 밖에없음. 이걸 사용. 

const test = (words) => {
  let answer = [];

  for (let word of words) {
    if (answer.indexOf(word) === -1) {
      answer.push(word);
    }
  }

  console.log(answer);
};

test(["good", "time", "good", "time", "student"]);
