var UserGender = prompt("What is your gender ?");
        UserGender = UserGender.toLowerCase();

var UserAge = prompt("How old are you ?");

if (UserGender === "male" && UserAge >= 18) {
        alert("Congrats ! You qualify for our FREE offer !");
} else {
        alert("Sorry, please come back again for future offers.");
}
console.log("YAY!");
