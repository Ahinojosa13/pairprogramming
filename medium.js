// MEDIUM (1)
// Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather or not the input is a vowel
// Example 1:
// Input: vowelChecker(‘b’)
// Output: ‘This is not a vowel’
// Example 2:
// Input: vowelChecker(‘a’)
// Output: ‘This is a vowel’

function vowelChecker(x) {
    // if(x= a,e,i,o,u){
    //     console.log("This is a vowel")
    // } else{
    //     console.log("This is not a vowel")
    // }
    switch (x) {
      case "a":
        console.log("This is a vowel");
        break;
      case "e":
        console.log("This is a vowel");
        break;
      case "i":
        console.log("This is a vowel");
        break;
      case "o":
        console.log("This is a vowel");
        break;
      case "u":
        console.log("This is a vowel");
        break;
      default:
        console.log("This is not a vowel");
    }

}

vowelChecker('e')
vowelChecker('t')