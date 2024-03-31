var isPlayer1 = false;
var currentPlayer = 1;
var gameFinished = false;

async function joinGame() {
    try {
        alert("you joined the game");
        isPlayer1 = false;
    }
    catch (error) {
        console.error(error);
        alert("error joining the game");
    }
}
async function makeMove(x, y) {
    if (gameFinished)
        return;
    try {
        updateBoard(x,y);
        currentPlayer=(currentPlayer === 1) ? 2:1;
        var curPlayer=document.getElementById("current-player");
        curPlayer.innerHTML= (currentPlayer===1)?"X":"O";

    }
    catch (error) {
        console.error(error);
        alert("error making a move");
    }
}
function updateBoard(x,y){
    var cell_id="cell"+x+y;
    var cell=document.getElementById(cell_id);
    cell.innerHTML=(currentPlayer===1)?'X':'O';
}
