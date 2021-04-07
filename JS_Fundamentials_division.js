function solve (param1) {
    let param = Number(param1)
   if (param%10==0) {
       console.log ('The number is divisible by 10');
       return;
   } else if (param%7==0){
    console.log ('The number is divisible by 7');
    return;
   } else if (param%6==0){
    console.log ('The number is divisible by 6');
    return;
   } else if (param%3==0){
    console.log ('The number is divisible by 3');
    return;
   }else if (param%2==0){
    console.log ('The number is divisible by 2');
    return;
   } else {
       console.log('Not divisible')
   }

}
solve (10)