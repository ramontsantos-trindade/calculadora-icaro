function appendtodisplay(value) {
    document.getElementById('display').value += value
}

function resultado() {
    const display = document.getElementById('display')
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = 'errado'
    }
}

function Remover() {
    const display = document.getElementById('display')
    display.value = display.value.slice(0,-1)
}
function resultado() {
    let display = document.getElementById("display");

    try {
        let conta = display.value.replace(",", "."); // pra funcionar com vírgula
        let resultado = eval(conta);

        if (resultado == 67) {
            display.value = "feijao com farinha";
        } else {
            display.value = resultado;
        }

    } catch {
        display.value = "Erro";
    }
}