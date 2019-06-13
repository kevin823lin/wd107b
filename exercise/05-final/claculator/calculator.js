function claculator() {
    var a = document.getElementById("a");
    var op = document.getElementById("op");
    var b = document.getElementById("b");
    var result = document.getElementById("result");
    result.innerText = eval(a.value + op.value + b.value);
}
function num(n) {
    var a = document.getElementById("a")
    var b = document.getElementById("b")
    if (document.form.ab[0].checked) {
        if (a.value == 0)
            a.value = n;
        else
            a.value += n;
    }
    else {
        if (b.value == 0)
            b.value = n;
        else
            b.value += n;
    }
}
function clean() {
    console.log("clear");
    var a = document.getElementById("a")
    var b = document.getElementById("b")
    a.value = 0;
    b.value = 0;
}