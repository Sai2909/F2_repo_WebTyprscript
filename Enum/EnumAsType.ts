//ENUM AS A TYPE NOT A COLLECTION.
enum Logs{
    string,
    number,
    boolean
}
let multiple:Logs;  //all above type as multiple.
let varibale:string|number|boolean;

//we can use multiple times objects
enum Size{
    Height,
    Vsize
}
interface Table{
    Verticle:Size.Height;
    Color:string;
}
interface Div {
    Verticle:Size.Vsize;
}
let  Emptable:Table={            //object creation
    //Verticle:Size.Vsize,     //not valid
    Verticle:Size.Height,     //is valid
    Color:"red"
}
let NavDiv:Div={
    Verticle:Size.Vsize
}
