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

//"Хойстване" - функцията може и да е след кода

//Array 
let myArr = [];
myArr.push('aaa') //add element to the end
myArr.push('bbbb')//add element to the end
//myArr.pop() //remove last element of array
//console.log (myArr)
myArr.shift() //remove the first element
myArr.unshift('aksdflasdjflksadf')//add element at the beginning of array
//console.log (myArr)


//let filtered = arr.filter(x=>x!==2)

let arr1 = [23, "2", 3, 4, 5, 6, 7];
let a = arr1.map(Number);
let sorted = a.sort((a, b)=>a-b)
let sum = a.reduce((a, b)=>a+b)
console.log (sum);

//asc table букви отговарящи на номер
//fromCharCode()

//clip path generator - изрязва снимка
//box shadow generator
//linear gradent generator  
// body,* - селектира всеки таг без before и after

/*html {
    box-sizing: border-box;
}
body, 
*,
*:after,
*:before{
    box-sizing: inherit;
}*/

//CTR + U - показва кода

//width: fit-content;
//background: linear-gradient(0, 0 ,0 ,0.5)
//css gradient with image