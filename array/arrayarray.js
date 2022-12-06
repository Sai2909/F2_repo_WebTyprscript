var student = [
    { Name: "saikiran", Score: 94, group: "maths", vill: ["pothram", "chinnapalle"] },
    { Name: "shiva", Score: 92, group: "phy", vill: ["rajaram", "jagitial"] },
    { Name: "prasad", Score: 66, group: "maths", vill: ["mallial", "thatipelli"] },
    { Name: "ravali", Score: 34, group: "che", vill: ["chennaram", "rammannapet"] },
    { Name: "kiran", Score: 67, group: "maths", vill: ["maddutla", "gollapelli"] }
];
var obj = student.filter(function (obj) { return obj.group == "maths"; });
for (var _i = 0, obj_1 = obj; _i < obj_1.length; _i++) {
    var item = obj_1[_i];
    //console.log(`${item.Name} and ${item.Score} and village ${item.vill}` );
    console.log("".concat(item.Name, " - ").concat(item.Score, " - ").concat(item.vill.join("->")));
}
