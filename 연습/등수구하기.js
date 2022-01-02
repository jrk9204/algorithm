const test = (data) => {
  let answer = [];

  for (let i = 0; i < data.length; i++) {
    let count = 1;
    for (let j = 0; j < data.length; j++) {
      if (data[i] < data[j]) {
        count += 1;
      }
    }

    answer.push(count);
  }

  console.log(answer);
};

test([92, 92, 92, 100, 76]);
