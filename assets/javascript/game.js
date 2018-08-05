




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
var wins, losses;
var targetValue;
var useArray;
var blackBack = true;
var colorArr;
var choiceValues = []; //may not need this
var score;
var choiceValue = 0;
var thisVal = 0;




function setPictures() {

$(".cPic").remove();  // clear out any previous pictures on a reintialize

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
   numRand = getRandomInt(1,12)
} while (arrRandom.indexOf(numRand) != -1 );
arrRandom.push(numRand);
}

//add the id and val to each picture

$('.cPic').each(function(index, elem) {
$(this).attr('id',arrRandom[index]);  //Mickey mouse way since I couldn't figure out how the hell to retrieve data-value
//$(this).attr("value",arrRandom[index]); //This is what I wanted to use.


});


//create random computer target and append to the page


$("#targetNum").html(targetValue = getRandomInt(19,129));
}









function evalChoice() {


    $(".cPic").on("click", function(){
        thisVal = parseInt($(this).attr('id')); 

        choiceValue += thisVal;
        $("#accumValue").html("Current Value: " + choiceValue);
        
        if(choiceValue === targetValue){ 
            //youWin();
            alert("you win!");
        } else if (choiceValue > targetValue) {
            //youLoose();
            alert("you loose!");
        

    }

    








//show wins, losses and current score on page
//create on click functions for the crystals



// $(".cPic").on("click", function(){
//     var thisVal = $("#pick-0").data("value");
//     alert("V: " + thisVal);
// });


// $('#myElId').data('nameYourData', { foo: 'bar' });

// $('#myElId').data('nameYourData', 15);

// var myData = $('#myElId').data('nameYourData');
//grab the value of the crystal that is clicked - maybe use $(this)
//add the value to the current score and render that to the page




// $('#myElId').data('nameYourData', { foo: 'bar' });

// $('#myElId').data('nameYourData', 15);
// var myData = $('#myElId').data('nameYourData');



// $('#myElId').data('nameYourData', { foo: 'bar' });


// var myData = $('#myElId').data('nameYourData');

function scoreChoice() {
//if current score is equal to the target number, then we win
//alert that the user has won
//wins++
//call the win page
//call a reset function

//if current score is greater than target score, you lose
//alert that they have lost
//losses++
//reset function
}


function showWin() {
// ++wins
//show winner splash
//play again
// call reset
}

function showLose() {
// ++losses
// show loser screen
// call reset

}

function reset() {
//generate a new random number
//generate four new crystal values
//reset current score to zero
//append page to show all changes

}



setPictures();
evalChoice();




























