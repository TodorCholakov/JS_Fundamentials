//OK 88/100
function solve (param1, param2, param3, students){
    let count = 1;
let hoursum = param1+param2+param3;
hoursum1=hoursum
while (hoursum1<students){  
    hoursum1+=hoursum
    count++;
    if (count%4==0){
        count++
    }
}
console.log (`Time needed: ${count}h.`)
}
solve (5, 6, 4, 20);