function mean(a) {
    avg = 0;
    a.forEach(element => {
        avg += element;
    });
    avg /= a.length;
    return avg;
}

array = [1, 2, 3, 4, 5];
console.log(mean(array));