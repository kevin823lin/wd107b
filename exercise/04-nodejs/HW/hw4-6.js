function minGap(a) {
    min = a[1] - a[0];
    for (i = 1; i < a.length - 1; i++) {
        if (a[i + 1] - a[i] < min)
            min = a[i + 1] - a[i];
    }
    return min;
}

array = [1, 3, 6, 7, 10];
console.log(minGap(array));