for (var i = 1; i <= 10; i++) {
    console.log(sqrt(i));
    console.log(Math.sqrt(i));
    console.log();
}

function sqrt(n) {
    for (var i = 0; i <= 100; i += 0.0001) {
        if (i * i >= n) {
            return i;
        }
    }
}