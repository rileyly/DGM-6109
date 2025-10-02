"use strict"

document.getElementById("submit").addEventListener("click", function () {

    // get fahrenheit from input
    let fahrenheit = Number(document.getElementById("inputF").value);

    // valiidate input

    /* 
    Reference: 
    https://www.w3schools.com/js/js_validation.asp
    https://www.w3schools.com/js/js_logical.asp 
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean 
    https://www.w3schools.com/js/js_datatypes.asp - note: "Using == is not recommended when checking for null." 
    https://www.w3schools.com/jsref/jsref_trim_string.asp

    Challenge debugging process (real-time):
    Yeahhhh haven't sorted out yet how to allow the *actual* number zero while still refusing 
    other annoying falsy input+boolean coercion that's happening...At least not without doing 
    something overly involved like regex for whitespace on the raw input anyway.
    It's probably an obvious solution, but I've been staring at docs for too long and now my brain is fried :'-) 

    isNaN(fahrenheit)
    == null
    document.getElementById("inputF").value = ""
    Or something involving a minlength restriction on inputF? 
    Hmmmmmmmmm
    ...maybe == "0" (instead of == 0)?
    omgggggg it works!!!!! not gonna bother writing a condition for the math nerd "-0F" input case rn tho...

    Test Cases: no input, singlechar whitespace, multichar whitespace, letters, symbols, whole numbers, decimals, 
    0, -0, 01, -01, "0   ", "  0", "    01", chars+whitespace then a number, negative numbers, negative decimals, 32, 
    10 digit number, 10 digit (<1) decimal
    
    "  0  1" doesnt work, "1 2" doesnt work...nor would I want them to, really...

    oh no what if multiple zeroes ("00" case)
    */

    // check that the Number version of input isn't; check that the String version of input isnt 0 + disregard whitespace
    if (!fahrenheit && document.getElementById("inputF").value.trim() != "0") {
        output("Please enter a number.");

        // calculate conversion
    } else {
        output("Temperature (Fahrenheit): " + fahrenheit + " degrees")

        // get user's choice of c or k conversion
        let conversionType = document.getElementById("conversionChoice").value;

        // calculate celsius and store in celsius variable
        let celsius = (fahrenheit - 32) / 1.8;

        // calculate kelvin and store in variable
        let kelvin = (fahrenheit + 459.67) * 5 / 9;

        /*   if (conversionType == "c") {
                output("Temperature (Celsius): " + celsius + " degrees")
            }

            if (conversionType == "k") {
                output("Temperature (Kelvin): " + kelvin + " degrees")
            } */

        /* I prefer if-else because it makes the flow of conditional logic clearer, 
        both when it comes to reading the code later, and also when debugging. 
        i.e. the "else" step makes it obvious to me that something has been ruled out (for some reason...) already */


        /* Reference: https://www.w3schools.com/jsref/jsref_tofixed.asp 
        ..."The toFixed() method converts a number to a string." 
        wait, string?! but the kelvin??? hmmmmmm investigate - TODO */

        // output user's selected conversion, limited to two decimal places
        if (conversionType == "c") {
            output("Temperature (Celsius): " + celsius.toFixed(2) + " degrees")
        } else {
            output("Temperature (Kelvin): " + kelvin.toFixed(2) + " degrees")
        }
    }
});