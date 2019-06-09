function random(n, a, b) {
    array = [];
    for (i = 0; i < n; i++) {
        array[i] = a + Math.random() * (b - a);
    }
    return array;
}

console.log(random(3, 10, 20));