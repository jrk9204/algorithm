//가질 수 있는 폰켓몬 종류 수의 최댓값을 구해야한다.
// 그러기위해서는 중복값을 없애야하고
// 중복값을 없앤 배열중에서
// N/2 보다 큰지 작은지를 구분하여 리턴해주면된다.

function solution(nums) {
  let uniqueValue = new Set(nums);

  return parseInt(nums.length / 2) <= uniqueValue.size
    ? parseInt(nums.length / 2)
    : uniqueValue.size;
}
