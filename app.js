'use strict';
var welcomingMessage;
var userName=prompt("What is your name?");
console.log(userName);
var gender=prompt("Inter your gender: male / female");
console.log(gender);
var age=prompt("Inter your age:");
age<=0 ? alert("your age less than or equal zero!!!"):console.log(age);
var skip=confirm("Are you want to skip the welcoming message!!");
if(gender== "male"){
alert("Mr "+userName) 
}
else if (gender=="female"){
    alert("Ms "+userName)
}
else{
    alert(userName) 
}
