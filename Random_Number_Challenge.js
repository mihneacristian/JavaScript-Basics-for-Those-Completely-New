var UserNumber = prompt("Pick a random number");
UserNumber = parseInt(UserNumber);
UserNumber = Math.floor(Math.random() * UserNumber) +1;
alert ("Your random generated number is " + UserNumber);
console.log("YAY");
