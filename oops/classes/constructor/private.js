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
    };
    return Database;
}());
var sai = {
    Insert: function () {
        console.log("record inserted");
    }
};
sai.Insert();
