// Hard (1)
// Write a function that takes in a string and returns a boolean value whether or not the string contains a pair of matching brackets ({}, [], ()). These brackets must be nested appropriately in order to return a true value
// Example 1:
// Input: str = “{hello world}” brackets(srt)           // Output: True

// Example 2:
// Input: str = “{hello world]” brackets(srt)           // Output: False
function brackets(str) {
    const stack = [];
    const bracketsMap = {
      '}': '{',
      ']': '[',
      ')': '('
    };
    for (const char of str) {
      if (char === '{' || char === '[' || char === '(') {
        stack.push(char);
      } else if (char === '}' || char === ']' || char === ')') {
        const top = stack.pop();
        if (bracketsMap[char] !== top) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }
console.log(brackets('{hello world}')); // true
console.log(brackets('{hello world]')); // false