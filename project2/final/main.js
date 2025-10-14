"use strict"



document.getElementById("submit").addEventListener("click", processForm);

document.getElementById("reset").addEventListener("click", function () {
    clear();
    document.getElementById("submit").toggleAttribute("hidden");
    document.getElementById("reset").toggleAttribute("hidden");
});


function processForm() {

    item1 = document.getElementById("item1").value;
    item2 = document.getElementById("item2").value;
    zipcode = Number(document.getElementById("zipcode").value);

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


/******** function validateData () *********
  
 DESCRIPTION
 Validates user input data against system constraints. 
 Outputs message instructing user on how to correct errors. 
 
 PARAMETERS
 n/a
 
 RETURNS
 valid - Boolean value that indicates whether form data has been successfully validated

*********/

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

    if ((document.getElementById("zipcode").value.length !=5) || (document.getElementById("zipcode").value == "     ")) {
        output("Please enter a five-digit zip code.")
        valid = false;
    }
    return valid;
}


/********* function comboCheck(check1, check2) ******
 
 DESCRIPTION
 Takes two menu items and checks if theyre burgers and fries
 
 PARAMETERS
 check1 - string value of menu item name from item select field #1
 check2 - string value of menu item name from item select field #2

 RETURNS
 combo - boolean value indicating whether the two selected menu items are a burger-and-fries combo

 *********/ 

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

/******* function priceItem(menuItem) ********
 
 DESCRIPTION
 Given a menu item, returns its price. 
 
 PARAMETERS
 menuItem - string value for menu item name
 
 RETURNS
 price - number corresponding to the provided item's price

 */

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


/* IC: determine if user input meets all the constraints. 
Return false if they need to correct something. 
Return true if all data is valid. 
 */

/******* function evaluateAnswers *******
  
 DESCRIPTION
 Evaluates input to determine if delivery is available in user's location; 
 Calculates order total and outputs confirmation to user.
  
 PARAMETERS
 n/a
  
 RETURNS
 A boolean value indicating if order processed correctly. 
 */

function evaluateAnswers() {

    let total = 0; 

    if (zipcode >= 801 && zipcode <= 851) {     // check for Virgin Islands zipcodes
        output("Unfortunately, ordering is not yet available in the Virgin Islands.");
        return false;
    }

    clear();

    if (comboCheck(item1, item2)){ // did user input a burger combo?
        total = 5.75 // discount is hardcoded for now since no qty input yet...

        /* hardcoded the item names to avoid awkard wording dependent on input order, output zip as string */
        output ("Your Burger and Fries combo will be delivered to your address on file in " + document.getElementById("zipcode").value + 
        ". The total price will be $" + total + ". This includes a 25% discount for our current special combo.")
    
    } else {  
        total = priceItem(item1) + priceItem(item2)
        output ("Your " + item1 + " and " + item2 + " combo will be delivered to your address on file in " + 
        document.getElementById("zipcode").value + ". The total price will be $" + total.toPrecision(3) + ".")
    }

    /* Reference: https://www.w3schools.com/js/js_number_methods.asp */

    return true;
}

