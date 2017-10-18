function DiceRoll (a) {
        var Dice = Math.floor(Math.random() * a) +1;
        alert ("You rolled a " + Dice);
};
DiceRoll(6);
DiceRoll(12);
DiceRoll(20);
