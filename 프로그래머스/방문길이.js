//중복되는 길을 갈경우 카운트가 안되고 중복되는 길일경우 카운트가됨.
//갔던 길인지 아닌지 판단하기위해서 방문 배열을 만든다.

function solution(dirs) {
  let order = dirs.split("");
  let direction = { U: [0, 1], D: [0, -1], R: [1, 0], L: [-1, 0] };
  let visited = [];
  let curr = [0, 0];

  order.forEach((el, idx) => {
    let x = curr[0] + direction[el][0];
    let y = curr[1] + direction[el][1];

    if (x > -6 && x < 6 && y > -6 && y < 6) {
      if (visited.indexOf("" + curr[0] + curr[1] + x + y) === -1) {
        visited.push("" + curr[0] + curr[1] + x + y);
        visited.push("" + x + y + curr[0] + curr[1]);
      }

      curr = [x, y];
    }
  });

  console.log(visited);

  return visited.length;
}

solution("LRLRL");
