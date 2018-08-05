




//list of variables

// var arrCrystalWhite = [ "Crystal-1-W", 
//                         "Crystal-2-W",
//                         "Crystal-3-W", 
//                         "Crystal-4-W", 
//                         "Crystal-5-W", 
//                         "Crystal-6-W", 
//                         "Crystal-7-W", 
//                         "Crystal-8-W"
//                         ];

// var arrCrystalBlack = [ "Crystal-1-B", 
//                         "Crystal-2-B",
//                         "Crystal-3-B", 
//                         "Crystal-4-B", 
//                         "Crystal-5-B",   
                    // ];

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

  

function initialize() {

$(".cPic").remove();  // clear out any previous pictures on a reintialize

// 1. randomly pick 4 crystal images and get their names in an array  *********

//alternate between white and black background pictures, just thought it would be cool. 

var arrIndexNum = [];
var arrCrystalImage = [];

for (var i = 0; i < 4; i++) {

        // if last used background is black use white    this could be rewritten to take out the else. 
    if (blackBack) {
        
        // if the index array is empty pick the first random number

        if (arrIndexNum.length === 0) {
            indexNum = Math.floor((Math.random() * arrCrystalWhite.length));
            arrIndexNum.push(indexNum);
        // if the index array has numbers, select an unused index number at random
        } else {

        do {
        indexNum = Math.floor((Math.random() * arrCrystalWhite.length));   // took out -1 at the end
        
        } while (arrIndexNum.indexOf(indexNum) != -1 );
        arrIndexNum.push(indexNum);
    }

        //if the last background was white, use black this time
    } else {

        if (arrIndexNum.length === 0) {
            indexNum = Math.floor((Math.random() * arrCrystalBlack.length));
            arrIndexNum.push(indexNum);
        } else {

        do {
        indexNum = Math.floor((Math.random() * arrCrystalBlack.length));
        
        } while (arrIndexNum.indexOf(indexNum) != -1 );        
        arrIndexNum.push(indexNum);
    }
    
    }

//create random computer target and append to the page
//show wins, losses and current score on page
}
    
// put the random pictures selected into the arrCrystal Image Array

    for (var i =0; i < 4; i++) {

        if (blackBack) {
            var x = parseInt(arrIndexNum[i]);
            arrCrystalImage.push(arrCrystalWhite[x]);

        } else {
            var x = parseInt(arrIndexNum[i]);
            arrCrystalImage.push(arrCrystalBlack[x]);
        }
    }


if(blackBack) {
    blackBack = false; 
} else {
    blackBack = true;
}
//1. arrCrystalImage now has all of the image names loaded

 for (var i = 0; i< 4; i++) {
    $(arrCrystalImage[i]).appendTo($("#crystals"));
 }

 










}



function getChoice() {
    
    //create on click functions for the crystals
//grab the value of the crystal that is clicked - maybe use $(this)
//add the value to the current score and render that to the page


}

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



initialize();




























