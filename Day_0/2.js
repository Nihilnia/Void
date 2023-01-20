var Gloria = true;

if (Gloria) {
    console.log("The Mass");
} else {
    console.log("Not gonna work.");
}



var _Gloria = {
    Purpose: "Unknown",
    Age: 0
};


switch (_Gloria.Purpose) {
    case "aasd":
        console.log("asd");
        break;

    case "aasdasd":
        console.log("asdasd");
        break;

    case "aasddsg":
        console.log("asdsdf");
        break;

    case "Unknown":
        console.log("Aight.");
        break;

    default:
        console.log("Not.");
}



switch (new Date().getDay()) {
    case 0:
        console.log("Today is the sunday.");
        break;
    case 1:
        console.log("Today is the monday.");
        break;
    case 2:
        console.log("Today is the tuesday.");
        break;
    case 3:
        console.log("Today is the wednesday.");
        break;
    case 4:
        console.log("Today is the thursday.");
        break;
    case 5:
        console.log("Today is the friday.");
        break;
    default:
        console.log("Today is the saturday.");
}