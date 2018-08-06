




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

//toggle the background style for the next initialization

if(blackBack) {
    blackBack = false; 
    } else {
    blackBack = true;
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
        $("#accumValue").html("Current Score: " + choiceValue).attr("class","h2").attr("class", "statusNums");
        
            if (choiceValue > targetValue) {
                alert("you loose!");
                youLose();

            } else if (choiceValue === targetValue){ 
                
                alert("you win!");
                youWin();
            }

    });
}






function youWin() {

wins++;
$("#wins").html("Wins: " +  wins);
var mainMsg = $("<div>").text("You Win!").attr("id","big-msg");
$(mainMsg).appendTo("#bigSplash");

var keepGoing = $("<p>").text("click to continue").attr("class","continue").attr("id","go");
$(keepGoing).appendTo("#bigSplash");

var stopGoing = $("<p>").text("click to quit").attr("class","continue").attr("id","stop");;
$(stopGoing).appendTo("#bigSplash");

$("#go").on("click", function() {
    reset();
    //playGame();
});
$("#stop").on("click", function() {
    return;

});

}

function youLose() {
    losses++;
    $("#losses").html("Losses: " +  losses);
    var mainMsg = $("<div>").text("You Loose!").attr("id","big-msg");
    $(mainMsg).appendTo("#bigSplash");
    
    var keepGoing = $("<p>").text("click to continue").attr("class","continue").attr("id","go");
    $(keepGoing).appendTo("#bigSplash");
    
    var stopGoing = $("<p>").text("click to quit").attr("class","continue").attr("id","stop");;
    $(stopGoing).appendTo("#bigSplash");
    
    $("#go").on("click", function() {
        reset();
        // playGame();
    
    });
    $("#stop").on("click", function() {
        return;
    
    });


}

function reset() {
    choiceValue = 0;
    $("#accumValue").html("Current Score: " + choiceValue);
    $("#big-msg").remove();
    $(".continue").remove();
    playGame();
}


function initialize() {
 wins = 0, losses = 0;
 $("#wins").html("Wins: " + wins).attr("class","h3");
 $("#losses").html("Losses: " + losses).attr("class","h3");
$("#accumValue").html("Current Score: " + 0).attr("class","h3");
 
}



initialize();
playGame();
//evalChoice();




























