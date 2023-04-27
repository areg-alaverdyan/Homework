//1. Declare 2 variables a and b, such that a &gt; b, and define values for them. Output their
const a=14
const b=5
a+b
const a=14
const b=5
a-b
const a=14
const b=5
a*b
const a=14
const b=5
a/b
const a=14
const b=5
a%b


//2. Print your name and age in the following format: “My name is ____, I am ____
let name=prompt('Your name?');
let age=prompt('Your age?');
console.log(`My name is ${name}, I am ${age}`);

//3. Declare a variable with defined value. Print the last digit of the number.
let x=78756
x%10
// also with x%78750 I think it's wrong anyway cause it will not be practilac with big numbers
let x = -122
x%10
// also with x%-120 the same thing
let x=8
x**1
//
let x=0
x**1

//4. Check whether a given number is negative. Print “yes”, if it is negative, print “no”
let x = 0
if(x>=0) {
    console.log("no")
} else {
    console.log("yes")
};
//
let x = -71
if(x>=0) {
    console.log("no")
} else {
    console.log("yes")
};
//
let x = 89
if(x>=0) {
    console.log("no")
} else {
    console.log("yes")
};
//
let x =-71
    switch(x>=0) {
        case(true):
        console.log('no');
        break;
        default:
            console.log('yes');
    };
    // for example with switch

    //5.For a given three digit number calculate the sum of its digits.

    let value = 912
    let a = value%10
    let b = value - a
    let c = b/10
    let d = c%10
    let e = c - d
    let f = e/10
    console.log(a+d+f)

    //
    let value = 505
    let a = value%10
    let b = value - a
    let c = b/10
    let d = c%10
    let e = c - d
    let f = e/10
    console.log(a+d+f)
    //
    let value = 306
    let a = value%10
    let b = value - a
    let c = b/10
    let d = c%10
    let e = c - d
    let f = e/10
    console.log(a+d+f)

    // maybe too long but it's working
