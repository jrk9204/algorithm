function solution(skill, skill_trees) {
  let splitOrigin = skill.split("");
  let searchSkill = skill_trees.map((el) => el.split(""));

  let findSkil = searchSkill.map((el) => {
    return el.filter((target) => {
      if (splitOrigin.indexOf(target) !== -1) {
        return target;
      }
    });
  });

  console.log(findSkil);

  let answer = 0;
  searchSkill.forEach((el, idx) => {
    let searching = true;

    el.forEach((searchEl, searchIdx) => {
      if (el !== splitOrigin[searchIdx]) {
        searching = false;
      }
    });

    if (searching === true) {
      answer += 1;
    }
  });

  return answer;
}

solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]);
