class Database{

    public Connect(){       //here connect() is a method
        console.log(`database is connected`);
    }
    public Insert(){        //here insert() is a method
        console.log(`record is inserted`);
    }
}
let oracle=new Database;   //here oracle is a object 
oracle.Insert();            //and call the object with method name. .//but is loaded automatically by the loading the class into memory
oracle.Connect();


//connection is ordinary method 


