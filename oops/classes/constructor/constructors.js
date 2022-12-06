//parameter less constrctor.
var Database = /** @class */ (function () {
    function Database() {
        console.log("database is connected");
    }
    Database.prototype.Insert = function () {
        console.log("record is inserted");
    };
    return Database;
}());
var oracle = new Database;
oracle.Insert();
console.log("-----parametrized constructor----------");
var database = /** @class */ (function () {
    function database(dbName) {
        console.log("database is ".concat(dbName, " connected"));
    }
    database.prototype.Insert = function () {
        console.log("record is inserted");
    };
    return database;
}());
var oracle1 = new database();
oracle1.Insert();
