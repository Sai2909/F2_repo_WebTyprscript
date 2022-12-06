function Print() {
    console.log(`print functions`);
}
class Demo {
    Print() {      //method
        console.log(`print method`);
        Print();  //function call
    }
}
//function must call by using method
let sai = new Demo();
sai.Print();  //method