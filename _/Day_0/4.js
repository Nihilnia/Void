function sayHello() {
    console.log("Hello mf.");
};


for (var f = 0; f <= 20; f++) {
    sayHello();
}

//simplers
function poww(a = 2, b = 3) {
    console.log(`Pow ${a}, ${b} = ${a ** b}`);
}

var result = poww(2, 4);
//def parameters
var result = poww();




//find the birthyear, current year - age

function fBirthyear(fAge) {
    var theDate = new Date();
    return theDate.getFullYear() - fAge;

}


console.log(fBirthyear(29));



//args
function createALoop() {
    if (arguments.length == 1) {
        for (f = arguments[0]; f <= arguments[1]; f += arguments[2]) {
            console.log(f, "Wie man feuer macht");
        };
    } else {
        for (f = arguments[0]; f <= arguments[1]; f++) {
            console.log(f, "Wie man feuer macht");
        };
    }

};

createALoop(1, 100);



//last example; sum all the given numbers

function sumEm() {
    result = 0;
    for (var f = 0; f < arguments.length; f++) {
        result += arguments[f];
    };

    return result;
};

console.log(sumEm(1, 2123, 323423423))

if (true) {
    //do this
} else if{
    //do that
}else {
    //fuck it
}




var Gloria = {
    a = 1,
    b = 2,
    c = 0
}
switch (Gloria.c) {
    case 1:
        //do this
        break;

    case 2:
        //do that
        break;

    default:
    //fuck it
}



function Gloria() {
    console.log("Pass: ");
}

Gloria();





function Gloria(a) {
    console.log("Pass: ", a);
}

Gloria();

























