function find(a, index) {
    a.sort();
    min = 0, max = a.length - 1, middle = Math.floor((min + max) / 2);
    while (a[middle] != index) {
        if (a[middle] > index)
            max = middle - 1;
        else
            min = middle + 1;
        if (min > max) {
            return -1;
            break;
        }
        middle = Math.floor((min + max) / 2);
    }
    if (min <= max)
        return middle + "\n";
}

array = [1, 4, 5, 9, 8], search = 5;
console.log(find(array, search));