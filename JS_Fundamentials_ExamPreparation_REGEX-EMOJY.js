function solve(data){
    let regex = /(:{2,}|\*{2,})[A-Z][a-z]{2,}\1/g
    let regexNum =/[0-9]/g
    let str = data[0]
    let match = str.match(regex)
    let matchNum = str.match(regexNum)
    let regexToNum = matchNum.map(Number)
    let coolFactor =1 
    for (const num of regexToNum) {
        coolFactor*=num
    }
    
    console.log (`Cool threshold: ${coolFactor}`)
    console.log(`${match.length} emojis found in the text. The cool ones are:`)
    for (const emojy of match) {
        let word = emojy.substring(2, emojy.length-2)
        let countASCI = 0;
        for(let i =0; i<word.length; i++){
            countASCI+= word.charCodeAt(i)
        }
        if (countASCI>coolFactor){
            console.log (emojy)
        }
    }
}

solve (
    [
        'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
      ]
      
)