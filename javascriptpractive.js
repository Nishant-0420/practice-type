// function declaration type 1
function g1(name) {
    return `Hello, ${name}!`;
}

console.log(g1('rohan')); // Output: Hello, rohan!


// function expression type 2
const g2 = function(name) {
    return `Hello, ${name}!`;
};

console.log(g2('vaibhav')); 

// arrow function
const greet = (name) => {
    return `Hello, ${name}!`;
};

console.log(greet('megha')); 



// palindrome code
function isPalindrome(num) {
    const originalNum = num;
    let reversedNum = 0;
    
    while (num > 0) {
        const digit = num % 10;
        reversedNum = (reversedNum * 10) + digit;
        num = Math.floor(num / 10);
    }
    
    return originalNum === reversedNum;
}


console.log(isPalindrome(123454321)); 
console.log(isPalindrome(123321123321));
console.log(isPalindrome(1233455667));

// perfect no. code
function isPerfectNumber(num) {
    let sum = 0;
    
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    
    return sum === num && num !== 0;
}


console.log(isPerfectNumber(28)); //  28 = 1+2+4+7 + 14)
console.log(isPerfectNumber(12)); 