


$( document ).ready(function() {

//list of variables

//couldn't figure out how to pass the image name by itself to the jquery append an image line, so had to use this ugly array to show the right string

var arrCrystalBlack = [
    '<img src="assets/images/Crystal-1-B.png" class="cPic">',
    '<img src="assets/images/Crystal-2-B.png" class="cPic">',
    '<img src="assets/images/Crystal-3-B.png" class="cPic">',
    '<img src="assets/images/Crystal-4-B.png" class="cPic">',
    '<img src="assets/images/Crystal-5-B.png" class="cPic">'
    ];

var arrCrystalWhite = [
    '<img src="assets/images/Crystal-1-W.png" class="cPic">',
    '<img src="assets/images/Crystal-2-W.png" class="cPic">',
    '<img src="assets/images/Crystal-3-W.png" class="cPic">',
    '<img src="assets/images/Crystal-4-W.png" class="cPic">',
    '<img src="assets/images/Crystal-5-W.png" class="cPic">',
    '<img src="assets/images/Crystal-6-W.png" class="cPic">',
    '<img src="assets/images/Crystal-7-W.png" class="cPic">',
    '<img src="assets/images/Crystal-8-W.png" class="cPic">' 
    ];


var arrCrystalImage = [];
var arrCrystalValue = [];
var arrIndexNum = [];
var indexNum;
var wins = 0, losses = 0, gamesPlayed = 0;
var targetValue;
var useArray;
var blackBack = true;
var colorArr;
var choiceValues = []; //may not need this
var score;
var choiceValue = 0;
var thisVal = 0;
var winnings = 0;





function playGame() {

$(".cPic").remove();  // clear out any previous pictures on a replay
score = 0;

// 1. randomly pick 4 different crystal images and get their names in an array. I want differnt crystals each time to make it interesting  *********

//alternate between white and black background pictures, just thought it would be cool. 

var arrIndexNum = [];
var arrCrystalImage = [];

for (var i = 0; i < 4; i++) {

    // if last used background is black use white   
    if (blackBack) {
    colorArr = arrCrystalWhite;
    } else {
    colorArr = arrCrystalBlack;
    }

// change all the styles to the right background color here





    do {
    indexNum = Math.floor((Math.random() * colorArr.length));   

    } while (arrIndexNum.indexOf(indexNum) != -1 );
    arrIndexNum.push(indexNum);
    arrCrystalImage.push(colorArr[indexNum]);
}


//arrCrystalImage now has all of the image names loaded and an id tag of "pick-1 through pick-4"

for (var i = 0; i< 4; i++) {
$(arrCrystalImage[i]).appendTo($("#crystals"));
}

//attach an id tag to each picture and assign a random value to the picture

//this is the random number generator
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//pick 4 non-repeating values at random to assign to each crystal
var numRand;
var arrRandom = [];

for(var i = 0; i < 4; i++){
    do {
    numRand = getRandomInt(2,12)
    } while (arrRandom.indexOf(numRand) != -1 );
    arrRandom.push(numRand);
}

//add the id as the value for each picture

$('.cPic').each(function(index, elem) {
$(this).attr('id',arrRandom[index]);  //Mickey mouse way since I couldn't figure out how to retrieve data-value
//$(this).attr("value",arrRandom[index]); //This is what I wanted to use.
});

//create random computer target and append to the page


targetValue = getRandomInt(19,120)
$("#targetNum").html("Target Score: " + targetValue).attr("class","h3");

evalChoice();
}





function evalChoice() {

    $(".cPic").on("click", function(){
        thisVal = parseInt($(this).attr('id')); 

        choiceValue += thisVal;
        $("#accumValue").html("Current Score: " + choiceValue).attr("class","h2");
        
            if (choiceValue > targetValue) {

                youLose();

            } else if (choiceValue === targetValue){ 
                
                youWin();
            }

    });
}





function youLose() {

    losses++;

    $("#losses").text("Losses: " + losses);

    //put up the lose message

    $("#you-lose").show();
    $("#go").show();
    $("#stop").show();

    keepGoing();

}


function youWin() {

    wins++;
    winnings++;

    $("#wins").text("Wins: " + wins);
    $("#winnings").text("Winnings: " + winnings);
    $("#you-win").show();
    $("#go").show();
    $("#stop").show();

    keepGoing();
    
}

function keepGoing() {

    $("#go").on("click", function() {
        reset();
        playGame();
    });

    $("#stop").on("click", function() {
        killGame();
    });
}

// function killGame() {
//     return;
// }


function reset() {
    choiceValue = 0;
    $("#accumValue").html("Current Score: " + choiceValue);
    
    $("#you-win").hide();
    $("#you-lose").hide();
    $("#go").hide();
    $("#stop").hide();


    //toggle the background color


    if(blackBack) {
            blackBack = false; 
            } else {
            blackBack = true;
            }

    playGame();
}


function initialize() {

 wins = 0, losses = 0; winnings = 0;

 $("#you-win").hide();
 $("#you-lose").hide();
 $("#go").hide();
 $("#stop").hide();

 $("#wins").html("Wins: " + wins).attr("class","h3");
 $("#losses").html("Losses: " + losses).attr("class","h3");
 $("#winnings").html("Winnings: " + winnings).attr("class","h3");
 $("#accumValue").html("Current Score: " + 0).attr("class","h3");
 
}



initialize();
playGame();
//evalChoice();

});


























