//Finished 100/100

function solve (param1, param2) {
    let num1, num2, sum=0, resTemp, res="";
   num1 = Number(param1)
    num2 = Number(param2)
    for (let i=num1; i<=num2; i++){
       sum=sum+i
       resTemp = i.toString()
       res = `${res} ${resTemp}`;
    }
    console.log(res)
    console.log (`Sum: ${sum}`)
}
solve (5, 10)