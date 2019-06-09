var str = "";
for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= 9; j++) {
        str += i + "*" + j + "=" + j * i + "\t";
    }
    str += "\n";
}
console.log(str);