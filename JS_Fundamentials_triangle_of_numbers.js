
function solve (param1) {
    let num1, res="";
    let temp = 0;
   num1 = Number(param1)
    for (let i=1; i<=num1; i++){
        
       for (let y=1; y<=i; y++){
        resnum = i.toString()
        res+=`${resnum} `
        
        
       }
       console.log(res)
       res="";
    }
    
}
solve (5)