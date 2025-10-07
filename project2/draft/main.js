"use strict"

/* IC: Declare global variables to store user-entered information and results here */
let choice, amount;

/* IC: We have set up the form buttons for you, 
as well as the code that will clear the output once the user has successfully filled out the form 
and the program has given them final output (instead of telling them they need to correct something). 

We have set things up so that the output area is cleared, but the form remains filled out. 
This is to make it easier to test your project with slightly different versions of information 
rather than having to fill out the whole form every time. */


document.getElementById("submit").addEventListener("click", processForm);

document.getElementById("reset").addEventListener("click", function () {
    clear();
    document.getElementById("submit").toggleAttribute("hidden");
    document.getElementById("reset").toggleAttribute("hidden");
});


function processForm() {

    /* IC: Assign values from your form inputs here, remembering:
        1) Always work with the value property from the form input

        2) Form data always comes in as type String. You MAY want to convert some inputs to Numbers, 
        but you ALSO may need to analyze some numeric inputs as text 
        (for example, if you need to check how many digits were entered, or only look at certain digits)

        3) You can do additional pre-processing here, if needed, 
        but everything related to validating form input or providing results should go 
        into the other functions provided below OR by functions that those other functions call (which you may also write)
    */

    item1 = document.getElementById("item1").value;
    item2 = document.getElementById("item2").value;
    zipcode = Number(document.getElementById("zipcode").value);

    /* IC: This code looks for a true or false for whether the data is valid. 
    It only continues to evaluate the answers if the data is valid. 

    You DO NOT need to modify any code between here and the end of the function, 
    nor should you, unless you have a good reason. 
    
    All versions of this project can be completed WITHOUT 
    modifying the code from this comment to the end of the function, 
    so you should attempt to work with that restriction! */

    let evaluationCompleted = false;

    if (validateData()) {
        evaluationCompleted = evaluateAnswers();
    }

    if (evaluationCompleted) {
        document.getElementById("submit").toggleAttribute("hidden");
        document.getElementById("reset").toggleAttribute("hidden");
    } else {
        rule();
    }
}


/* IC: In this function, do any validation with validate the data was correctly entered in general, not for specific cases. 
Return false if you have told the user that they need to correct something. 
Return true if all data is valid. 
We have provided you with the basic constraints for the data, 
but you may improve the validation as a bonus 
(as long as you don't mess up our ability to test every option in your evaluateAnswers function!) */

function validateData() {
    let valid = true;

    if (item1 == item2) {
        output("Please select two different items.")
        valid = false;
    }
    
    if (isNaN(zipcode)) {
        output("Please enter a number.")
        valid = false;
    }

    if (document.getElementById("zipcode").value.length <5) {
        output("Please enter a five-digit zip code.")
        valid = false;
    }

    return valid;
}

/* Takes two menu items and checks if theyre burgers and fries; returns False by default */ 
function comboCheck(check1, check2) {
    let combo = false;

    if (check1 == "Burger" && check2 == "Fries") { 
        combo = true
    } 
    if (check1 == "Fries" && check2 == "Burger") { 
        combo = true
    } 

    return combo;
} 


/* takes a menu item, returns its price */
function priceItem(menuItem) {
    let price = 0; 

    if (menuItem == "Pizza") {
        price = 4
    }
    if (menuItem == "Salad") {
        price = 3
    }
    if (menuItem == "Burger") {
        price = 5
    }
    if (menuItem == "Fries") {
        price = 2
    }

    return price; 
}


/* IC: In this function, use conditional logic to figure out if 
the user's input meets all of the constraints that we have provided. 

Return false if you have told the user that they need to correct something. 
Return true if all data is valid. 

NOTE: Although the focuses of this project are conditional logic and function returns, 
you may need to create additional variables, do some calculations, 
and/or do some String manipulation in order to successfully complete your project! */

function evaluateAnswers() {

    let total = 0; 

    if (zipcode >= 801 && zipcode <= 851) {     // check for Virgin Islands zipcodes
        output("Unfortunately, ordering is not yet available in the Virgin Islands.");
        return false;
    }

    if (comboCheck(item1, item2)){ // did user input a burger combo?
        total = 5.75 // discount is hardcoded for now since no qty input yet...

        /* hardcoded the item names to avoid awkard wording dependent on input order */
        output ("Your Burger and Fries combo will be delivered to your address on file in " + zipcode + 
        ". The total price will be $" + total + ". This includes a 25% discount for our current special combo.")
    
    } else {  
        total = priceItem(item1) + priceItem(item2)
        output ("Your " + item1 + " and " + item2 + " combo will be delivered to your address on file in " + 
        zipcode + ". The total price will be $" + total.toPrecision(3) + ".")
    }

    /* Reference: https://www.w3schools.com/js/js_number_methods.asp */

    return true;
}

/* TIP: The above two functions are written using different techniques for communicating success or failure. 
In your project, we will be looking for consistency -- 
i.e., choose ONE of these methods (early returns, or tracking the success in a variable) 
and use it throughout your project! */
