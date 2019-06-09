function filter357(min, max) {
    array = [];
    for (i = min; i <= max; i++) {
        if (i % 3 != 0 && i % 5 != 0 && i % 7 != 0)
            array.push(i);
    }
    return array;
}

console.log(filter357(5, 15));