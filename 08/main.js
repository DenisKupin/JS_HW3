var i = 0;
while (true) {
    var m = Math.random()
    if (m > 0.9) {
        alert(++i);
        console.log(m)
        break;
    }
    else i++;
}