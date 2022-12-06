var pwd = "sai";
function PrintList(success, failure) {
    if (pwd == "sai") {
        success();
    }
    else {
        failure();
    }
}
PrintList(function () {
    console.log("login success");
}, function () {
    console.log("login failure");
});
