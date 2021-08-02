//방문 object를 생성하여 처음 갔던 길인지 아닌지 체크하여 더해준다.
//object에서 x 와 y 두개의 키가 필요하다.

function solution(dirs) {
  let order = dirs.split("");
  let direction = { U: [0, 1], D: [0, -1], R: [1, 0], L: [-1, 0] };
  let visited = [];
  let curr = [0, 0];

  order.forEach((el, idx) => {
    let x = curr[0] + direction[el][0];
    let y = curr[1] + direction[el][1];

    if (x > -6 && x < 6 && y > -6 && y < 6) {
      let find = false;
      visited.forEach((visitedEl) => {
        if (visitedEl[0] === x && visitedEl[1] === y) find = true;
      });

      if (!find) {
        visited.push([x, y]);
      }

      curr = [x, y];
    }
  });

  console.log(visited);
  console.log(visited.length);
  return visited.length;
}

solution("LULLLLLLU");
