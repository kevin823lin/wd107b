var str = "";
function binary(a) {
    if (a > 0) {
        if (a % 2 == 0)
            str = 0 + str;
        else {
            str = 1 + str;
            a -= 1;
        }
        a /= 2;
        binary(a);
    }
    if (str == "")
        str = "0";
    return (str);
}
console.log(binary(6));