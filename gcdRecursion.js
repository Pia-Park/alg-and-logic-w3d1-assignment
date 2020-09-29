// Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers 
//using recursion. 

const gcdRecursive = function(a, b) {
    return b ? gcdRecursive(b, a % b) : Math.abs(a);
    
}

console.log(gcdRecursive(14, 21));
