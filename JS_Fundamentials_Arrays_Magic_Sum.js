function solve (arr, param1) {
    for (let i = 0; i<arr.length; i++){
        for (let a = i+1; a<arr.length; a++){
           
            if (arr[i]+arr[a]==param1)
            console.log(`${arr[i]} ${arr[a]}`)
        } 
         }
   
}
solve ([1, 2, 3, 4, 5, 6], 6)