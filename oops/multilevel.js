// accessing incremental contract technique we use multilevel .
var mob = {
    ModelName: "samsung",
    RAMsize: "8gb",
    Mpx: "20px",
    print: function () {
        console.log("Name=".concat(this.ModelName, " RAM=").concat(this.RAMsize, " MPX=").concat(this.Mpx, " "));
    }
};
mob.print();
