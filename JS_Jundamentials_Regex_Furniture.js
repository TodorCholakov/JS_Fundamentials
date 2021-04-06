
function solve (arr){
    let sum = 0;
let regex = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+(.[\d]+)?)!(?<qantity>\d+)/
console.log (`Bought furniture:`)
for (const line of arr) {
    let match = line.match(regex)
    if (match){
        console.log (match.groups.name)
        sum += Number(match.groups.price)*Number(match.groups.qantity)
    }
    
}
console.log (`Total money spend: ${sum.toFixed(2)}`)
}

solve ([ '>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase' ]
)