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