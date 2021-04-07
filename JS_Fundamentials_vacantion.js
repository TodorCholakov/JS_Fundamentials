function solve (param1, param2, param3) {
    let param = Number(param1)
    let res, discount;
    if (param2=="Students") {
       if (param>=30) {
           discount=0.15;
       } else {
        discount=0;
       }
       if(param3=="Friday"){
        res=(param*8.45)-(param*8.45*discount);      
       } else if(param3=="Saturday"){
        res=(param*9.8)-(param*9.8*discount); 
       } else if(param3=="Sunday"){
        res=(param*10.46)-(param*10.46*discount); 
       }  
    }
       if (param2=="Business") {
        if (param>=100) {
            discount=10;
        } else {
         discount=0;
        }
        if(param3=="Friday"){
         res=(param-discount)*10.9;
        } else if(param3=="Saturday"){
         res=(param-discount)*15.6;  
        } else if(param3=="Sunday"){
         res=(param-discount)*16;  
        } 
    }
    if (param2=="Regular") {
            if (param>=10 && param<=20 ) {
            discount=0.05;
            } else {
            discount=0;
            }
             if(param3=="Friday"){
        res=(param*15)-(param*15*discount);      
       } else if(param3=="Saturday"){
        res=(param*20)-(param*20*discount); 
       } else if(param3=="Sunday"){
        res=(param*22.5)-(param*22.5*discount); 
       }  
            
}
console.log (`Total price: ${res.toFixed(2)}`)}

solve (40, "Regular", "Saturday");