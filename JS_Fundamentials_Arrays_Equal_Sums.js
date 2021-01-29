function solve (arr){
    let sumLeft =0;
    let sumRight =0;
for (let index = 0; index <= arr.length; index++) {
    if (index = arr.length ||  index==0){
        console.log(0)
    } else {
        for (let i=index; i>=0; i--){
            sumLeft+=arr[i]
            console.log (sumLeft)
        }
        for (let a=index; a<=arr.length; a++){
            sumRight+=arr[a]
            console.log (sumRight)
        }
        if (sumLeft==sumRight){
            console.log (OK);
        } 
    }
    
}
}
solve ([1, 2, 3, 3])