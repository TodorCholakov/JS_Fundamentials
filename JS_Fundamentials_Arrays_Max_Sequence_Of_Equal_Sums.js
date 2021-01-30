//Not OK

function solve (arr){
    let count=0;
    res=[]
    let compCount=0;
    let temIndexMin=0;
    let temIndexMax=0;

   for (let i=0; i<arr.length; i++){
       
    if (arr[i] == arr[i+1]){
        count+=1;
        temIndexMin = i;
    } else if(compCount<count){
        compCount=count;
        count=0;
    } 
    else {
        temIndexMax = i;
    }
   }
   for (let i=temIndexMin-1; i<=temIndexMax-1; i++){
        res.push(arr[i])
   }
   console.log (res.join(" "))
}
solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);