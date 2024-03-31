// function declaration type 1
function g1(name) {
    return `Hello, ${name}!`;
}

console.log(g1('stonner rohan')); // Output: Hello, rohan!


// function expression type 2
const g2 = function(name) {
    return `Hello, ${name}!`;
};

console.log(g2('vaibhav yadav! ')); 

// arrow function
const greet = (name) => {
    return `Hello, ${name}!`;
};

console.log(greet('megha prashar ')); 



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
console.log(isPalindrome(12334667));

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




let a=10.01
let b="10.45"
console.log(parseInt(a))
console.log(parseFloat(a))
console.log(parseInt(b))
console.log(parseFloat(b))

function add(a,b){
    return a+b
}
 let s=add(69,69)
 console.log(s)

 console.log("end  ")


//  multiple array operations
// map and filter will create a new array 
num=[23,45,66,22,468,9,69,7,4,64,3]
const l=num.map(element => element*2);
console.log(l)

const f=num.filter( n=> n>100)
console.log(f)

// map modifies each element but keeps the length of the array the same, filter selectively removes elements based on a condition, potentially resulting in a shorter array.





