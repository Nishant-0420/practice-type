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

