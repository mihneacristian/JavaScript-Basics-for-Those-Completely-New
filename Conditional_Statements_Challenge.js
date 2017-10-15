var Score = 0;
var Question1 = prompt("What's 2+2 ?");
if (Question1 ==="4") {
        Score = Score + 1;
        alert("Right answer !")
} else {
        Score = Score;
        alert("Wrong answer !");
}

var Question2 = prompt("What's 3+2 ?");
if (Question2 ==="5") {
        Score = Score + 1;
        alert("Right answer !")
} else {
        Score = Score;
        alert("Wrong answer !");
}

var Question3 = prompt("What's 5+9 ?");
if (Question3 ==="14") {
        Score = Score + 1;
        alert("Right answer !")
} else {
        Score = Score;
        alert("Wrong answer !");
}
if (Score === 2 || Score === 3) {
        document.write("You passed the test !");
}
else {
        document.write("Pleas try again !" + " Your test score is " + Score);
}