// Theme: Zoo Animals/possible add images/sound
// variables 

var wordRandom = ["bobcat","bear","cougar","hyena","monkey","elephant","rattlesnake"];
var randomWord = "";
var lettersinWord = [];
var letterBlanks =0;
var blankFills = [];
var wrongLetters =[];

//Score Reset to begin
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

//Game Functions

function startGame (){
    randomWord = wordRandom[Math.floor(Math.random()* wordRandom.length)];
    lettersinWord = randomWord.split("");
    letterBlanks = lettersinWord.length;

// Reset to begin with
    guessesLeft=9;
    wrongLetters=[];
    blankFills=[];


// For Loop to run through so that each random word has the appropriate number of blanks 
// for the player to see
    for (var i = 0; i<letterBlanks; i++) {
        blankFills.push("_");
    }

// Show results to screen
document.getElementById("wordToGuess").innerHTML = blankFills.join(" ");
document.getElementById("numGuesses").innerHTML = guessesLeft;
document.getElementById("winCount").innerHTML = winCount;
document.getElementById("lossCount").innerHTML = lossCount;

console.log(randomWord);
console.log(lettersinWord);
console.log(letterBlanks);
console.log(blankFills);
}

function checkLetters(letter) {
    var isInWord=false;

    for (var i = 0; i<letterBlanks; i++) {
        if(randomWord[i]==letter) {
            isInWord=true;
        }
    }
    if(isInWord){
        for (var i=0; i<letterlanks; i++) {
            if(randomWord[i] == letter) {
                blankFills[i] = letter;
        }
    }
}

    else {
        wrongLetters.push(letter);
        guessesLeft--
    }
}

    console.log(blankFills);


    function roundComplete(){
        console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + "| Guesses Left" + guessesLeft);


        document.getElementById("numGuesses").innerHTML = guessesLeft;
        document.getElementById("wordToGuess").innerHTML = blankFills.join(" ");
        document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");


    if(isInWord.toString() == blankFills.toString()){
        winCount++;
        alert("You Win!");

        document.getElementById("winCount").innerHTML = winCount;

        startGame();

    }

    else if(guessesLeft == 0) {
        lossCount++;
        alert("You lose!");

        document.getElementById("lossCount").innerHTML =lossCount;

        startGame();

    }
}

startGame();

document.onkeyup = function(event){
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();

    console.log(letterGuessed);
}
