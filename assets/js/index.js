$(document).ready(function () {
    var wordCharrecters = ["wild wild west", "horse", "pony ", "cow", "hat", "gun", "old town"];
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var userGuesses = [];
    var computerPick;
    var correctGuesses = [];
    var wrongGuesses = [];
    var finishedGame = false;
    var wins = 0;
    var losses = 0;

    function startGame() {
        computerPick = wordCharrecters[Math.floor(Math.random() * wordCharrecters.length)].split('');
        console.log(computerPick);
        displayWord()
    }

    function displayWord() {
        var displayOutput = ""
        for (var i = 0; i < computerPick.length; i++) {
            if (correctGuesses.indexOf(computerPick[i]) === -1) {
                displayOutput += "_ ";
            } else {
                displayOutput += computerPick[i];
            }
        }
        document.getElementById('currentWord').textContent = displayOutput;
        console.log(displayOutput);
    }
    function correctGuess(key) {

        correctGuesses.push(key);
        displayWord();
    }
    startGame();
    document.onkeyup = function (event) {
        var key = event.key;
        if (alphabet.indexOf(key) > -1 && userGuesses.indexOf(key) === -1) {
            userGuesses.push(key);
            if (computerPick.indexOf(key) > -1) {
                correctGuess(key)

            } else {

                if (wordCharrecters.indexOf(key) === -1) { // letter is NOT in the word
                    wrongGuesses.push(key); // update letters guessed
                    userGuesses.getElementById.innerHTML = wrongGuesses.join('');
                    //What happens when we guess incorrectly?
                }
                console.log(userGuesses);
                //Game happens if they pressed a valid letter
            }
        }

        document.getElementById("pressKeyTryAgain").style.cssText = displayOutput;
        document.getElementById("gameover-image").style.cssText = displayOutput;
        document.getElementById("youwin-image").style.cssText = displayOutput;


        function refreshScreen() {
            document.getElementById("gameWins").innerText = wins;
            document.getElementById("pressKeyTryAgain").ineerText = losses;
        }
        var guessingWordText = "";
        for (var i = 1; i < wordGuessed.length; i++) {
            guessingWordText += wordGuessed[i];
        };
        document.getElementById("currentWord").innerText = displayOutput;

        document.getElementById("guessesLeft").innerText = displayOutput;

        function evaluateGuess() {

            for (var i = 0; i < wordCharrecters[computerPick].length; i++) {
                if (wordCharrecters[computerPick][i] === key) {
                }
            }

            if (positions.length <= 0) {
                guessesLeft--;
            } else {
                for (var i = 0; i < positions.length; i++) {
                    wordGuessed[positions[i]] = letter;
                }
            };
            function checkWin() {
                if (wordGuessed.indexOf("_") === -1) {
                    document.getElementById("youwin-image").style.cssText = displayOutput;
                    alert('you win!');
                    document.getElementById("pressKeyTryAgain").style.cssText = displayOutput;
                    alert('try again');
                    wins++;
                    finishedGame = true;
                }
            }

            function checkLoss() {
                if (guessesLeft <= 0) {
                    document.getElementById("gameover-image").style.cssText = "display: game over =(";
                    alert('game over =(');
                    document.getElementById("pressKeyTryAgain").style.cssText = "display: try again";
                    alert('try again');
                    losses++;
                    finishedGame = true;
                }
            }

            function makeGuess() {
                if (guessesLeft > 0) {
                    if (userGuesses.indexOf(key) === -1) {
                        userGuesses.push(key);
                        evaluateGuess();
                    }
                }
            }

            document.onkeyup = function (event) {
                console.log("Event", event.key);
                if (finishedGame) {
                    startGame();
                    finishedGame = true;
                    reset;
                } else {
                    console.log(keyCode);
                    if (event.keyCode >= 65 && event.keyCode <= 90) {
                        KeySound.play();
                        makeGuess(event.key.toUpperCase());
                        refreshScreen();
                        checkWin();
                        checkLoss();
                    }
                }
            }
        }
    };
})
