//OK 100/100
function solve (arr){
    let isEqual=false;
for (let i = 0; i < arr.length; i++) {
    let sumLeft =0;
    let sumRight =0;
    for (let r=i+1; r<arr.length; r++){
        sumRight+=arr[r];
    }
    for (let l=0; l<i; l++){
        sumLeft+=arr[l]
    }
    if (sumLeft==sumRight){
        isEqual=true;
        console.log(i)
    }
    
}
if (isEqual==false){
    console.log("no")
}}
solve ([1, 2, 3, 3])