
function solve (arr){
    let result = "";
    let total = 0;
    let temp = 0;
    let regex = /%(?<name>[A-Z][a-z]+)%([^\|\$\%\.]+)?<(?<nameArt>[A-Za-z]+)>[|](?<count>\d+)[|](?<price>\d+.\d+)[$]/
    for (const line of arr) {
        let match = regex.exec(line)
       
        if (match){
            //console.log (match)
            temp = (Number(match.groups.count)* Number(match.groups.price)).toFixed(2)
            result+=`\n${match.groups.name}: ${match.groups.nameArt} - ${temp}`
            total+=Number(temp)
        }
    }
    console.log (result)
    console.log(`Total income: ${total.toFixed(2)}`)
}


solve ([
    %George%<Croissant>|2|10.3$
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
  ]
)