const num1 = document.getElementById('first'); 
const num2 = document.getElementById('second');
const selector = document.getElementById('operation');
const spanres = document.getElementById('result')

function calculate() {
    let first = parseFloat(num1.value);
    let second = parseFloat(num2.value);
    let operation = selector.value
    let result

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
console.log(result)
spanres.textContent = result;
}
const button = document.getElementById("mybtn")
mybtn.addEventListener("click", calculate)

