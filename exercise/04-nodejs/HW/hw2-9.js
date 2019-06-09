function countPrime(a, b) {
    var count = 0;
    for (var i = a; i <= b; i++) {
        if (i != 0 && i != 1) {

            for (var j = 2; j <= Math.floor(Math.sqrt(i)) + 1; j++) {
                if (j == Math.floor(Math.sqrt(i)) + 1) {
                    count++;
                    break;
                }

                if (i % j == 0) {
                    break;
                }
            }
        }
    }
    return count;
}
console.log(countPrime(3, 7));