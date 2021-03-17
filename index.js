function calculate(form) {
    let equation = form.equation.value.toString();
    let result = "";
    try {

        /*
        brackets
        - Check diff number of brackets
        - set while loop and go to innermost and work outwards
         */

        //different number of brackets
        checkBrackets(equation);


        /*
        evaluate
         */

        //start function to evaluate
        result = evaluate(equation);
    } catch (e) {
        result += "Error: " + e;
    }
    let label = document.getElementById("label");
    label.hidden = false;
    let output = document.getElementById("output");
    output.textContent = result;
}

function evaluate(equation, result = NaN) {
    if (count(equation,'(') === 0) {
        return result;
    }
    let current = count(equation, '(')
    let eval = equation.substring(last(equation, '(') + 1,first(equation,')'));
}

function last(equation,character) {
    for (let i = equation.length-1; i >= 0; i--) {
        if (equation.charAt(i) === character) {
            return i;
        }
    }
    return -1;
}

function first(equation, character) {
    for (let i = 0; i < equation.length; i++) {
        if (equation.charAt(i) === character) {
            return i;
        }
    }
    return -1;
}

function checkBrackets(equation) {
    if (count(equation, '(') > count(equation, ')')) {
        throw("More open brackets than close brackets (" + (count(equation, '(')-count(equation, ')')) + ")")
    }
    if (count(equation, '(') < count(equation, ')')) {
        throw("More close brackets than open brackets (" + (count(equation, '(')-count(equation, ')')) + ")")
    }
}

function count(equation, character) {
    let counter = 0;
    for (let i = 0; i < equation.length; i++) {
        if (equation.charAt(i) === character) {
            counter++;
        }
    }
    return counter;
}