const board = ['', '', '', '', '', '', '', '', '']
let currentPlayer = "X"
let gameOver = false
const winCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
 
 
const cells = document.querySelectorAll(".cell")
cells.forEach(cell => {
    cell.addEventListener("click", clicker)
    })
 
function clicker(event) {
    // const index =
    const index = event.target.getAttribute('data-index') //получаем индекс ячейки из атрибута data-index
    if (board[index] === '' && !gameOver) {
        board[index] = currentPlayer
        event.target.textContent = currentPlayer //отображение хода на поле
    }
 
    if (checkWin()) {
        alert(currentPlayer + "Победил!")
        gameOver = true
    }
    else if (board.every(cell => cell !== "")) {
        alert("Ничья")
        gameOver = true
    }
    else {
        currentPlayer = currentPlayer === "X" ? "O" : "X"
    }
}
 
function checkWin() {
    return winCombinations.some(combination => {
        return combination.every(index => board[index] === currentPlayer)
    })
}