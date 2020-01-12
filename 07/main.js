var arr = []

for (var i = 0; ; i++) {
    var pr = prompt("Enter something")
    arr[i] = pr
    console.log(arr)
    if (pr == 0) break //получилось только так. с pr == false не выходит из цикла :/
}