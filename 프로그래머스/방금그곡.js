//노래가 처음부터 시작된 악보를 찾아야한다.
//악보가 노래 재생시간보다 길경우 악보를 재생 시간만큼 자른다.
//객체를 생성하여 키값으로 time,title,sheet,index 를 생성한다. index는 조걸이 일치하는 음악이 여러개 있을경우에,재생된 시간도 같을경우
//먼저 입력된 음악을 알기위해 만들었다.

const { info } = require("console");

//indexOf 를 사용하려면 찾고자하는 배열.indexOf(찾고자하는 원소);

//04:00시 시작

function solution(m, musicinfos) {
  let splitInfo = musicinfos.map((el) => {
    return el.split(",");
  });

  let infoObj = splitInfo.map((el, idx) => {
    let startMins = 0;
    let endMins = 0;
    let calcTime = 0;
    let splitStartTime = el[0].split(":");
    startMins = Number(splitStartTime[0]) * 60 + Number(splitStartTime[1]);
    let splitEndTime = el[1].split(":");
    endMins = Number(splitEndTime[0]) * 60 + Number(splitEndTime[1]);

    calcTime = endMins - startMins;

    if (el[3].length >= calcTime) {
      el[3] = el[3].slice(0, calcTime);
    }

    return { time: calcTime, title: el[2], sheet: el[3].match(/[ABCDEFG]#?/g), index: idx };
  });

  m = m.match(/[ABCDEFG]#?/g);
  console.log(m);
  console.log(infoObj[0].sheet);

  let answer = infoObj.filter((el, idx) => {
    if (m[idx] !== el.sheet) return false;

    return true;
  });

  console.log(answer);
}

solution("CC#BCC#BCC#BCC#B", ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"]);
