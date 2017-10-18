/*var x = 0;
while (x < 5000) {
        x = x+1
        document.write("Loop")
}*/

var counter = 0;
while (counter < 5000000) {
        counter = counter+1;
        var RandomNumber = Math.floor(Math.random() * 50) +1;
        document.write(RandomNumber + "  ");
}