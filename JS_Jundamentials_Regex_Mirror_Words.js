
function solve ([arr]){
    let str = ""
   let count =0
   let count1 =0
   let resArr=[]
    let regex = /(@|#)[A-Za-z]{3,}\1\1[A-Za-z]{3,}\1/gm
    let match = arr.match(regex)
    if(match){
    for (const el of match) {
        count++
        let symbol = el[0]
        //console.log(symbol)
        let arr1 = el.split(`${symbol}`)
        //console.log (arr1)
      
        let res = arr1[3].split("").reverse().join("")
        if (arr1[1]==res){
            str = str + `${arr1[1]} <=> ${arr1[3]}, `
            count1++
        }
    }
    
    if (count==0){
        console.log (`No word pairs found!`)
        
    } else {
        console.log (`${count} word pairs found!`)
        
       
    }
    if (count1!=0){
        console.log (`The mirror words are:`)
        str = str.substring(0, str.length-2)
        console.log (str)
    } else {
        
        console.log (`No mirror words!`)
    }
    
    
    
        
 
}else {
    console.log (`No word pairs found!`)
    console.log (`No mirror words!`)
}
}

solve ([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ]
)