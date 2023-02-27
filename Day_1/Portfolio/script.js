$('document').ready(() => {
    console.log("Ready to fly.");


    var f = 0;
    var daText = "Bla, bla, bla..";
    var speed = 150;


    function typeIt() {
        if (f < daText.length) {
            document.querySelector(".carousel-caption").innerHTML += daText.charAt(f);
            f++;
            setTimeout(typeIt, speed);
        }
    };

    typeIt();


    // try later
    //     var xElementz = $('div.carousel-caption h5');
    //     if (xElementz.attr('class', ':active')) {
    //         console.log("active now");
    //     };

    //     var projectThumb = $('.projectThumb');


    // //read the pic' s name

    //     projectThumb.hover(function () {
    //         var thatPic = 
    //         $('img').css('height', "100px"); //lmao
    //     }, function () {
    //         $('img').css('height', "10px"); //lmao
    //     })
});