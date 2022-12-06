//generic with arrays
interface Iproduct{
    Name:string;
    Price:number;
    InStock:boolean;
}
function GetData<T>(obj:T){
    if(obj instanceof Array){
        for( var item of obj){
            console.log(item);
        }
    }else{
        for(var property in obj){
            console.log(`${property} :${obj[property]}`);
        }
    }
}

let Products:Iproduct={
    Name:"nike",
    Price:345,
    InStock:true
}
let Product:Iproduct[]=[
    {Name:"tv",Price:345.56,InStock:false},
    {Name:"mac",Price:356,InStock:true},
    {Name:"lap",Price:56,InStock:false}
];
console.log(`products list:`);
GetData<Iproduct[]>(Product);
    //GetData<Iproduct[]>([{Name:"tv",Price:34556,InStock:false},
    //{Name:"mac",Price:356,InStock:true},
   // {Name:"lap",Price:56,InStock:false}]);
console.log(`--------------`);
GetData<Iproduct>(Products);
