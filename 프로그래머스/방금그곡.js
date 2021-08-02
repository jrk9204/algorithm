//노래가 처음부터 시작된 악보를 찾아야한다.
//악보가 노래 재생시간보다 길경우 악보를 재생 시간만큼 자른다.
//객체를 생성하여 키값으로 time,title,sheet,index 를 생성한다. index는 조걸이 일치하는 음악이 여러개 있을경우에,재생된 시간도 같을경우
//먼저 입력된 음악을 알기위해 만들었다.

//indexOf 를 사용하려면 찾고자하는 배열.indexOf(찾고자하는 원소);

//04:00시 시작

function replaceMelody(melody) {
  return melody.replace(/C#/g, "c").replace(/D#/g, "d").replace(/F#/g, "f").replace(/G#/g, "g").replace(/A#/g, "a");
}

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
    } else if (calcTime > el[3].length) {
      let needTime = calcTime - el[3].length;
      for (let i = 0; i < needTime; i++) {
        el[3] += el[3][i];
      }
    }

    return { time: calcTime, title: el[2], sheet: replaceMelody(el[3]), index: idx };
  });

  m = replaceMelody(m);
  let filterdObj = infoObj.filter((el, idx) => {
    if (el.sheet.indexOf(m) === -1) return false;
    return true;
  });

  let answer = "";
  if (filterdObj.length > 1) {
    let result = filterdObj.sort((a, b) => {
      if (a.time > b.time) {
        return 1;
      } else if (a.time < b.time) {
        return -1;
      } else {
        return a.index - b.index;
      }
    });
    answer = result[0].title;
  } else {
    answer = filterdObj[0].title;
  }

  console.log(answer);
}

// solution("ABCDEFG", ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"]);

// solution("CC#BCC#BCC#BCC#B", ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"]);

solution("ABC", ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"]);
