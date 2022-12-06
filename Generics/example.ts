//generics method with user defined type -our own types of data handle.
interface Iproduct{
    Name:string;
    Price:number;
    InStock:boolean;
}
interface IEmployee{
    Name:string;
    Designation:string;
}
interface Login{
    UserName:string;
    Age:number;
    DOB?:number;        //here it optional
    Email:any;
}
function GetData<T>(obj:T){     //service method is getdata
    for(var property in obj){
        console.log(`${property}:${obj[property]}`)
    }
}
console.log(`prdoct details:`);
GetData<Iproduct>({Name:"tv",Price:55,InStock:true});//in these type we can pass own type of data
console.log(`prdoct Employee:`);
GetData<IEmployee>({Name:"samsung",Designation:"ui"});
console.log(`use logn`);
GetData<Login>({UserName:"sai kiran",Age:34,Email:"saikiranmanchala2000@GMAIL.COM"})