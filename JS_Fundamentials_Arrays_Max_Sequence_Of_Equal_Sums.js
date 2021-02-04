//OK 100/100

function solve (arr){
    let tempArr = []
    let tempArr1 = []
    let tempArr2 = []
    let arrRes = []
    let count=1
    let res=0;
    let res1 =0;
    tempVar =0;
    for (let i=0; i<arr.length; i++){
            if (arr[i]==arr[i+1] || arr[i]==arr[i-1]){
                tempArr.push(arr[i])    
            } 
    }
    for (let a=0; a<tempArr.length; a++){
            if (tempArr[a]==tempArr[a+1] ){
                count++
            } else {
                tempArr1.push(count);
                tempArr2.push(tempArr[a]);
                count=1
            }
    } 
//console.log (tempArr1)
//console.log (tempArr2)
res=tempArr1[res]
    for (let c=0; c<tempArr1.length; c++){
             
        if (tempArr1[c]>tempArr1[c+1] && c<=tempArr1.length){
            res = tempArr1[c]
            res1 = c;
        } else if (tempArr1[c]<tempArr1[c+1] && c<=tempArr1.length){
            res = tempArr1[c+1]
            res1 = c+1; 
        }
        
    }
   // console.log (res)
    //console.log (res1)
    for (let u=0; u<res; u++){
        arrRes.push(tempArr2[res1])
// console.log("aaaaaaaaaaaa")
    }
//console.log (tempArr)
//  console.log (arrRes)
console.log (arrRes.join(' '))

}
//solve([1, 2, 3, 3, 2, 1, 2, 2, 2, 2, 2, 2, 2])
solve([0, 1, 1, 5, 2, 2, 6, 3, 3])




function solve1 (arr){
    let seq = []
    for (let i=0; i<arr.length; i++){
        let element = arr[i]
        let curSec = [element]
        for (let a=i+1; a<arr.length; a++){
            if (element==arr[a]){
                curSec.push(element)
            } else {
                break;
            }
        }
        if (seq.length<curSec.length){
            seq=curSec
        }
    }
    console.log (seq.join(' '))
}
solve1([0, 1, 1, 5, 2, 2, 6, 3, 3])