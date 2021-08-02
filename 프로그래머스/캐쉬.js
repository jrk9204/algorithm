//캐쉬 LRU 알고리즘 사용
//캐시 크기에 맞게 도시이름이 들어가는데
//도시이름이 이미 있는경우 cache hit, 해당 데이터를 맨위로 올린다.
//도시 이름이 없는 경우에는 cache miss, 가장 오래된 데이터를 삭제하고 새로운데이터를 추가한다.

//새로운 큐를 생성하고 큐사이즈는 cachesize이다.
//1.큐의 사이즈가 3보다 작을 경우에는 데이터가 이미 존재한지 체크하여 있을경우 해당데이터를 큐의 맨뒤로 옮긴다. 없을경우 그냥 추가한다.
//2. 3보다 클경우에는 해당데이터가 있는지 없는지를 체크하여 해당데이터가 있을경우 큐의 맨뒤로 옮기고 없을 경우에는 맨 앞 데이터를 제거하고 새로 추가한다.
//3.새로운 데이터가 queue에 없을경우  실행시간 5증가한다.
//4.새로운 데이터가 queue에 있을경우 실행시간 1증가한다.
//cisites에 있는 원소를 다 넣을때까지 1~4를 반복한다.

function solution(cacheSize, cities) {
  cities = cities.map((el) => el.toUpperCase());
  let queue = [];
  let answer = 0;

  if (cacheSize === 0) return cities.length * 5;

  while (cities.length > 0) {
    let newData = cities[0];
    let searchIndex = queue.indexOf(newData);
    cities.shift();

    if (searchIndex === -1) {
      if (cacheSize === queue.length) queue.shift();

      answer += 5;
    } else {
      queue.splice(searchIndex, 1);
      answer += 1;
    }
    queue.push(newData);
  }

  console.log(answer);
  return answer;
}

function solution(cacheSize, cities) {
  let queue = [];
  let answer = 0;

  if (cacheSize === 0) return cities.length * 5;

  cities.forEach((el) => {
    el = el.toLowerCase();
    let search = queue.indexOf(el);
    if (search === -1) {
      if (queue.length === cacheSize) {
        queue.shift();
      }
      answer += 5;
    } else {
      queue.splice(search, 1);
      answer += 1;
    }

    queue.push(el);
  });

  return answer;
}

solution(5, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]);
