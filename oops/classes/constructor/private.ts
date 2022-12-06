class Database {
    private constructor(dbName?: string) {
        if (dbName == undefined) {
            console.log(`connected to unkown database`);
        } else {
            console.log(`connected to ${dbName} database`);
        }
    }
    public Insert() {
        
    }
}
let sai: Database = {
    Insert() {
        console.log(`record inserted`);
    }
};
sai.Insert();