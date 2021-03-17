function calculate(form) {
    let equation = form.equation.value.toString();
    let result = "";
    try {
        equation = fix(equation);
        checkEquation(equation);
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

    /*
    Do operations here in order of BEDMAS
    level 0 = multiplication & division
    level 1 = addition + subtraction
     */

    let next = next(eval, 0);


}


//done
function next(equation, level) {
    switch (level){
        case 0:
            for (let i = 0; i < equation.length; i++) {
                switch (equation.charAt(i)) {
                    case 'x':
                        return 'x';
                    case '/':
                        return '/';
                }
            }


            break;
        case 1:
            for (let i = 0; i < equation.length; i++) {
                switch (equation.charAt(i)) {
                    case '+':
                        return '+';
                    case '-':
                        return '-';
                }
            }

            break;
    }
}

function fix(equation) {
    let final = ""
    for (let i = 0; i < equation.length; i++) {
        switch(equation.charAt(i)) {
            case '*':
                final += 'x'
                break;
            case'÷':
                final += '/'
                break;
            default:
                final+=equation.charAt(i)
        }
    }
}

function checkEquation(equation) {
    let allowedChars = "1234567890x*/÷+-"
    for (let i = 0; i < equation.length; i++) {
        if (!allowedChars.includes(equation.charAt(i))) {
            throw("Invalid Symbol (" + (equation.charAt(i)) + ")")
        }
    }
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