class Database{
public constructor(dbName?:string){
    if(dbName==undefined){
        console.log(`connected to unkown database`);
    }else{
        console.log(`connected to ${dbName} database`);
    }
}
public Insert(){
    console.log(`record inserted`);
}
}
let sai=new Database("oracle");
sai.Insert();

//keyword is bulding the statements.
//new is dynamic memory allocating operator. it assings memory.it should not a keyword.