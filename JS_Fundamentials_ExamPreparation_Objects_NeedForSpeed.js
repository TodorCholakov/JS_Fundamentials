function solve(data){
    let obj = {}
    let numCars = Number(data.shift())
   // console.log (numCars)
    for (let i=0; i<numCars; i++){
        let [carName, distance, fuel] = data[i].split("|")
       // console.log (carName, distance, fuel)
       distance = Number(distance)
       fuel = Number(fuel)
       obj[carName]={distance, fuel}
    }
    data.splice(0, numCars)
    //console.log (data)
    for (const line of data) {
        let [command, carName, ...tokens] = line.split(" : ")
        //console.log (command, carName, tokens)
        if (command==="Drive"){
            Drive (obj, command, carName, tokens)
        } else if (command==="Refuel"){
            Refuel (obj, command, carName, tokens)
        } else if (command==="Revert"){
            Revert (obj, command, carName, tokens)
        } else if (command==="Stop"){
            break;
        }
    }
    function Drive (obj, command, carName, tokens){
        let distanceDrived = Number(tokens[0])
        let fuelNeeded = Number(tokens[1])
        if (obj[carName].fuel<=fuelNeeded){
            console.log ("Not enough fuel to make that ride")
        } else {
            obj[carName].fuel -= fuelNeeded
            obj[carName].distance += distanceDrived
            console.log (`${carName} driven for ${distanceDrived} kilometers. ${fuelNeeded} liters of fuel consumed.`)
        }
        if (obj[carName].distance>=100000){
            console.log (`Time to sell the ${carName}!`)
            delete obj[carName]
        }
    }

    function Refuel (obj, command, carName, tokens){
        let refFuel = Number(tokens[0])
        let oldValue = obj[carName].fuel
        let refil = Math.min(75, obj[carName].fuel+refFuel)
        console.log(`${carName} refueled with ${refil-oldValue} liters`)
        obj[carName].fuel=refil;
    }

    function Revert (obj, command, carName, tokens){
        let decKm = Number(tokens[0])
        if ((obj[carName].distance-decKm)<10000){
            obj[carName].distance = 10000;
        } else {
            obj[carName].distance-=decKm
            console.log (`${carName} mileage decreased by ${decKm} kilometers`)
        }
    }

    let sorted = Object.entries(obj).sort(SortFunc);

    function SortFunc (a, b){
        
        let [aCarname, aCarInfo] = a
        let [bCarname, bCarInfo] = b
       
        let sortedMil = bCarInfo.distance - aCarInfo.distance
        if(sortedMil===0){
            return bCarname.localeCompare(aCarname)
        }
        return sortedMil
    }
    for (const line of sorted) {
        //console.log (line)
        console.log (`${line[0]} -> Mileage: ${line[1].distance} kms, Fuel in the tank: ${line[1].fuel} lt.`)
    }
}

solve (
    [
        '4',
        'Lamborghini Veneno|11111|74',
        'Bugatti Veyron|12345|67',
        'Koenigsegg CCXR|67890|12',
        'Aston Martin Valkryie|99900|50',
        'Drive : Koenigsegg CCXR : 382 : 82',
        'Drive : Aston Martin Valkryie : 99 : 23',
        'Drive : Aston Martin Valkryie : 2 : 1',
        'Refuel : Lamborghini Veneno : 40',
        'Revert : Bugatti Veyron : 2000',
        'Stop'
      ]
      
)