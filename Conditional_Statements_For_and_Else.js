var UserQuestion = prompt("What is 2+2 ?");
    if (UserQuestion === "4") {
        alert("Good job ! " + UserQuestion + " is the correct answer !" );
        document.write("You are a math genius !");    
} else {
        alert("Sorry, that is not the right answer :(");
        document.write("Please try again !");
};