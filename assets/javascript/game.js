// game with 4 pokeballs and random result between 19-120
// every pokeball needs random number between 1-12
// generate that random number every win or loss to each pokeball
// when clicking any Pokeball, it should add previous result until equal to random number until equal to random starting number
// if greater than random result, start game over and add a loss
// if equal to random result, add win to counter 

var startingNum;
var loss = 0;
var win = 0;
var prevNum = 0;


var startGame = function () {
    $(".balls").empty();

    startingNum = Math.floor(Math.random() * 120) + 19;


    $("#result").html('Your number: ' + startingNum);

    for (var i = 0; i < 4; i++) {

        var randomNum = Math.floor(Math.random() * 12 + 1)

        var ballBtn = $("<div>");
        ballBtn.attr({
            "class": 'pokeballs',
            "data-random": randomNum
        });
        $(".balls").append(ballBtn);
    }
}

startGame();

$("document").on('click', ".pokeballs", function () {
    var num = parseInt($(this).attr('data-random'));
    prevNum += num;
    console.log(prevNum);
    if (prevNum > startingNum) {
        loss--;
        $("#loss").html(loss);
        startGame();

    }
    else if (prevNum === startingNum) {
        win++;
        $("#win").html(win);
        startGame();
    }

});



























































// // need variables for pokeballs
// var pokeballNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// var greatballNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// var ultraballNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// var masterballNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// var randomScoreNum = [];

// var wins = 0;
// var losses = 0;

// // generate random number
// var startingNum = Math.floor(Math.random() * 120) + 19;

// console.log(startingNum)
// // show starting number
// document.getElementById("randomNumber").textContent = startingNum;

// // make pokeballs buttons clickable
// $("#pokeball").click(pokeballNum.length * Math.floor(Math.random));

// console.log(pokeballNum)

// // track wins and losses
// document.getElementById("wins").textContent = "wins: " + wins;
// document.getElementById("losses").textContent = "losses: " + losses;
// document.getElementById("totalScore").textContent = randomScoreNum;

// // keep track of total score when clicking pokeball buttons 

