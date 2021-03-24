
function solve (str){
let half1 = str.substring(0, str.length/2)
let half2 = str.substring(str.length/2, str.length)
console.log (half1.split("").reverse().join(""))
console.log (half2.split("").reverse().join(""))
}


solve ('tluciffiDsIsihTgnizamAoSsIsihT')