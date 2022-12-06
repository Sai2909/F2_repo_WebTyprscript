var data = [
    { Name: "saikiran", Score: 94, group: "maths" },
    { Name: "shiva", Score: 92, group: "phy" },
    { Name: "prasad", Score: 66, group: "maths" },
    { Name: "ravali", Score: 34, group: "che" },
    { Name: "kiran", Score: 67, group: "maths" }
];
var SearchResult = data.filter(function (groupName) {
    return groupName.group == "maths";
});
for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
    var item = data_1[_i];
    var some = [];
    if (item.group == "maths") {
        some.push(item);
        console.log("my output,".concat(item.group, " we need ").concat(item.Name));
    }
    //console.log(`total data==${item.Name} and only maths group==${item.group}`);
}
//console.log(SearchResult);
