var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = []; 
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
                       'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 
    var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; 
    guessesSoFar.push(userGuess); 
       
    var html = "<h1>The Psychic Game</h1>" + "<br>" +
    "<p>Guess what letter I'm thinking of</p>" + "<br>" +
    "<p>Total Wins: " + 
    wins + 
    "</p>" + "<br>" +
    "<p>Total Losses: " +
    losses + 
    "</p>" + "<br>" +
    "<p>Guesses Left: " +
    guessesLeft + 
    "</p>" + "<br>" +
    "<p>Your Guesses so far: " +
    guessesSoFar +
    "</p>"
    ;

    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 9; 
        guessesSoFar.length = 0; 
    }
    else if (guessesLeft === 0){
        losses++;
        guessesLeft = 9;
        guessesSoFar.length = 0;
    }
    else if (userGuess !== computerGuess){
        guessesLeft--; 
    }  

    document.querySelector('#game').innerHTML = html;
}