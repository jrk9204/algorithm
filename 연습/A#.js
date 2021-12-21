//모든 대문자 A 를 #으로 바꿔서 출력하라.

//replace string 값을 교체 reaplce 는 문자열 또는 정규식에 사용되어질 수 있다. 

//해당 알파벳일경우에는 교환 아니면 그대로 더해주는 식으로 해도됨. 



const test = (data) => {
  console.log(data.replaceAll("A", "#"));
};

test("BANANA");
