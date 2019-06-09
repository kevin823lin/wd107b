function commonFactor(a, b) {
    if (a > b) {
        var temp = a;
        a = b;
        b = temp;
    }
    for (var i = a; i >= 1; i--) {
        if (a % i == 0 && b % i == 0) {
            console.log(i);
            break;
        }
    }
}
commonFactor(12, 15);