//조합
//순서와 상관없이 합치는 것을 말함. 중복이 없다.
//종류와 갯수에 맞게 조합해야함.

//이 문제 접근법은 조합보다는 수학적으로 생각해야된다.

// 변수 let cloth = [
//     ["yellowhat", "headgear"],
//     ["bluesunglasses", "eyewear"],
//     ["green_turban", "headgear"],
//   ];
// 가 이렇게 들어왔다고 가정하자
// headgear 의 종류는 yellowwhat, green_turban 2가지종류
// eyewear 의 종류는 bluesunglesses 로 1가지종유가 있다.
//headergear은 yellowwhat, green_turban, 둘다 아닐경우 총 3가지 경우가있고
//eyewear 은 bluesunglesses 와 아닐경우 총 2가지 경우가있다.
//전체 경우의수 3*2 = 6 가지에서 아무것도 안입는 경우의 수 1을 뺀 5가지 경우의 수를 출력하면된다.

//객체를 생성해서 옷의 종류를 키로 지정하고 옷의 이름이 값에 맞으면 추가해준다.

//Hint
//Object.values() 메소드를 사용해도됨.
//키에 해당하는 값들을 배열형태로 리턴해줌.

// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
//   };

//   console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]

let cloth = [
  ["yellowhat", "headgear"],
  ["bluesunglasses", "eyewear"],
  ["green_turban", "headgear"],
];

let clothObj = {};
let answer = 1;

//이차배열임으로 옷의 종류를 알기위해서 각 배열을 탐색한다.
cloth.forEach((el) => {
  //만약 값이 없는 빈 객체일경우 키와 값을 넣어준다
  if (!clothObj[`${el[1]}`]) {
    clothObj[`${el[1]}`] = [el[0]];
    //만약 있는 값이 있다면 기존 키값에 새로운 값을 추가해준다.
  } else {
    clothObj[`${el[1]}`] = [...clothObj[`${el[1]}`], el[0]];
  }
});

//모든 키를 순회해서 키값+1을 하고 모든 객체의 값들을 곱해준다..
for (let key in clothObj) {
  answer *= clothObj[key].length + 1;
}

//마지막 아무것도 안입는 경우는 없으니 전체 경우의 수에서 1을 빼준다.
console.log(answer - 1);
