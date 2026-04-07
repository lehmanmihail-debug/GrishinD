function calculate() {
let first = parseFloat(document.getElementById('first').value);
let second = parseFloat(document.getElementById('second').value);
let operation = document.getElementById('operation').value;
let spanres = document.getElementById('result');


switch (operation) {
    case '+':
        result = first + second;
        break;
    case '-':
        result = first - second;
        break;
    case '*':
        result = first * second;
        break;
    case '/':
        result = first / second;
        break;
    default:
    result = "Нет таких значений" ;
}
spanres.textContent = result;
}
function input() {
    (document.getElementById('first').value) = '';
    (document.getElementById('second').value) = '';
    document.getElementById("result").textContent = '';
}
const btndel = document.getElementById("btndel")
btndel.addEventListener("click", input)

const button = document.getElementById("mybtn")
mybtn.addEventListener("click", calculate)


