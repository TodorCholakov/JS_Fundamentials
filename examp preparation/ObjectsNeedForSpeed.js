function solve(data){
    let cars = {}
    let numbersOfCars = data.shift(data[0])
    for(let i=0; i<numbersOfCars; i++){
        let [carName, mileage, fuel] = data.shift(data[i]).split("|")
       
        mileage=Number(mileage)
        fuel=Number(fuel)
        cars[carName]={mileage, fuel}
    }
//console.log (cars)
      for (const el of data) {
          let [command, car1, mileage1, fuel1] = el.split(" : ")
          mileage1 = Number(mileage1) 
          fuel1 = Number(fuel1) 
         // console.log (command, car1, mileage1, fuel1)
          if (command == "Drive"){
              if (cars[car1].fuel>fuel1  && cars[car1].mileage<100000){
                cars[car1].fuel-=fuel1;
                cars[car1].mileage += mileage1;
               // console.log (cars)
                console.log (`${car1} driven for ${mileage1} kilometers. ${fuel1} liters of fuel consumed.`)
                if (cars[car1].mileage>100000){
                  let a =  Object.keys(cars[car1])
                  console.log(`Time to sell the ${car1}!`)
                  delete cars[car1]
                   
                    
                }
              } else if (cars[car1].fuel<fuel1){
                console.log("Not enough fuel to make that ride")
          }
      } else if (command == "Refuel"){
          let tank=75;
          fuel1=mileage1
          if (cars[car1].fuel+fuel1>tank){
            fuel1=tank-cars[car1].fuel
            cars[car1].fuel=tank
            
          } else {
            cars[car1].fuel+=fuel1;
          }
          console.log (`${car1} refueled with ${fuel1} liters`)
      }
      else if (command == "Revert"){
        cars[car1].mileage-=mileage1;
        if (cars[car1].mileage<10000){
            cars[car1].mileage=10000;
        } else {
            console.log (`${car1} mileage decreased by ${mileage1} kilometers`)
        }
        
    } else if (command == "Stop"){
        break;
    }
    
}
//console.log (cars)
let sortedCars = Object.entries(cars).sort(sortCars)

    function sortCars (a, b){
        let [aname, amileage] = a
        let [bname, bmileage] = b
        let res = bmileage.mileage - amileage.mileage
return(res)
    }
    //console.log (typeof(sortedCars))
    for (const el of sortedCars) {
        let [res1, res2, res3] = el
       // console.log (res1, res2)
        console.log (`${res1} -> Mileage: ${res2.mileage} kms, Fuel in the tank: ${res2.fuel} lt.`)

    }
}

solve(
    [
        "4",
        "Lamborghini Veneno|11111|74",
        "Bugatti Veyron|12345|67",
        "Koenigsegg CCXR|67890|12",
        "Aston Martin Valkryie|99900|50",
        "Drive : Koenigsegg CCXR : 382 : 82",
        "Drive : Aston Martin Valkryie : 99 : 23",
        "Drive : Aston Martin Valkryie : 2 : 1",
        "Refuel : Lamborghini Veneno : 40",
        "Revert : Bugatti Veyron : 2000",
        "Stop"
      ]
      
  )