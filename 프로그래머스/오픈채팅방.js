//string 형태로 상황,유저아이디,닉네임이들어온다.
// string 형태이기 때문에 split(" ")을 하여 이중배열을 만들어야할 것같다.
//enter 일 경우 들어왔습니다, leave 일 경우 나갔습니다. 를 출력해야하고
//change 일 경우에는 이름만 변경하면된다.
//object 형식으로 유저아이디는 키값을 상황과 닉네임은 value 값을 지정해주어
// 마지막 까지 업데이트를 시켜주면 될 것 같다.
function solution(record) {
  let obj = {};
  let answer = [];

  record.forEach((el) => {
    let makeArr = el.split(" ");
    obj[makeArr[1]] = `${makeArr[2]}`;
  });

  record.forEach((el) => {
    let makeArr = el.split(" ");

    if (makeArr[0] === enter) {
    }
    obj[makeArr[1]] = `${makeArr[2]}`;
  });
}

solution([
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
]);
