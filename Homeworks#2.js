//1. Declare variable. Initialize it with the value, which shows temperature in degrees Celsius.
//Print its equivalent in degrees Fahrenheit. To convert temperatures in degrees Celsius to
//Fahrenheit use the following formula: °C * 1.8 +32 = °F .

let tempFarenh = 1
let tempCels=prompt("Add Celsius value");
tempFarenh = (tempFarenh * tempCels * 1.8) + 32;
tempFarenh

2. Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.

let numberOne=14
let numberTwo=3
if (numberOne%numberTwo===0 || numberTwo%numberOne ===0) {
    console.log(1)
} else {
    console.log(0)
};

//3. Given any number between 1 and 12. Print the name of the respective month.

let monthNum = +prompt("Add month number");
  if (monthNum === 1) {
    console.log("January")
} else if (monthNum === 2) {
    console.log("February")
} else if (monthNum === 3) {
    console.log("March")
} else if (monthNum === 4) {
    console.log("April")
} else if (monthNum === 5) {
    console.log("May")
} else if (monthNum === 6) {
    console.log("June")
} else if (monthNum === 7) {
    console.log("July")
} else if (monthNum === 8) {
    console.log("August")
} else if (monthNum === 9) {
    console.log("September")
} else if (monthNum === 10) {
    console.log("October")
} else if (monthNum === 11) {
    console.log("November ")
} else if (monthNum === 12) {
    console.log("December")
  } else { console.log("Maybe it's other planet")};

  //

  let monthNum = 10
switch(monthNum){
    case 1:
    console.log("January");
    break;
    case 2:
    console.log("February");
    break;
    case 3:
    console.log("March");
    break;
    case 4:
    console.log("April");
    break;
    case 5:
    console.log("May");
    break;
    case 6:
    console.log("June");
    break;
    case 7:
    console.log("July");
    break;
    case 8:
    console.log("August");
    break;
    case 9:
    console.log("September");
    break;
    case 10:
    console.log("October");
    break;
    case 11:
    console.log("November");
    break;
    case 12:
    console.log("December");
    break;
    
};

  //4. Given three numbers. Find the maximum one.

let numbOne = 14
let numbTwo = 8
let numbThree = 14
  if (numbOne >= numberTwo && numbOne >= numbThree) {
    console.log(numbOne + " is maximum");
} else if (numbTwo >= numberOne && numbTwo >= numbThree){
    console.log(numbTwo + " is maximum")
} else {
    console.log (numbTwo + " is maximum")
};

//5. Given a number. Print its absolute value. (without Math.abc)

let number = 0
if(number < 0) {
    console.log(number * -1);
} else {
    console.log(number)
};

//6. Declare three variables. Two of them are the bounds of a range. Print “In bounds”, if the
//third number is in the range, otherwise print “Out of bounds”.

let rangeOpen = 10
let rangeClose = 19
let inputNum = 9
if (rangeOpen <= inputNum && rangeClose >= inputNum) {
    console.log ("In bounds")
} else {
    console.log ("Out of bounds")
};