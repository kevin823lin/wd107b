function factor(n) {
    array = [];
    i = 2;
    while (n != 1) {
        if (n % i == 0) {
            array.push(i);
            n /= i;
        }
        else
            i++;
    }
    return array;
}

console.log(factor(45));