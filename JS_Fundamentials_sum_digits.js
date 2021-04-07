function solve (param){
    let temp = 0
    let stringify = param.toString().split("");
    let toNumber = stringify.map(Number)
    let res = toNumber.reduce((x, temp)=>x+temp)
    console.log(res)

}
solve (12322)