function solve (a, b, c){
    let stringify = `${a}${b}${c}`
    let reverse = stringify.split("").reverse().join(" ");
    console.log (reverse)
}
solve ('a', 'b', 'c')