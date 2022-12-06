//generic class with user defined type:
class Oracle {
    connection: string;
    query: string;
}
class MangoDb {
    connection: string;

}

class Datasource<T>{
    connection: T;

    //command:(cmd:T)=>T;
}
let ora = new Datasource<Oracle>();
ora.connection = { connection: "oracle connection", query: "select* from tbl products" };
console.log(`provider=${ora.connection.connection} \n query =${ora.connection.query}`);
console.log(`=================`);
let mango = new Datasource<MangoDb>();
mango.connection = { connection: "connecying mango" };
console.log(`provideer=${mango.connection.connection}`);

