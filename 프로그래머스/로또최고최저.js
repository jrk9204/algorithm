// 최고 번호를 맞추기 위해서는 0이 모든 로또번호의 번호를 맞춰야한다.
// 최저 번호를 맞추기 위해서는 0이 모든 로또번호를 맞추면 안된다.

function solution(lottos, win_nums) {
  let answer = [];

  let recognize = lottos.filter((from) => {
    let search = win_nums.find((target) => {
      return target === from;
    });
    if (search) {
      return from;
    }
  });

  let notRegoc = lottos.reduce((acc, curr) => {
    if (curr === 0) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);

  const highest = recognize.length + notRegoc;
  const lowest = recognize.length;

  console.log(highest, lowest);

  const findRank = (numbs) => {
    switch (numbs) {
      case 6:
        answer.push(1);
        break;

      case 5:
        answer.push(2);
        break;

      case 4:
        answer.push(3);
        break;

      case 3:
        answer.push(4);
        break;

      case 2:
        answer.push(5);
        break;

      default:
        answer.push(6);
    }
  };

  findRank(highest);
  findRank(lowest);

  return answer;
}

solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);
