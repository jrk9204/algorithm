// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 


var twoSum = function(nums, target) {
    
    let mapObj = new Map();
    
    for(let i=0; i<nums.length; i++){
        if(mapObj.get(nums[i]) === undefined){
            mapObj.set(target-nums[i],i)
        } else{
           return [mapObj.get(nums[i]),i]; 
        }
        
    } 
    
    
};

twoSum([2,7,11,15],9);

// 두개의 엘레멘트를 더해서 결과값을 같게하려면 이중 for loop를 돌아야한다.
// 하지만 map 객체를 사용하면 이중 for 문을 사용하지 않아도된다.
// 아이디어는 nums 배열에 있는 두개의 원소의 합이 target값과 맞는 것을 찾는 것이아니고
// 해당 nums 배열의 하나의 엘레멘트와 target 값 의 차이가 nums 배열에 있는지를 확인해서 있을경우를 찾으면된다. 

// 아이디어를 해결하기 위해서는 map 객체를 이용하여 키값과 벨류값을 이용하여야한다. 
// for문을 순회하면서 해당 원소가 map 객체 안에 없을 경우에는 객체에 추가한다.
// 키값으로는 nums 하나의 엘레멘트와 target를 뺀값 이고, value 값은 해당 index 값이다.
// 순회중 만약 키값이 존재하는 경우에는 해당 원소가 target 과 같으므로 map 객체의 값과, 현재 index를 리턴한다. 


