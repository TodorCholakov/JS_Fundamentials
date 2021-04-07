function smallestNumber (param1, param2, param3){
    param1 = Number(param1);
    param2 = Number(param2);
    param3 = Number(param3);
   if (param1<=param2 && param1<=param3){
       console.log (param1)
   } else if (param2<=param1 && param2<=param3){
    console.log (param2)
   } else if (param3<=param1 && param3<=param2){
    console.log (param3)
   }
}

smallestNumber (25,
    21,
    "4"    
    )