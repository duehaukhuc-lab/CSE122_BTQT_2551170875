let currentInput = "";
let openParenthesis = false;

function appendChar(char) {
    if (char === '()') {
        if (!openParenthesis) {
            currentInput += '(';
            openParenthesis = true;
        } else {
            currentInput += ')';
            openParenthesis = false;
        }
    } else {
        currentInput += char;
    }
    
    document.getElementById('expression').innerText = currentInput;
}

function clearAll() {
    currentInput = "";
    openParenthesis = false;
    document.getElementById('expression').innerText = "";
    document.getElementById('result').innerText = "0";
}

function calculateResult() {
    if (!currentInput) return;

    try {
        let formattedInput = currentInput
            .replace(/×/g, '*')
            .replace(/÷/g, '/');

        let evalResult = eval(formattedInput);

        document.getElementById('result').innerText = evalResult;
    } catch (error) {
        document.getElementById('result').innerText = "Lỗi";
    }
}