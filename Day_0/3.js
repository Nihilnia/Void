//for
for (var f = 0; f <= 100; f++) {
    console.log("postpone then.")
}

//for- in
var ex = ["G", "L", "O", "R", "I", "A"];
for (var f in ex) {
    console.log(f);
}

//foreach
ex.forEach(function (f, soWhat) {
    console.log("index:" + f, soWhat);
});