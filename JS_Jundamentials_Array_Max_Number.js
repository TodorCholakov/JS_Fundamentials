function solve (arr){

    let topIntegers=[];
    for (let a=0; a<arr.length; a++){
        let isTop = true;
        for (let i=a+1; i<arr.length; i++){
            if (arr[a]<=arr[i]){
                isTop=false;
                break;
            }
            
            }
            if (isTop==true){
                topIntegers.push(arr[a])
            }
           
        }
      
 console.log (topIntegers.join(' '));
}

solve ([14,
        24,
        3,
        19,
        15,
        17])