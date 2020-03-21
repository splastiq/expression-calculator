function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {

    //split string to array by tokens
    let arr = expr.match(/[-+*/()]|\d+/g);

    //test pairs of brackets
    let countLeftBracket = 0;
    let countRightBracket = 0;
    for (let i = 0; i < expr.length; i++) {
        if (expr[i] == '(') {
            countLeftBracket++;
        } else if (expr[i] == ')') {
            countRightBracket++;
        }
    };

    if (countLeftBracket != countRightBracket) {
        throw new Error('ExpressionError: Brackets must be paired');
    };

    //calculator
    const calculate = (a, b, operator) => {
        if (operator == '+') { return a + b };
        if (operator == '-') { return a - b };
        if (operator == '*') { return a * b };
        if (operator == '/') {
            if (b == 0) {
                throw new Error('TypeError: Division by zero.')
            } else return a / b
        }
    }

    let priority = {
        '(': 1,
        ')': 1,
        '+': 2,
        '-': 2,
        '*': 3,
        '/': 3,
    };

    let answer = 0;
    let numbers = [];
    let operators = [];

    const changeStack = () => {
        answer = calculate(numbers[numbers.length - 2], numbers[numbers.length - 1], operators[operators.length - 1]);
        numbers.pop();
        numbers.pop();
        operators.pop();
        numbers.push(answer);
    }

    if (arr.length == 1) {
        answer = arr[0]
    } else {

        for (let i = 0; i < arr.length; i++) {
            if (!isNaN(arr[i])) {
                numbers.push(parseInt(arr[i]));
            } else if (operators.length == 0 || arr[i] == '(' || priority[arr[i]] > priority[operators[operators.length - 1]]) {
                operators.push(arr[i]);
            } else {
                if (arr[i] == ')') {
                    if (operators[operators.length - 1] == '(') {
                        operators.pop();
                    } else {
                        changeStack();
                        i--;
                    }
                } else {
                    changeStack();
                    i--;
                }
            }
        }

        if (numbers.length > 1) {
            for (let i = 0; i < numbers.length; i++) {
                changeStack();
            }
        }

    }

    return answer;
}

module.exports = {
    expressionCalculator
}