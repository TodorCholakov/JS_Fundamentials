function solve (param){
    let lastValue, additionalDiscount, taxes, res=Number(0), resTaxes=Number(0), totalPrice;
    taxes = 0.2;
    lastValue = param[param.length-1];
    if (lastValue==="special"){
        additionalDiscount=0.1;
    } else {
        additionalDiscount=0;
    }
    for (let i=0; i<=(param.length-2); i++){
        let a = Number(param[i])
        if (a<=0) {
            console.log("Invalid price!");
        } else {
        res +=a 
    }
    }
    if (res==0){
        console.log("Invalid order!")
    }else {
    resTaxes = Number((res*taxes).toFixed(2));
    
    totalPrice = (res+resTaxes - ((res+resTaxes)*additionalDiscount)).toFixed(2)
    console.log (`Congratulations you've just bought a new computer!`)
    console.log (`Price without taxes: ${res}$`);
    console.log (`Taxes: ${resTaxes}$`)
    console.log (`-----------`)
    console.log (`Total price: ${totalPrice}$`)
}
}
solve(["1050",
"200",
"450",
"2",
"18.50" ,
"16.86",
"special"
]);

solve(["1023" ,
    "15",
    "-20",
    "-5.50",
    "450",
   "20",
    "17.66",
    "19.30",
    "regular"
]);

solve([
    
    
        '1023', 
        '15', 
        '-20',
        '-5.50',
        '450', 
        '20', 
        '17.66', 
        '19.30', 'regular'
        
        
        
        
]);



