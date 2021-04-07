function solve (param1) {
    let sum1 = 0;
    let sum2 = 0;
    for(let a of param1){
        sum1+=a
    }
    let res=[];
    let temp;
   for (let i = 0; i<param1.length; i++){
       if (param1[i]%2==0){
           temp =  param1[i]+=i
            res.push(temp)
       } else {
        temp = param1[i]-=i
        res.push(temp)
       }
   }
   console.log (res)
   for(let a of param1){
    sum2+=a
}
   console.log (sum1)
   console.log (sum2)
}
solve ([5, 15, 23, 56, 35])