// console.log("Hello JavaScript!");
// console.log("Apna College");

// let keyword and const keyword

// operator precendence-> ()  **  *,/,%  +,-

let a = 10;
let b = 11;
console.log("sum is: ", a+b);

let pencilPrice = 10;
let erasorPrice = 5;
// let output = "The total price  is:" + pencilPrice + erasorPrice + "Rupees. "
// console.log("The total price  is:", pencilPrice + erasorPrice, "Rupees. ");
// back ticks ``

console.log(`The total price is : ${pencilPrice + erasorPrice} Rupees.`);

// Template literals->`${}`;

// Conditional Statements
console.log("before my if statement");
let age = 3;
if(age>=18){
    console.log("you can vote");
    console.log("you can drive");
    let a = 5;
    console.log(5 * a);
}
else if(age<18){
    console.log("wrong");
}
// if(age > 18){
//     console.log("you cannot vote");
// }


console.log("after my if statement");
let firstName = "Mukteshwar"
if(firstName=="Mukteshwar"){
    console.log(`Welcome ${firstName}`);
}

// Ques. practice
let colour = "red";

// Traffic Light System
if(colour == "red"){
    console.log("stop! Light color is red");
}
if(colour== "yellow"){
    console.log("slow down light color is yellow");
}
if(colour == "green"){
    console.log("go light color is green");
}

let month = "january";
if (month === "january"){
    console.log("winter is here")
}
else if(month === "april"){
    console.log("summer is here");
}

let operator ="sum";
if(operator == "sum"){
    console.log("sum is true");
}
else{
    console.log("sum is not true");
}

// Practice Ques.->Popcorn prices
let price = 250 ;
if(price==250){
    console.log("size is: 'XL'");
}
else if(price ==250){
    console.log("size is: 'L'");
}
else if(price == 21){
    console.log("size is: 'M'");
}
else if(price == 3){
    console.log("size is:'S'");
}

let marks = 45;
if (marks>=63){
    console.log("Pass");
    if(marks>=80){
        console.log("Grade: 0");
    } else{
        console.log("Grade: A");
    }
}else{
    console.log("Better luck next time!");
}


// Practice Ques.->
let str ="amit";
if((str[0]==='a') && (str.length>3)){
    console.log(" it is good string");
}
else{
    console.log("it is not a good string");
}

// 2->
let num =12;
if((num%3 === 0) && (num+1 == 15) || (num-1 == 11)){
    console.log("safe");
} else{
    console.log("unsafe");
}

// truthy & falsy->
if(true){
    console.log("It has true value");
}
else{
    console.log("It has false value");
}

if(-1){
    console.log("It has true value");
}else{
    console.log("it has false value");
}


// Switch statement->
let color =" red";

switch(color="yellow"){
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("slow down");
        break;
    case "green":
        console.log("GO");
         break;
    default:
        console.log("Broken Light");
}

// Practice Ques->
let day=1;
switch(day){
    case 1 :console.log("Monday");
            break;
    case 2 : console.log("Tuesday");
            break;
    case 3 : console.log("Wednesday");
            break;
    case 4 : console.log("Thursday");
            break;
    case 5 : console.log("Friday");
            break;
    case 6 : console.log("Saturday");
            break;
    case 7 : console.log("Sunday");
            break;
}

// Alert-> displays an alert msg on the page.
// alert("something is wrong terror attack possibility");
// console.error("this is error msg");
// console.warn("this is a warning msg");

//  & Promot->displays a dialogue box that asks uset for some input.
// prompt("enter your name");
// let secondName =prompt("enter your name");
// console.log(firstName);

let startName= prompt("enter first name");
let lastName = prompt("enter last name");
// console.log("Welcome", startName, lastName,"!");
let msg = "Welcome" +" " + startName+ " " + lastName+"!";
alert(msg);

let num1 =32;
let num2 =47852;
if((num1 % 10)==(num2%10)){
    console.log("numbers have the same last digit which is ",num1%10);
}
else {
    console.log("numbers don't have the same last digit");
}