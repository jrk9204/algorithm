//폰 번호는 이차열배열로 이뤄진다.
//처음에 numbers와 hand 를 받는다
//왼손은 y축이 1일 경우, 오른손은 y축이 3일경우 y축이 2 일경우에는 왼손또는 오른손의 위치에따라 다름.
//객체를 생성하여 숫자 0부터 9까지 x,y 좌표를 초기화해줌
//현재 위치에서 해당 번호의 거리를 x,y를 이용해서 거리를 구하고 해당위치의 좌표를 구함.
//만약 y축이 1일경우에는 왼손의 거리와 오른손의 거리를 비교해서 더 가까운 손위치를 업데이트해줌.
//반복한다.

function solution(numbers, hand) {
  let obj = {};
  let number = 0;
  let currLeft = { left: [3, 0], value: 0 };
  let currRight = { right: [3, 2], value: 0 };
  let answer = "";

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      number += 1;

      if (number === 11) {
        obj["0"] = [i, j];
      }

      obj[number] = [i, j];
    }
  }

  const makeLeft = (x, y) => {
    currLeft["value"] = Math.abs(currLeft["left"][0] - x) + Math.abs(currLeft["left"][1] - y);
    currLeft["left"] = [x, y];
    answer += "L";
  };

  const makeRight = (x, y) => {
    currRight["value"] = Math.abs(currRight["right"][0] - x) + Math.abs(currRight["right"][1] - y);
    currRight["right"] = [x, y];
    answer += "R";
  };

  numbers.forEach((el) => {
    let [x, y] = obj[el];
    if (y === 0) {
      makeLeft(x, y);
    } else if (y === 2) {
      makeRight(x, y);
    } else {
      if (Math.abs(currLeft["left"][0] - x) + Math.abs(currLeft["left"][1] - y) > Math.abs(currRight["right"][0] - x) + Math.abs(currRight["right"][1] - y)) {
        makeRight(x, y);
      } else if (Math.abs(currLeft["left"][0] - x) + Math.abs(currLeft["left"][1] - y) < Math.abs(currRight["right"][0] - x) + Math.abs(currRight["right"][1] - y)) {
        makeLeft(x, y);
      } else {
        if (hand === "right") {
          makeRight(x, y);
        } else {
          makeLeft(x, y);
        }
      }
    }
  });

  return answer;
}
