var Database = /** @class */ (function () {
    function Database() {
    }
    Database.prototype.Connect = function () {
        console.log("database is connected");
    };
    Database.prototype.Insert = function () {
        console.log("record is inserted");
    };
    return Database;
}());
var oracle = new Database; //here oracle is a object 
oracle.Insert(); //and call the object with method name. .//but is loaded automatically by the loading the class into memory
oracle.Connect();
//connection is ordinary method 
