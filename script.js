let displayValue = '';

function adicionarDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function limparDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calcularResultado() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}

function raizQuadrada() {
    try {
        displayValue = Math.sqrt(eval(displayValue));
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}

function potencia() {
    try {
        displayValue = Math.pow(eval(displayValue), 2);
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}

function fatorial() {
    try {
        const num = parseInt(eval(displayValue));
        let result = 1;
        if (num >= 0) {
            for (let i = 2; i <= num; i++) {
                result *= i;
            }
            displayValue = result;
            document.getElementById('display').value = displayValue;
        } else {
            document.getElementById('display').value = 'Erro';
        }
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}

function logBase2() {
    try {
        displayValue = Math.log2(eval(displayValue));
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}

function logBase10() {
    try {
        displayValue = Math.log10(eval(displayValue));
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}

function naturalLog() {
    try {
        displayValue = Math.log(eval(displayValue));
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}
