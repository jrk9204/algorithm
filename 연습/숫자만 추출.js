//자연수는 앞자리에 0이 없어야한다. 0을 제거하기 위해서는 10을 곱해서 제거 할 수 있음. 


const test = (data) => {
  let str = data.split("");

  let answer = "";

  for (let word of str) {
    if (word.charCodeAt() >= 48 && word.charCodeAt() <= 57) {
      answer += word;
    }
  }

  console.log(parseInt(answer));
};

test("g0en2T0s8eSoft");
