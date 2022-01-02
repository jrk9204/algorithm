const test = (data) => {
  let str = data.toLowerCase();

  let reverseStr = str.split("").reverse().join("");

  if (str === reverseStr) {
    console.log("YES");
  } else {
    console.log("NO");
  }
};

test("gooGa");
