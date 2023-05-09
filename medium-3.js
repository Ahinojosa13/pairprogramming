// MEDIUM (3)
// Write a function that takes in two numbers and determines the largest positive integer that divides the two numbers without a remainder. 
// Example 1:
// Input: gdc_two_numbers(336,360)  // Output: 24
// Example 2:
// Input: gdc_two_numbers(78,126)   // Output: 6
function gcd_two_numbers(num1, num2) {
    let gcd = 1;
    for (let i = 1; i <= num1 && i <= num2; i++) {
      if (num1 % i == 0 && num2 % i == 0) {
        gcd = i;
      }
    }
    return gcd;
  }

console.log(gcd_two_numbers(336, 360));  // Output: 24
console.log(gcd_two_numbers(78, 126));   // Output: 6