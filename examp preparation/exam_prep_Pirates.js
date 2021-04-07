function solve(data){
    let citiesMap = {};
    while (data[0]!=="Sail"){
        let [city, population, gold] = data.shift().split("||")
        gold=Number(gold)
        population=Number(population)
        
        if (!citiesMap.hasOwnProperty(city)){
            citiesMap[city]={population, gold}
        } else {
            citiesMap[city].population +=population; 
            citiesMap[city].gold +=gold; 
        }
        console.log (citiesMap)
    }
    console.log (citiesMap)
}
solve([
    'Tortuga||345000||1250',
    'Tortuga||345000||1250',
    'Santo Domingo||240000||630',
    'Havana||410000||1100',
    'Sail',
    'Plunder=>Tortuga=>75000=>380',
    'Prosper=>Santo Domingo=>180',
    'End'
  ]
  )