//replace 사용하여 소문자 정규식

const test = (data) => {
  let str = data.toLowerCase().replace(/[a-z]/g, "");

  //   let originStr = data.toLowerCase().split("");
  //   let originArr = "";
  //   let str = "";

  //   for (let i = 0; i < originStr.length; i++) {
  //     if (originStr[i].charCodeAt() >= 97 && originStr[i].charCodeAt() <= 122) {
  //       originArr += originStr[i];
  //     }
  //   }

  //   str = originArr.split("").reverse().join("");

  //   console.log(str, originArr);

  //   if (str === originArr) {
  //     console.log("Yes");
  //   } else {
  //     console.log("NO");
  //   }
};

test("found7, time: study; Yduts; emit, 7Dnuof");
