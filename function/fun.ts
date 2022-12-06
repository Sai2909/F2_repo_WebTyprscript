function f1(){
    console.log(`function f1`);
}

//function contstructor.
let f2 =Function("a","b","return a+b");
f1();
console.log(f2(2,4));