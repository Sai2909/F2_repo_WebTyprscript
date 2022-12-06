//parameter less constuctor
class Database{
    constructor(){      //cons is anonymous function (empty) parameter less
        console.log(`database is connected`);
    }
    public Insert(){        
        console.log(`record is inserted`);
    }
}
let oracle=new Database;   
oracle.Insert();