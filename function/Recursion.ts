//USING THE RECURSION
function fact(n){              //here fact is a function
    if(n==0){
        return 1;
    }else{
        return n* fact(n-1); //hear function with in the function fact
    }
}
console.log(`dactorial ${fact(50)}`);