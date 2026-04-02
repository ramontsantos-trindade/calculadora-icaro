let display;

window.onload = function () {
    display = document.getElementById("display");

}
    let numero1 = "";
    let operador = "";
    let numero2 = "";

    function addNumero(num) {
        display.value += num;
    }

    function addOperador(op) {
        numero1 = display.value;
        operador = op;
        display.value = "";
    }

    function calcular() {
        numero2 = display.value;

        if (operator === "+") {
            display.value = Number(numero1) + Number(numero2);
        }

        if (operator === "-") {
            display.value = Number(numero1) - Number(numero2);
        }

        if (operator === "*") {
            display.value = Number(numero1) * Number(numero2);
        }

        if (operator === "/") {
            display.value = Number(numero1) / Number(numero2);
        }

    }


function limpar() {
        display.value = "";
        numero1 = "";
        numero2 = "";
        operador = "";
    }
