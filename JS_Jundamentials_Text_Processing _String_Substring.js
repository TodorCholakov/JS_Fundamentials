//OK 100/100
function solve (str, str1){
    str2 = str.toLowerCase()
    str1 = str1.toLowerCase().split(" ")
    
    if (str1.includes(str2)){
        console.log (str)
        } else {
        console.log (`${str} not found!`)
        }
}
   


solve ('Javascript',
' is the best programming language'
)