//Not OK
function solve (arr){
    let res=[];
    let res1="", tempNum;
    for (let a=0; a<arr.length; a++){
        
        for (let i=a+1; i<arr.length; i++){
            if (arr[a]>arr[i] || arr.indexOf(arr[a])==arr.indexOf(arr.length)){
                tempNum=true;
                console.log(arr.indexOf(arr[a]));
       //  console.log(arr[i])
       //      console.log(tempNum)
            } else {
                tempNum=false;
      //        console.log(arr[a])
     //       console.log(arr[i])
    //        console.log(tempNum)
                break;
            }
            
           
        }
        if (tempNum==true){
            res.push(arr[a]);
console.log (res)
        } 
    }
 //res.push(arr[arr.length-1])
  // console.log(res);
  let aa = res.join(' ');
      
 console.log (`${aa}`)
}

solve ([14,
        24,
        3,
        19,
        15,
        17])