function funcoes_numeros(value) {
    document.getElementById('display').value += value;
}

function limpa() {
    document.getElementById('display').value = '';
}

function deleta() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calcular() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Erro';
    }
}
