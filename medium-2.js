// MEDIUM (2)
// Create a function that accepts two strings, then determines whether or not the first string is an anagram of the second string by returning a boolean. 
// Example:
// Input: String 1: So dark the con of man
//  String 2: Madonna of the Rocks
// Output: True
// Input: String 1: Things are good
// 	  String 2: Dogs eat ants
// Output: False

function isAnagram(str1, str2) {
    str1 = str1.replace(/\s/g, '').toLowerCase(); // remove spaces and convert to lowercase
    str2 = str2.replace(/\s/g, '').toLowerCase(); // remove spaces and convert to lowercase
    if (str1.length !== str2.length) {
      return false; // if the two strings have different lengths, they can't be anagrams
    }
    let freq = {};
    for (let i = 0; i < str1.length; i++) {
      let char = str1.charAt(i);
      freq[char] = (freq[char] || 0) + 1; // count the frequency of each character in str1
    }
    for (let i = 0; i < str2.length; i++) {
      let char = str2.charAt(i);
      if (!freq[char]) {
        return false; // if a character in str2 doesn't exist in str1 or has a frequency of 0, they can't be anagrams
      }
      freq[char]--;
    }
    return true; // if all characters in str2 exist in str1 and have the same frequency, they are anagrams
  }

console.log(isAnagram("So dark the con of man", "Madonna of the Rocks"));  // Output: true
console.log(isAnagram("Things are good", "Dogs eat ants"));              // Output: false
