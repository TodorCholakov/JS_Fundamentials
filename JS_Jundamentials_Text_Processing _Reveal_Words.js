//OK 100/100
function solve (arr, str){
let [...words] = arr.split(", ")

//console.log(str)

for (const word of words) {
 
    let wLength = word.length
    let symbol=""
    for (let i=0; i<wLength; i++){
        symbol+="*"
    }
    //console.log (symbol)
    str = str.replace(symbol, word)
}
console.log (str)
}

solve ('great, learning',
'softuni is ***** place for ******** new programming languages'

)