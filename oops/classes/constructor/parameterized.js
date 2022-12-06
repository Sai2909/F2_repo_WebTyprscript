var Database = /** @class */ (function () {
    function Database(dbName) {
        if (dbName == undefined) {
            console.log("connected to unkown database");
        }
        else {
            console.log("connected to ".concat(dbName, " database"));
        }
    }
    Database.prototype.Insert = function () {
        this;
    };
    return Database;
}());
//let sai=new Database;
//sai.Insert();
var sai = {
    Insert: function () {
        console.log("record inserted");
    }
};
sai.Insert();
//keyword is bulding the statements.
//new is dynamic memory allocating operator. it assings memory.it should not a keyword.
