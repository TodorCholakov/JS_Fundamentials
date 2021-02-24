//OK 88/100
function solve (param1){
   let param10=param1[0].split(" ");
   let resSwap = param10;
   let myData
   let shortArr=[];
   for (let a =0;  a<param1.length-1; a++){
       //console.log (param1[a])
       let arr = param1[0];
        for (let b=1; b<param1.length-1; b++){
         let shortArrStr = param1[b];
         a++
         shortArr = shortArrStr.split(" ");
         
        
         if (shortArr[0]=="swap"){
            //console.log (shortArr[2])
            
            let temp = param10[shortArr[1]];
            param10[shortArr[1]]= param10[shortArr[2]];
            param10[shortArr[2]] = temp;
            //console.log (resSwap)
         } else if(shortArr[0]=="multiply"){
            resSwap[shortArr[1]]=  param10[shortArr[1]]*param10[shortArr[2]]
            //console.log (resSwap)
         }
         else if(shortArr[0]=="decrease"){
            for (let y=0; y<resSwap.length; y++){
               //console.log (resSwap[y])
               resSwap[y]-=1

             //  console.log (resSwap)
            }
         }

      }   
   }
  console.log (resSwap.join(", "))
}
solve (['23 -2 321 87 42 90 -123', 'swap 1 3', 'swap 3 6', 'swap 1 0', "multiply 1 2", "multiply 2 1", "decrease", "end"]);