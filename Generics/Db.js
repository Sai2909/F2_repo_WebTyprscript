var Oracle = /** @class */ (function () {
    function Oracle() {
    }
    return Oracle;
}());
var MangoDb = /** @class */ (function () {
    function MangoDb() {
    }
    return MangoDb;
}());
var Datasource = /** @class */ (function () {
    function Datasource() {
    }
    return Datasource;
}());
var ora = new Datasource();
ora.connection = { connection: "oracle connection", query: "select* from tbl products" };
console.log("provider=".concat(ora.connection.connection, " \n query =").concat(ora.connection.query));
console.log("=================");
var mango = new Datasource();
mango.connection = { connection: "connecying mango" };
console.log("provideer=".concat(mango.connection.connection));
