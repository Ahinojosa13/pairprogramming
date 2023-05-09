var numbers = [2,5,3,7,8,13,22];

function evenOrOdd(x){
    var even = [];
    var odd = [];
    x.forEach(element => {
        if (element % 2 == 0){
        even.push(element);    
        } else{
            odd.push(element);
        }
    });    
    console.log("This is even " +  even); 
    console.log("This is odd " + odd);
}
        
evenOrOdd(numbers)