
function solve (arr){
    let racersObj = {}
    let [...resArr] = arr.shift().split(", ")
   // console.log (resArr)
    
    for (const racer of resArr) {
        racersObj[racer]=0;

    }
    for (const line of arr) {
        let regexName = /[A-Za-z]/g
         let regexD = /[\d]/g
        let name = line.match(regexName).join("")  
        if (racersObj.hasOwnProperty(name)){
        let km = line.match(regexD).map(Number).reduce((a, b) => a+b, 0)
        racersObj[name]+=km 
    }
    }
    let sorted = Object.keys(racersObj).sort((a,b)=>racersObj[b]-racersObj[a]);
    console.log(`1st place: ${sorted[0]}`)
    console.log(`2nd place: ${sorted[1]}`)
    console.log(`3rd place: ${sorted[2]}`)
}


solve ([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
  ]
  
)