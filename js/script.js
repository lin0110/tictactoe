let curntPlayer = "O";
let turns = 0;
let gameEnd = false;

function performLogic(buttonId, tileId) {
    if (gameEnd === false) {
        $(buttonId).hide();
        $(tileId).text(curntPlayer);
        checkVerticalWins();
        checkHoritzontalWins();
        checkDiagonalWins();
        gameTurns(); 
        checkTurn();
    }
}
function gameTurns() {
    if (curntPlayer == "O") {
        curntPlayer = "X";
        turns += 1;
    }
    else {
        curntPlayer = "O";
        turns += 1;
    }
}
function checkTurn() {
    if (turns === 9) {
        $("h1").text("Draw");
        gameEnd = true;
    }
}
function requirment(a, b, c) {
    if ($(a).text() === curntPlayer && $(b).text() === curntPlayer && $(c).text() === curntPlayer) {
        return true;
    }
    else {
        return false;
    }
}
function checkVerticalWins() {
    if (requirment("#tile1", "#tile4", "#tile7")) {
        gameEnd = true;
        $("h1").text(curntPlayer + " Win!");
    }
    else if (requirment("#tile2", "#tile5", "#tile8")) {
        gameEnd = true;
        $("h1").text(curntPlayer + " Win!");
    }
    else if (requirment("#tile3", "#tile6", "#tile9")) {
        gameEnd = true;
        $("h1").text(curntPlayer + " Win!");
    }
}

function checkHoritzontalWins() {
    if (requirment("#tile1", "#tile2", "#tile3")) {
        gameEnd = true;
        $("h1").text(curntPlayer + " Win!");
    }
    else if (requirment("#tile4", "#tile5", "#tile6")) {
        gameEnd = true;
        $("h1").text(curntPlayer + " Win!");
    }
    else if (requirment("#tile7", "#tile8", "#tile9")) {
        gameEnd = true;
        $("h1").text(curntPlayer + " Win!");
    }
}

function checkDiagonalWins() {
    if (requirment("#tile1", "#tile5", "#tile9")) {
        gameEnd = true;
        $("h1").text(curntPlayer + " Win!");
    }
    else if (requirment("#tile3", "#tile5", "#tile7")) {
        gameEnd = true;
        $("h1").text(curntPlayer + " Win!");
    }
}


$("#tile1").click(function () {
    performLogic("#button1", "#tile1"); 
});

$("#tile2").click(function () {
    performLogic("#button2", "#tile2"); 
});

$("#tile3").click(function () {
    performLogic("#button3", "#tile3");
});

$("#tile4").click(function () {
    performLogic("#button4", "#tile4");    
});

$("#tile5").click(function () {
    performLogic("#button5", "#tile5");
});

$("#tile6").click(function () {
    performLogic("#button6", "#tile6"); 
});

$("#tile7").click(function () {
    performLogic("#button7", "#tile7");
});

$("#tile8").click(function () {
    performLogic("#button8", "#tile8");  
});

$("#tile9").click(function () {
    performLogic("#button9", "#tile9");
});

