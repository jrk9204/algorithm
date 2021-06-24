function solution(s) {
  let copy = s.slice();
  let pair = 0;

  console.log(copy.length);

  for (let i = copy.length - 1; 0 <= i; i--) {
    if (copy[i] === ")") {
      pair += 1;
    } else if (pair && copy[i] === "(") {
      pair -= 1;
    } else {
      return false;
    }
  }

  if (pair) {
    return false;
  } else {
    return true;
  }
}
