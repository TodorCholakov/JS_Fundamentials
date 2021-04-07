function solve (param1){
    let day=0;
    let input = Number(param1);
    let consumed = input
    let total = 0;
    while (input>=100){
        day+=1;
        consumed = input-26;
        input-=10        
        total+=consumed;
    }
    if (total<26){
        console.log(day)
        console.log(total)
    } else {
        console.log(day)
        console.log(total-26)
    }
}
solve (111)