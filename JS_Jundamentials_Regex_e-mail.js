
function solve (arr){
    let regex = /[A-Za-z]+([\.\-\_]+)?([A-Z]+)?([a-z]+)?([0-9]+)?@[a-z]+([\-]+)?.[a-z]+/i
    
    for (const line of arr) {
        let match = line.match(regex)
        if(match){
            for (const line of match) {
                console.log (line)
            }
        }
    }
}


solve ([ 'Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.' ]
)