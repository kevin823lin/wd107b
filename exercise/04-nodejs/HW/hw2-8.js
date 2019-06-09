function isPrime(a) {
    if (a == 0 || a == 1)
        console.log(false);
    else {

        for (var i = 2; i <= Math.floor(Math.sqrt(a)) + 1; i++) {
            if (i == Math.floor(Math.sqrt(a)) + 1) {
                console.log(true);
                break;
            }
            if (a % i == 0) {
                console.log(false);
                break;
            }
        }
    }
}
isPrime(17);