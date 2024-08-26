let button = document.querySelectorAll('.calc_btn:not(:nth-child(1),:nth-child(2), :nth-child(3), :nth-child(19))');
let operator = document.querySelectorAll('.orange');
let gray = document.querySelectorAll('.gray');
let output = document.querySelector('.calc_output');
let equal = document.querySelector('.equal');
let userOperator;
let num1;
let num2;
let result;

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function() {
        output.innerText += button[i].innerText;
    });
}

for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function() {
        num1 = output.innerText;
        num1 = num1.slice(0, -1);
        num1 = parseFloat(num1);
        userOperator = operator[i].innerText;
        output.innerText = '';
    });
}

equal.addEventListener('click', function() {
    num2 = parseFloat(output.innerText);
    output.innerText = '';
    console.log(num1);
    console.log(num2);
    console.log(userOperator);
    switch (userOperator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Error';
    }

    // Convert result to string and check length for rounding
    let resultString = result.toString();
    if (resultString.length > 7) {
        result = parseFloat(result.toFixed(8));
    }
    output.innerText = result;
});

gray[0].addEventListener('click', function() {
    output.innerText = '';
});

gray[1].addEventListener('click', function() {
    let answ = parseFloat(output.innerText) * (-1);
    let answString = answ.toString();
    if (answString.length > 7) {
        answ = parseFloat(answ.toFixed(8));
    }
    output.innerText = answ;
});

gray[2].addEventListener('click', function() {
    let answ = parseFloat(output.innerText) / 100;
    let answString = answ.toString();
    if (answString.length > 7) {
        answ = parseFloat(answ.toFixed(8));
    }
    output.innerText = answ;
});


