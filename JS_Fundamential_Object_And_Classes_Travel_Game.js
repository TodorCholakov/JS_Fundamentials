function solve (data){
   let myObj = {}
   for (const line of data) {
      let [country, town, km] = line.split(" > ")
      km = Number(km);
      if (!myObj.hasOwnProperty(country)){  
         myObj[country]={[town]: km}
      } else {
         if (myObj[country].hasOwnProperty(town)){
            let temp = Object.values(myObj[country])
            if (temp[0]>km){
               myObj[country][town] = km
            } else {
              continue;
            }
         } else {
            myObj[country][town] = km
         }
      }}
let sorted = Object.entries(myObj).sort(sortObject)
   function sortObject(a, b){
      let [aCountry, aTowns] = a
      let [bCountry, bTowns] = b 
      let res = aCountry.localeCompare(bCountry) 
      return (res)
   }
for (const [country, townInfo] of sorted) {
      let aa = Object.entries(townInfo).sort(fSort)
      function fSort(a,b){
         let res1 = a[1] - b[1]
         return res1
      }
     // console.log (myObj)
      let aaa = ""
      for (const line of aa) {
         aaa +=` ${line[0]} -> ${line[1]}`
      }
  console.log(`${country} ->${aaa}`)
}

}
solve
   (
      [
         "Bulgaria > Sofia > 25000",
         "Bulgaria > Sofia > 15000",
         "Kalimdor > Orgrimar > 25000",
         "Albania > Tirana > 25000",
         "Bulgaria > Aarna > 25010",
         "Bulgaria > Lukovit > 10"
         ]
         
   )