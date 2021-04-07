function solve (param1) {
    let param = Number(param1)
    if (param%4==0 && param%100!=0 || param%400==0) {
       console.log ("yes")
       }  else {
        console.log ("no")
       }
    }
    
solve (2003)