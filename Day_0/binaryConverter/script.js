$("document").ready(function () {
    console.log("Ready to go.");

    var inpUserInput = $('#inpUserInput');
    inpUserInput.click(function () {
        inpUserInput.attr('placeholder', '');
    });

    var inpUserResult = $('#inpUserResult');
    inpUserResult.click(function () {
        inpUserResult.attr('placeholder', '');
    });

    var choiceToBinary = $('#choiceToBinary');
    var choiceToText = $('#choiceToText');

    choiceToBinary.click(function () {
        inpUserInput.attr('placeholder', 'Enter your text here..')
        inpUserResult.attr('placeholder', 'Result..');
        inpUserInput.val('');
        inpUserResult.val('');
    });

    choiceToText.click(function () {
        inpUserInput.attr('placeholder', 'Enter your binary here..')
        inpUserResult.attr('placeholder', 'Result..');
        inpUserInput.val('');
        inpUserResult.val('');
    });



    var btnConvert = $('#btnConvert');

    function convertEm(choice) {

        var getUserInput = inpUserInput.val();

        var result = "";

        if (choice == 'textToBinary') {
            console.log("opt 1");
            for (var f = 0; f < getUserInput.length; f++) {
                result += getUserInput[f].charCodeAt(0).toString(2) + " ";
            }
        } else {
            console.log("opt 2");

            result = getUserInput
                .split(' ')
                .map(bin => String.fromCharCode(parseInt(bin, 2)))
                .join('');
        }


        console.log(result);
        inpUserResult.val(result);
    }

    $('#element').click(function () {
        if ($('#radio_button').is(':checked')) { alert("it's checked"); }
    });


    btnConvert.click(function () {

        console.log("asda");

        if ($('#choiceToBinary').is(':checked')) {
            convertEm("textToBinary");
        } else {
            convertEm("ah");
        }
    });
});


