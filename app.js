'use strict';
var welcomingMessage;
var userName=prompt("What is your name?");
console.log(userName);
if (userName==""){
    alert("invalid");
};
var gender=prompt("Inter your gender: male / female");
console.log(gender);
if (gender==""){
    alert("invalid");
};
var age=prompt("Inter your age:");
if ( age==""){
    alert("invalid");
}else if(age<=0 ){
    alert("your age less than or equal zero!!!")
};

var skip=confirm("Are you want to skip the welcoming message!!");
if(gender== "male"){
alert("Mr "+userName) 
}
else if (gender=="female"){
    alert("Ms "+userName)
}
else{
    alert(userName) 
};
let Exit=confirm("Are you sure to exit of this page?");
let learning=confirm("Are you a fast learner person?");
let intersting=confirm("Are you interested in learning programming?");
let answers=["bayan","raneim","abdullah","male","female",15,18,19,20,25,33];
for(let i=0;i<answers.length;i++){
    console.log(answers[i]);
};
