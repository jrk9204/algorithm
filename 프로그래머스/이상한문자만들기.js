function solution(s) {
  let wordArr = s.split(" ");

  let finalArr = wordArr.map((el) => {
    let answer = "";

    for (let i = 0; i < el.length; i++) {
      answer += i % 2 === 0 ? el[i].toUpperCase() : el[i].toLowerCase();
    }

    return answer;
  });

  return finalArr.join(" ");
}
