

$(document).ready(function () {
    $('#search').click(function () {
        // The user selects the 'program type' from the drop down.
        var programType = $('[name="program-type"]').val();
        // If the user selects no program, use an empty string.
        var programTypeSelector = '';
        if (programType != '') {
            programTypeSelector = "." + programType;
        }

        // The user selects the 'program type' from the drop down.
        var educationLevel = $('[name="education-level"]').val();
        // If the user selects no education level, use an empty string.
        var educationLevelSelector = '';
        if (educationLevel != '') {
            educationLevelSelector = "." + educationLevel;
        }

        // Combine the 2 selectors in order to apply the active class only where it needs to be.
        var combinedSelector = programTypeSelector + educationLevelSelector;

        // If the combinedSelector is empty, add the active class to all the images.
        if (combinedSelector === "") {
            $('.logos img').addClass('active');
        }
        // Otherwise, if the combinedSelector is not empty, add the active class only to the selected images.
        else {
            $('.logos img').removeClass('active');
            $(combinedSelector).addClass('active');
        }
    });
});








// THE HARDER WAY (RAN THROUGH WITH MARIUS ON 7/11 MENTOR SESSION)


	/*--- Step 1 - Defining global variables —*/
	/*— Step 2 - Defining functions ---*/
	/*--- Step 3 - Using functions ---*/


/*--- Step 1 - Defining global variables —*/
// This variable will be the logos that are in color.
// var showColor = '';
// This variable will be the logos that are faded.
// var showFade = '';

//The variable defines the value of the aci variable.
// var aci = 'scholarship program';
//The variable defines the value of the acm variable.
// var acm = '';
//The variable defines the value of the afe variable.
// var afe = '';

//The variable defines the value of the program type.
// var programType = '';

////The variable defines the value of the education type.
// var educationType = '';



/*— Step 2 - Defining functions ---*/

// Show what the program type is.
// function whatProgram() {
// if aci = 
// }


// Show what the education level is.
// function whatEducation() {
// }

// This function cross references both what the program is, and what the education is.
// function crossReference() {
// }



/*--- Step 3 - Using functions ---*/

// $('#search').click {
// 	$('sa').val
// }














/*
-----JQUERY GUIDE FROM QUIZ-APP-----
    $('.end-quiz').on('click', '.try-again-button', function () {
        $('.start-quiz').show();
        $('.quiz-questions').hide();
        $('.end-quiz').hide();
	    // Reset variables to start quiz again.
	    currentQuestionNumber = 0;
	    numberOfCorrectAnswers = 0;
	});


*/


/*

$('aci-color').fadein();
$('aci-color').fadeout();
$('aci-fade').fadein();
$('aci-fade').fadeout();

$('acm-color').fadein();
$('acm-color').fadeout();
$('acm-fade').fadein();
$('acm-fade').fadeout();

$('afe-color').fadein();
$('afe-color').fadeout();
$('afe-fade').fadein();
$('afe-fade').fadeout();

*/

