var mob = {
    ModelName: "samsung",
    RAMsize: "8gb",
    Mpx: "20px",
    print: function () {
        console.log("Name=".concat(mob.ModelName, " RAM=").concat(mob.RAMsize, " MPX=").concat(mob.Mpx, " "));
        //console.log(`Name=${this.ModelName} RAM=${this.RAMsize} MPX=${this.Mpx} `)
    }
};
mob.print();
