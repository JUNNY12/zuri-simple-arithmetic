let value1 = parseInt(prompt("Enter first Number"))
let operator = prompt("Operator")
let value2 = parseInt(prompt("Enter second Number"))


let answer;

const calculate = () =>{
    if(isNaN(value1) || isNaN(value2)){
        alert("Please enter a correct number")
    }

    else{
        if(operator === "+"){
            answer= value1 + value2
        }

        else if(operator === "-"){
            answer= value1 - value2
        }

        else if(operator === "*"){
            answer=value1 * value2
        }

        else if (operator === "/"){
            answer = value1 / value2
        }

        alert( `${value1} ${operator} ${value2} = ${answer}`)
    }
}

calculate()