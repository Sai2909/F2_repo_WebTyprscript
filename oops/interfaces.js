var tv = {
    Name: "TV",
    Price: 23456.00,
    Qty: 3,
    Total: function () {
        return this.Qty * this.Price;
    }
};
var mobile = {
    Name: "Mobile",
    Price: 256.00,
    Qty: 3,
    Vendor: "samsung",
    Total: function () {
        return this.Qty * this.Price;
    }
};
function Print(obj) {
    console.log("Name ".concat(obj.Name, "\n Price").concat(obj.Price, " \n  quantity ").concat(obj.Qty, " \nTotal").concat(obj.Total(), " \n vendor =").concat((obj.Vendor == undefined) ? "anonymous vendor " : obj.Vendor));
}
tv.Name = "LG";
Print(tv);
Print(mobile);
