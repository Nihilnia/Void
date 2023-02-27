$('document').ready(() => {
    console.log("Ready to fly.");


    var f = 0;
    var daText = "Bla, bla, bla..";
    var speed = 50;

    var daElement = $('#deneme');

    function typeIt() {
        if (f < daText.length) {
            document.querySelector("#deneme").innerHTML += daText.charAt(f);
            f++;
            setTimeout(typeIt, speed);
        }
    };

    typeIt();



    //     var projectThumb = $('.projectThumb');


    // //read the pic' s name

    //     projectThumb.hover(function () {
    //         var thatPic = 
    //         $('img').css('height', "100px"); //lmao
    //     }, function () {
    //         $('img').css('height', "10px"); //lmao
    //     })
});