function solve (param1, operator, param2){
    let res;
    let stringify = `${param1}${operator}${param2}`
    if (operator=="+"){
        res = param1+param2
    } else if (operator=="-"){
        res = param1-param2
    }
    else if (operator=="/"){
        res = param1/param2
    }
    else if (operator=="*"){
        res = param1*param2
    }
    console.log (res.toFixed(2))
}
solve (5, "+", 6)