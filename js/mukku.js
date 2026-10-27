console.log("before my if statement");
  let age = 21;
  if(age>=22){
    console.log("You can vote");
    console.log("You can use phone");
  }
  else{
    console.log("You cannot vote.");
    console.log("You cannot use phone.");
    let a = 5;
    console.log(5*a);
  }
  console.log("after my if statement");

  let tC = "red";
  if(tC="red"){
    console.log("stop");
  }

  let month = "april";
if (month === "january"){
    console.log("winter is here")
}
else if(month === "april"){
    console.log("summer is here");
}

let marks = 95;
if(marks<90){
    console.log("Grade A++");
}else if (marks>= 95){
    console.log("Grade A");
}

let size = 'XL';
if(size > 'L'){
    console.log("price is rs. 25");
}

let marks1 = 45;
if (marks1>=93){
    if (marks1 >=0)
        console.log("0");
    else
        console.log("A");
}
else{
    console.log("Better luck next time.");
}

let marks2 = 73;
if(marks>33 && marks<=80 || !(false)){
    console.log("pass");
}

let str ="amit";
if(str[0]==='a' && str.length>3){
    console.log("goog string");
}else{
    console.log("not a good string");
}

let nom = 12;
if((nom%3 === 0) && (nom+1 == 15) || (nom-1 == 11)) {
    console.log("safe");
}

let color = "red";
switch(color){
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("slow down");
        break;
    case "green":
        console.log("GO")      ;
        break;
    default:
        console.log("Broked Light")  ;
}

let day = 0;
switch(day){
    case 1:
        console.log("Today is sunday.");
        break;
    case 2:
        console.log("Today is Monday");
        break;
    case 3:
        console.log("Today is Tuesday.");
        break;
    case 4:
        console.log("Today is Wednesday.");
        break;
    case 5:
        console.log("Today is Thursday.");
        break;
        
    case 6:
        console.log("Today is Friday.");
        break;
    case 7:
        console.log("Today is Saturday.");
        break;
    default:
       console.log("wrong day.");
}

console.error("this is an error msg");
console.warn("this is warning msg");

let firstName= (prompt("enter your firstName."));
let lastName = (prompt("enter your lastName"));
// console.log(firstName + lastNamemu);
let msg = "Welcome" + " " + firstName + " " + lastName + "!" ;
alert(msg);