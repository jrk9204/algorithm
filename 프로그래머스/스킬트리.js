function solution(skill, skill_trees) {
  let splitOrigin = skill.split("");
  let searchSkill = skill_trees.map((el) => el.split(""));
  let answer = 0;
  let findSkill = searchSkill.map((el) => {
    return el.filter((target) => {
      if (splitOrigin.indexOf(target) !== -1) {
        return target;
      }
    });
  });

  findSkill.forEach((searchEl, searchIdx) => {
    let findit = false;
    searchEl.forEach((targetEl, targetIdx) => {
      if (splitOrigin[targetIdx] !== searchEl[targetIdx]) {
        findit = true;
      }
    });

    if (!findit) {
      answer += 1;
    }
  });

  return answer;
}

solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]);
