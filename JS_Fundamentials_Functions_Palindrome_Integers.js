//OK 100/100
function palindromeIntegers (param){
    let isPalindrome = true;
   for (let i=0; i<param.length; i++){
      let tempStr = param[i].toString()
      // console.log (tempStr[0])
      let lengthStr = Number(tempStr.length);
       for (let a=0; a<lengthStr; a++){
    //    console.log (lengthStr);
    //    console.log (tempStr[a])
    //    console.log (tempStr[lengthStr-a-1])
           if (tempStr[a]==tempStr[lengthStr-a-1]){
          
          isPalindrome=true
   } else {
    isPalindrome=false
   }
}
if (isPalindrome==true){
    console.log ("true")
} else {
    console.log ("false")
}

}
}
palindromeIntegers ([123,323,421,121])