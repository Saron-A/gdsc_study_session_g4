// The selection of elements and their value should be done within the function for these cases

function addition() {
    let operand1 = document.getElementById('operand1').value;
    let operand2 = document.getElementById('operand2').value;
    let result = parseFloat(operand1) + parseFloat(operand2);
    document.getElementById('result').innerText = result;
}

function subtraction() {
    let operand1 = document.getElementById('operand1').value;
    let operand2 = document.getElementById('operand2').value;
    let result = parseFloat(operand1) - parseFloat(operand2);
    document.getElementById('result').innerText = result;
}

function multiplication() {
    let operand1 = document.getElementById('operand1').value;
    let operand2 = document.getElementById('operand2').value;
    let result = parseFloat(operand1) * parseFloat(operand2);
    document.getElementById('result').innerText = result;
}

function division() {
    let operand1 = document.getElementById('operand1').value;
    let operand2 = document.getElementById('operand2').value;
    if (parseFloat(operand2) !== 0) {
        let result = parseFloat(operand1) / parseFloat(operand2);
        document.getElementById('result').innerText = result;
    } else {
        document.getElementById('result').innerText = "Invalid Operation";
    }
}