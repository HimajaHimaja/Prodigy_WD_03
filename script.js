
    var count = 1;
var Symbol = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];
var GameOver = 0;

function win() {
    var Win = 0;
    if (
        Symbol[0][0] == Symbol[0][1] &&
        Symbol[0][0] == Symbol[0][2] &&
        Symbol[0][2] != 0
    ) {
        Win = 1;
    } else if (
        Symbol[1][0] == Symbol[1][1] &&
        Symbol[1][0] == Symbol[1][2] &&
        Symbol[1][2] != 0
    ) {
        Win = 1;
    } else if (
        Symbol[2][0] == Symbol[2][1] &&
        Symbol[2][0] == Symbol[2][2] &&
        Symbol[2][2] != 0
    ) {
        Win = 1;
    } else if (
        Symbol[0][0] == Symbol[1][0] &&
        Symbol[1][0] == Symbol[2][0] &&
        Symbol[2][0] != 0
    ) {
        Win = 1;
    } else if (
        Symbol[0][1] == Symbol[1][1] &&
        Symbol[1][1] == Symbol[2][1] &&
        Symbol[2][1] != 0
    ) {
        Win = 1;
    } else if (
        Symbol[0][2] == Symbol[1][2] &&
        Symbol[1][2] == Symbol[2][2] &&
        Symbol[2][2] != 0
    ) {
        Win = 1;
    } else if (
        Symbol[0][0] == Symbol[1][1] &&
        Symbol[1][1] == Symbol[2][2] &&
        Symbol[2][2] != 0
    ) {
        Win = 1;
    } else if (
        Symbol[0][2] == Symbol[1][1] &&
        Symbol[1][1] == Symbol[2][0] &&
        Symbol[2][0] != 0
    ) {
        Win = 1;
    }
    return Win;
}

function ResetGame() {
    count = 1;
    Symbol = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    GameOver = 0;
    document.getElementById("displayo").innerText = "";
    document.getElementById("displayx").innerText = "";
    for (let i = 0; i < 9; i++) {
        document.getElementById(`div${i + 1}`).innerHTML = "&nbsp;";
    }
}

function fill(BoxNumber) {
    if (
        document.getElementById(`div${BoxNumber + 1}`).innerText == "X" ||
        document.getElementById(`div${BoxNumber + 1}`).innerText == "O" ||
        GameOver == 1
    ) {
        return;
    }
    if (count % 2 == 0) {
        Symbol[parseInt(BoxNumber / 3)][parseInt(BoxNumber % 3)] = "O";
        document.getElementById(`div${BoxNumber + 1}`).innerHTML = "O";
    } else {
        Symbol[parseInt(BoxNumber / 3)][parseInt(BoxNumber % 3)] = "X";
        document.getElementById(`div${BoxNumber + 1}`).innerHTML = "X";
    }
    if (win() == 1) {
        GameOver = 1;
        if (count % 2 == 0) {
            document.getElementById("displayo").innerText = "Winner";
            document.getElementById("displayx").innerText = "Runner";
        } else if (count % 2 == 1) {
            document.getElementById("displayo").innerText = "Runner";
            document.getElementById("displayx").innerText = "Winner";
        }
        return;
    }
    count = count + 1;
    if (count > 9) {
        GameOver = 1;
        document.getElementById("displayo").innerText = " Game Draw";
        document.getElementById("displayx").innerText = " Game Draw";
    }

    // Computer's move
    if (!GameOver && count % 2 == 0) {
        setTimeout(computerMove, 500);
    }
}

function computerMove() {
    let emptyCells = [];
    for (let i = 0; i < 9; i++) {
        if (
            document.getElementById(`div${i + 1}`).innerText != "X" &&
            document.getElementById(`div${i + 1}`).innerText != "O"
        ) {
            emptyCells.push(i);
        }
    }

    if (emptyCells.length > 0) {
        let randomIndex = Math.floor(Math.random() * emptyCells.length);
        fill(emptyCells[randomIndex]);
    }
}
