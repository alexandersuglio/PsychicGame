
/////////////////


 var wins = [],
     losses = [],
     makeZero = 0;
      // chosenWordBank = [];

    $("body").keyup(function(event) {

        var computerLetterGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
                "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
            ],
            computerResult = Math.floor(Math.random() * computerLetterGuess.length + 1),
            userLetterGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
                "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
            ],
            userResult = Math.floor(Math.random() * userLetterGuess.length + 1);

        if (event.keyCode < 65 || event.keyCode > 90) return;

        var keyPressed = event.key;

        if (userResult === computerResult) {
            // wins === 0;
            wins++;
            $("#wincounter").text(wins);
            alert("You picked " + keyPressed + " You win!");

        };

        if (userResult != computerResult) {
            // losses ===0;
            losses++;
            $("#losscounter").text(losses);
            // alert("You picked " userLetterGuess[userResult] + "The computer picked " + computerLetterGuess[computerResult] + "You Lose!");
        };

    });

$("button").click(function() {
   $("#wincounter").text(makeZero);  
    $("#losscounter").text(makeZero); 

  });

