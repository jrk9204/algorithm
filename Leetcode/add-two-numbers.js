// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.



var isPalindrome = function(x) {
    
    let reverseStrNum = x.toString().split("").reverse();
    let normalStrNum = x.toString().split("");
    
    
    for(let i=0; i<normalStrNum.length; i++){
        
        
        if(reverseStrNum[i] !== normalStrNum[i]){
            return false;
        }
    }
    
    return true;
    
};

// 숫자를 string으로 변환뒤 하나는 reverse 로 변환 하나는 일반 으로 변환한다.
// 변환된 숫자하나와 변환이 안된 숫자 하나 두개를 for 문으로 각각 비교하여 다를 경우 false 를 리턴한다.

// for 문을 사용하지 않아도 string 값으로 직접 비교해도 된다.

