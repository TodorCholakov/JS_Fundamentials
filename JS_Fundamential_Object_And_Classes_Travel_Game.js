function solve (data){
   let myObj = {}
   let myObj1 = {}
   let arrReduced = []

  for (const line of data) {
     let arr = line.split(" > ")
    
     let key = `${arr[0]} -> ${arr[1]}`
     let value = Number(arr.slice(-1));
     if (myObj.hasOwnProperty(key)){
        if (value<Number(myObj[key])){
            myObj[key]=value;
        } 
     } else {
         myObj[key]=value;
     }
     
   
  }

  for (const key in myObj) {
   arrReduced.push(`${key} -> ${myObj[key]}`)
  }
  
  arrReduced.sort((a, b) => a.localeCompare(b))
  console.log(arrReduced)
  for (const line of arrReduced) {
   console.log(line)
   let arrArrReduced = line.split(" -> ")
   
   let key = arrArrReduced[0]
   let value = `${arrArrReduced[1]} -> ${arrArrReduced[2]}`
   
   if (!myObj1.hasOwnProperty(key)){
      myObj1[key]=[value]
   } else {
      myObj1[key].push(value);
   }
   

  }


  for (const key in myObj1) {
    console.log(`${key} -> ${myObj1[key]}`)
     }
  

}
solve
   (
      [
         "Bulgaria > Sofia > 25000",
         "Bulgaria > Sofia > 25000",
         "Kalimdor > Orgrimar > 25000",
         "Albania > Tirana > 25000",
         "Bulgaria > Aarna > 25010",
         "Bulgaria > Lukovit > 10"
         ]
         
   )