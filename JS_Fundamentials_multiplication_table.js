//Finished 100/100

function solve (param1) {
    let num1, resTemp, res="";
   num1 = Number(param1)
    for (let i=1; i<=10; i++){
       resTemp = num1*i
       res = `${num1} X ${i} = ${resTemp}`
       console.log(res)
    }
}
solve (5)