function check(){
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var correct = 0;

    if (question1 == "Apple"){
        correct++;
    }
    if (question2 == "Short Message Service"){
        correct++;
    }
    if (question3 == "Portable document format"){
        correct++;
    }
    if (question4 == "Relational Data Base Management System"){
        correct++;
    }
    if (question5 == "Structured Query Language"){
        correct++;
    }

var messages = ["Great job!","This is better","you really need to do better"];
var pictures =["https://media3.giphy.com/media/T9uDcSZiPElXQopwWr/giphy.gif","https://media0.giphy.com/media/1yjGZ7Qq0ymk563i4s/giphy.gif?cid=ecf05e47szkklszo2x5ypauy58x7jem8qgma163djw74yx7a&rid=giphy.gif","https://media0.giphy.com/media/g0ytv1B0fFe04Onfhy/giphy.gif?cid=ecf05e473jsg2rkmnyql2dofc2ul8cluh4kk81gggawbnmdx&rid=giphy.gif"]; 

var range;
if (correct < 1) {
    range = 2;
}
if (correct > 0 && correct  < 3){
    range = 1;
}
if (correct > 2){
    range = 0;
}
    document.getElementById("after_submit").style.visibility ="visible";


    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("number_correct").innerHTML = "you got " + correct +"correct.";
    document.getElementById("picture").src = pictures[range]; 
}