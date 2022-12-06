var Person = {
    Name: "shiva",
    age: 30,
    gender: true,
    shippedto: ["jgl", "hyd"],
    total: function () { },
    Mfd: new Date()
};
console.log(" NAME=".concat(typeof Person.Name, " age=").concat(typeof Person.age, " gender=").concat(typeof Person.gender, " shipped to ").concat(typeof Person.shippedto, " \nand total").concat(typeof Person.total, "  date= ").concat(typeof Person.Mfd));
