
function solve ([arr]){
   let regex = /(#|\|)(?<name>[A-Za-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<callories>\d{1,5})\1/g
   let match = arr.match(regex)
let sum = 0
let arr1 = []
if(match){
    for (const line of match) {
       let exec = regex.exec(match)
       if (exec){
           sum+= Number(exec.groups.callories)
           arr1.push(`Item: ${exec.groups.name}, Best before: ${exec.groups.date}, Nutrition: ${exec.groups.callories}`)
       }
    }
    
    console.log (`You have food to last you for: ${Math.floor(sum/2000)} days!`) 
    for (const line of arr1) {
        console.log (line)
    }
} else {
    console.log (`You have food to last you for: 0 days!`) 
}
}



solve (['Hello|#Invalid food#19/03/20#450|$5*(@' ]
)