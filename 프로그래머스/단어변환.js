function solution(begin, target, words) {
  let answer = 0;
  let visited = [];

  const findWord = (originWord) => {
    answer += 1;

    return words.filter((el, idx) => {
      let countDiff = 0;
      let splitWord = el.split("");

      for (let i = 0; i < splitWord.length; i++) {
        if (originWord[i] !== splitWord[i]) {
          countDiff += 1;
        }
      }

      if (countDiff === 1 && visited.indexOf(el) === -1) {
        visited.push(el);
        return el;
      }
    });
  };

  const BFS = (currWord) => {
    let queue = [currWord];

    while (queue.length !== 0) {
      let curr = queue.shift();
      let findDiffWords = findWord(curr);

      if (curr === target) {
        console.log(answer);
        return answer;
      }

      for (let i = 0; i < findDiffWords.length; i++) {
        queue.push(findDiffWords[i]);
      }
    }
  };

  BFS(begin);
}

solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]);
