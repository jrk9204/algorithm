//중복된 문자열을 제거하라.

// indexof 를 활용 가능
// let a = s.indexOf('k');
//while 을 활용해서 k 가 몇개있는지 카운터 해볼 수 있다. 

// let idx = s.indexOf('k');

// while( idx !== -1){
//     answer+=1;
//     idx = s.indexOf('k',idx+1);
// }


const test = (str) => {
  let answer = "";

  for (let word of str) {
    if (answer.search(word) === -1) {
      answer += word;
    }
  }

  console.log(answer);
};

test("ksekkset");
