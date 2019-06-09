function sd(a) {
    avg = 0, sd = 0;
    a.forEach(element => {
        avg += element;
    });
    avg /= a.length;
    a.forEach(e => {
        sd += Math.pow(e - avg, 2);
    });
    sd = Math.sqrt(sd / 5);
    return sd;
}

array = [1, 2, 3, 4, 5];
console.log(sd(array));