b = document.getElementById("bin").value;
c = document.getElementById("cot");
d = document.getElementById("dec");
h = document.getElementById("hex");
function bin() {
    console.log(b);
    var temp = parseInt(b, 2);
    b = temp.toString(2);
    c.value = temp.toString(8);
    d.value = temp.toString();
    h.value = temp.toString(16);
}
function cot() {
    var temp = parseInt(c.value, 8);
    b.value = temp.toString(2);
    c.value = temp.toString(8);
    d.value = temp.toString();
    h.value = temp.toString(16);
}
function dec() {
    var temp = parseInt(d.value);
    b.value = temp.toString(2);
    c.value = temp.toString(8);
    d.value = temp.toString();
    h.value = temp.toString(16);
}
function hex() {
    var temp = parseInt(h.value, 16);
    b.value = temp.toString(2);
    c.value = temp.toString(8);
    d.value = temp.toString();
    h.value = temp.toString(16);
}