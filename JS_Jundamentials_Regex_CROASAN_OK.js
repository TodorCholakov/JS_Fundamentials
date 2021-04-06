
function solve (arr){
let regex = /%(?<name>[A-Z][a-z]+)%[^\|\$%.]*?<(?<nameProduct>[A-Za-z]+)>[^\|\$%.]*?\|(?<count>\d+)\|[^\|\$%.]*?(?<price>\d+(.\d+))\$/
    let sum = 0
for (const line of arr) {
    let match = line.match(regex)
    if (match){
        //console.log (match)
        //console.log(match.groups.price)
        let tmpSum = (Number(match.groups.price)*Number(match.groups.count)).toFixed(2)
        console.log (`${match.groups.name}: ${match.groups.nameProduct} - ${tmpSum}`)
        sum+=Number(tmpSum)
    }
}
console.log(`Total income: ${sum.toFixed(2)}`)
}


solve ([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'

  ]
)