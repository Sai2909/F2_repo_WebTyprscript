function GetData(obj) {
    for (var property in obj) {
        console.log("".concat(property, ":").concat(obj[property]));
    }
}
console.log("prdoct details:");
GetData({ Name: "tv", Price: 55, InStock: true }); //in these type we can pass own type of data
console.log("prdoct Employee:");
GetData({ Name: "samsung", Designation: "ui" });
console.log("use logn");
GetData({ UserName: "sai kiran", Age: 34, Email: "saikiranmanchala2000@GMAIL.COM" });
