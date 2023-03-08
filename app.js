'use strict';
// var welcomingMessage;
// var userName = prompt("What is your name?");
// console.log(userName);

// var gender = prompt("Inter your gender: male / female");
// console.log(gender);

// var age = prompt("Inter your age:");
// if (age <= 0) {
//     alert("your age less than or equal zero!!!")
// };

// var skip = confirm("Are you want to skip the welcoming message!!");
// if (gender == "male") {
//     alert("Mr " + userName)
// }
// else if (gender == "female") {
//     alert("Ms " + userName)
// }
// else {
//     alert(userName)
// };


//lab 6//


let userAnswer = [];

function asks(question) {
    return prompt(question);
};
function answersSaving(arr) {

    let Exit = asks("Are you sure to exit of this page?");
    let learning = asks("Are you a fast learner person?");
    let intersting = asks("Are you interested in learning programming?");
    arr.push(Exit, learning, intersting);
};


function validating(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "") {
            arr[i] = "invalid";

        }
    }
};

function printer(arr){
    for( let i=0;i<arr.length;i++){
        console.log(arr[i])
    }

}
asks(userAnswer);
answersSaving(userAnswer);
validating(userAnswer);
printer(userAnswer);
