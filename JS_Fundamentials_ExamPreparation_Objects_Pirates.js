function solve(data){
    let obj = {}
    let count = 0;
   for (const line of data) {
        if(line!=="Sail"){
            let [cityName, population, gold] = line.split("||")
           // console.log (cityName, population, gold)
            population=Number(population)
            gold=Number(gold)
            if(!obj.hasOwnProperty(cityName)){
                obj[cityName]={population, gold}
            } else {
                obj[cityName].population+=population
                obj[cityName].gold+=gold
            }
        } else {
            data.splice(0, data.indexOf("Sail")+1)
            break;
        }
    }
for (const line of data) {
    let [command, ...tokens] = line.split("=>")


    if (command=="Plunder"){
        Plunder(obj, ...tokens)
    } else if(command=="Prosper"){
        Prosper(obj, ...tokens)
    }
    else if(command=="End"){
        break;
    }
}


    function Plunder (obj, cityName, people, gold){
        people=Number(people)
        gold=Number(gold)
        obj[cityName].population-=people;
        obj[cityName].gold-=gold;
        if(obj[cityName].gold<=0 || obj[cityName].population<=0){
            console.log (`${cityName} plundered! ${gold} gold stolen, ${people} citizens killed.`)
            console.log (`${cityName} has been wiped off the map!`)
            delete obj[cityName]
        } else {
            console.log (`${cityName} plundered! ${gold} gold stolen, ${people} citizens killed.`)
        }  
    }

    function Prosper (obj, cityName, gold){
        gold=Number(gold)
        if(gold<0){
            console.log("Gold added cannot be a negative number!")
        } else {
            obj[cityName].gold+=gold
            console.log(`${gold} gold added to the city treasury. ${cityName} now has ${obj[cityName].gold} gold.`)
        }
    }
    let sorObj = Object.entries(obj).sort(compareObj)
    function compareObj(a, b){
        let [aCityName, aInfo] = a
        let [bCityName, bInfo] = b
        let byGold = bInfo.gold-aInfo.gold
        if(byGold===0){
           return aCityName.localeComapre[bCityName]
        }
        return byGold
    }
    for (const line of sorObj) {
        count++
    }
    console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`)
    for (const line of sorObj) {
        
       if(line){
        console.log (`${line[0]} -> Population: ${line[1].population} citizens, Gold: ${line[1].gold} kg`)
    }else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!")
    }
    }
}

solve (
    [
    'Nassau||95000||1000',
    'San Juan||930000||1250',
    'Campeche||270000||690',
    'Port Royal||320000||1000',
    'Port Royal||100000||2000',
    'Sail',
    'Prosper=>Port Royal=>-200',
    'Plunder=>Nassau=>94000=>750',
    'Plunder=>Nassau=>1000=>150',
    'Plunder=>Campeche=>150000=>690',
    'End'
]
)