function solution(number, k) {
  let stack = [];

  for (let i = 0; i < number.length; i++) {
    let num = number[i];

    while (k > 0 && stack[stack.length - 1] < num) {
      stack.pop();
      k -= 1;
    }

    stack.push(num);
  }

  let answer = stack.join("");

  if (k !== 0) return stack.join("").slice(0, k + 1);

  return answer;
}
