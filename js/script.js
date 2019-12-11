let currentPlayer = "O";
let turns = 0;
let gameEnd = false;

function performLogic(buttonId, tileId):
    $(buttonId).hide();
    $(tileId).show(currentPlayer);

function turns():
    if(currentPlayer == "O"):
        currentPlayer = "X";
    else:
        currentPlayer = "O"    

let box1 = "";
let box2 = "";
let box3 = "";
let box4 = "";
let box5 = "";
let box6 = "";







$("#tile1").click(function() {
    performLogic("#button1","#tile1");
});

$("#tile2").click(function() {
    performLogic("#button2","#tile2");
});

$("#tile3").click(function() {
    performLogic("#button3","#tile3");
});

$("#tile4").click(function() {
    performLogic("#button4","#tile4");
});

$("#tile5").click(function() {
    performLogic("#button5","#tile5");
});

$("#tile6").click(function() {
    performLogic("#button6","#tile6");
});

$("#tile7").click(function() {
    performLogic("#button7","#tile7");
});

$("#tile8").click(function() {
    performLogic("#button8","#tile8");
});

$("#tile9").click(function() {
    performLogic("#button9","#tile9");
});

