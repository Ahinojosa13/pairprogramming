// Create a function that checks an array for prime numbers then inserts any primes into a new array.                               
// Example 1:                                                                                                                                       Input: numArray = [1,2,3,4,5,6,7,8,9,10]
// Output: primeArray = [2,3,5,7]
// Example 2:												Input: numArray = [10, 18, 19, 29, 33, 35, 47, 66, 83] 
// Output: primeArray = [19 ,29 ,47 , 83]


var array = [2,5,3,4,92,34,54,32,56]
function prime(i){
    var primes = []

    i.forEach(element => {
        var boo = true;
        for(var x = 2; x<= element-1; x++){
        if((element % x == 0)){
            x = element;
            boo= false;
        }
        }
        if(boo) {
            primes.push(element)
        }

    });
    return primes
}

    console.log(prime(array));
