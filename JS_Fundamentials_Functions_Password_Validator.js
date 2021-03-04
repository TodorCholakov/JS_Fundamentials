//OK 52/100
function passwordValidator (param){
    let counter=0
    let letterCount = 0
   // console.log (param.length)
    for (let a=0; a<param.length; a++){
        if (48<=param[a].charCodeAt() && param[a].charCodeAt()<=57){
            counter++;
            letterCount++
        } 
        else if (65<=param[a].charCodeAt() && param[a].charCodeAt()<=90){
            letterCount++
        }
        else if (97<=param[a].charCodeAt() && param[a].charCodeAt()<=122){
            letterCount++;
        }
        else {
            console.log (`Password must consist only of letters and digits`);
            break;
        }
    }
    if (param.length>10 || param.length<6) {
        console.log ("Password must be between 6 and 10 characters")
    } 
    if (counter<2) {
        console.log ("Password must have at least 2 digits")
     } 
     if (letterCount<=10 && counter>=2 && letterCount>=6){
         console.log (`Password is valid`)
     }
}
passwordValidator ('Pa$s$s')