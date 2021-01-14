//OK 100/100

function solve (param1) {
    let res;
    let  userName= param1[0]
    let counter =0;
    let reverse = userName.split("").reverse().join("");
    for (let i=1; i<param1.length; i++){
        if (counter>2){
            res = `User ${userName} blocked!`;}
            else {
        if (reverse==param1[i] ){
            res = (`User ${userName} logged in.`);
            console.log (res);
            break;
        } else  {
            res =  ("Incorrect password. Try again.")
            counter++
        }
    }
        console.log (res)
        
    }
}
solve (['Acer', 'login', 'dsfsdf', , 'recA', 'sadfsadf', 'go',  'asdas'])