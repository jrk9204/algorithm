//전형적인 큐를 사용하면 된다.

function solution(bridge_length, weight, truck_weights) {
  let stanby = truck_weights.splice(0);
  let progress = new Array(bridge_length).fill(0);
  let totalWeight = 0;
  let time = 0;

  let firstTruck = stanby.shift();
  progress.shift();
  progress.push(firstTruck);
  totalWeight += firstTruck;
  time += 1;

  while (totalWeight !== 0) {
    totalWeight -= progress.shift();
    let nextTruck = stanby.shift();

    if (weight >= totalWeight + nextTruck) {
      progress.push(nextTruck);
      totalWeight += nextTruck;
    } else {
      stanby.unshift(nextTruck);
      progress.push(0);
    }

    time += 1;
  }

  return time;
}

//1차시도

// function solution(bridge_length, weight, truck_weights) {

//     let totalTime =0;
//     let firstTruck = truck_weights.shift();
//     let queue=[{truckWeight:firstTruck, time:0}];

//     while(queue.length > 0) {

//         let currTruck = queue.shift();
//         let currWeight =currTruck.truckWeight;
//         let nextTruck = truck_weights.shift();

//         queue.forEach(el=>el.time+=1);

//         if(weight >= currWeight+nextTruck){
//             queue.push({truckWeight:nextTruck,time:0});

//         }else{
//             truck_weights.unshift(nextTruck);
//             queue.unshift(currTruck);
//         }

//         if(currTruck.time === weight){
//             queue.shift();
//         }

//     }

//         totalTime+=1;

//         console.log(totalTime)

//     }
