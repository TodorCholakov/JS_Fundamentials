function addAndEvenSum (param1){
    let param = param1.toString()
    let evenSum = 0;
    let oddSum = 0;
    for (let i=0; i<param.length; i++){
        if (param[i]%2==0){
            evenSum+=Number(param[i])
        } else {
            oddSum+=Number(param[i])
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

addAndEvenSum (1000435)