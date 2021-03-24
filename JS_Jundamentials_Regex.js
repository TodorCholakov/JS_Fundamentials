
function solve (arr){
    let result = "Bought furniture:";
    let sum = 0;
    
        //console.log (regex)
        let regex = /^>>(?<name>[A-Za-z]+)<<(?<price>[\d]+(\.[\d]+)?)!(?<multi>[\d])$/
    for (const line of arr) {
        
        let match = regex.exec(line)
        if (match){
            result+=`\n${match.groups.name}`
            sum+=Number(match.groups.price)*Number(match.groups.multi)
        }
       
    }
    result+=`\nTotal money spend: ${sum.toFixed(2)}`
    return result
}

console.log (
solve ([ '>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase' ]
))