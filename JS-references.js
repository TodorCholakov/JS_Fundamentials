function Hello () {
    console.log("Hellow world")
}
Hello();
Hello();

//cmd in explorer write - "code ." - отваря папката в VS code
//повдигане на степен - Math.pow (number, 4)
function multiply (){
    let a = Math.pow(2, 4);
    let b = (2 **4);
    console.log (a)
    console.log (b)
}
multiply()

//SWITCH
function switch1 (param){
 switch (param) {
     case 1: console.log ("Monday");
     break;
     case 2: console.log ("Tuesday");
     break;
     default: console.log ("facebook")
 }
}
switch1 (2)

//тернален оператор 
function dayOfTheWeek (param1){
    if (param1>5){
        console.log ("weekend");
    } else {
        console.log("wokday");
    }
    console.log (param1>5 ? "Weekend" : "Worcday");
} 
dayOfTheWeek(4)