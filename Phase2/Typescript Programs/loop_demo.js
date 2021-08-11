var num2 = [10, 20, 2321, 473];
console.log(num2);
console.log("using in Loop");
for (var i in num2) {
    console.log("index is " + i);
}
for (var _i = 0, num2_1 = num2; _i < num2_1.length; _i++) {
    var n = num2_1[_i];
    console.log("value is " + n);
}
