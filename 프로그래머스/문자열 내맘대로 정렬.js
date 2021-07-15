function solution(strings, n) {
  strings.sort();
  let a = strings.sort((a, b) => a[n].charCodeAt() - b[n].charCodeAt());

  console.log(a);
}

solution(["sun", "bed", "car"], 1);
