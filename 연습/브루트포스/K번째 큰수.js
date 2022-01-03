//브루트포스 모든경우의수 카운팅하기

const test = (info, data) => {
  let store = new Set();
  let size = info[0];

  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      for (let z = j + 1; z < size; z++) {
        store.add(data[i] + data[j] + data[z]);
      }
    }
  }

  let sorted = Array.from(store).sort((a, b) => b - a);

  console.log(sorted, sorted[info[1] - 1]);
};

test([10, 3], [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]);
