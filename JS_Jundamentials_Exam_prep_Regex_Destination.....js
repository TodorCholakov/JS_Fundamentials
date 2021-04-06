
function solve (arr){
   let regex = /(=|\/)[A-Z][A-Za-z]{2,}\1/gm
   let match = arr.match(regex)
   let count = 0
   let res = []
   let str = ""
   //console.log (match)
   if(match){
   for (const line of match) {
       count += line.length-2
       str = line.substring(1, line.length-1)
        res.push(str)
   }
    res = res.join(", ") 
    console.log (`Destinations: ${res}`)
    console.log (`Travel Points: ${count}`)
} else {
    console.log (`Destinations:`)
    console.log (`Travel Points: 0`)
}

}


solve ('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i='
)