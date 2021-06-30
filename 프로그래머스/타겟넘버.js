// 문제 접근법 루트노드에서부터 leaf 노드까지 탐색하는 DFS 방식을 이용했다.
// let numbers = [1,1,1,1,1] 일경우
//1. dfs(nums, target, count + 1, result + nums[count]);
//2. dfs(nums, target, count + 1, result - nums[count]);

//결과값 0 을 기준으로하여 1번,2번의 재귀함수를 순회하여 마지막 인덱스까지 더해지고 빼진다.
//1번의 재귀함수가 시작되었을때 결과값은 1부터 시작한다.
//1번함수의 처음 결과값은 1+1+1+1+1=5 이며 종료되는 시점은 1-1-1-1-1 =-3이다
//1번의 재귀함수가 종료되어 2번의 재귀함수가 시작되면 결과값이 -1부터 시작이된다
//2번의 처음 결과값은 -1+1+1+1+1 = 3이고 2번이 종료되는 시점은 -1-1-1-1-1=-5 이다.

function solution(numbers, target) {
  //더하고 뺀 결과값을 나타내기위한 변수
  let result = 0;
  //target 넘버가 나왔을때마다 더해주는 결과값.
  let answer = 0;
  //인덱스를 탐색하기위한 변수
  let count = 0;

  const dfs = (nums, target, count, result) => {
    if (count === nums.length) {
      if (result === target) {
        answer += 1;
      }
      return;
    }

    dfs(nums, target, count + 1, result + nums[count]);
    dfs(nums, target, count + 1, result - nums[count]);
  };

  dfs(numbers, target, count, result);

  return answer;
}
