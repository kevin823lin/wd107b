function insert(a, item) {
    a.push(item);
    a.sort();
}

array = [1, 2, 5, 6, 7];
insert(array, 3);
console.log(array);