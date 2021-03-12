function solve (data){
   let guests = {
      vip: [],
      regular: []
   }
   //console.log (guests)
   let input = 0;
   while (data[input]!="PARTY"){
      let name = data[input]
    //  console.log (name)
     if (isNaN(name[0])===false){
        guests.vip.push(name)
     } else {
      guests.regular.push(name)
      
     }
     input++
    // console.log (input)
   }
   let count =0;
let commingGuests = data.splice(input+1)
   for (let a =0; a<commingGuests.length; a++){
      if (guests.vip.includes(commingGuests[a])){
         let index = guests.vip.indexOf(commingGuests[a])
         guests.vip.splice(index, 1)
         //commingGuests.splice(a, 1)
         count++
      } else if (guests.regular.includes(commingGuests[a])){
         let index = guests.regular.indexOf(commingGuests[a])
         guests.regular.splice(index, 1)
         //commingGuests.splice(a, 1)
         count++
      } 
   }
   //console.log (commingGuests)
   let res = (guests.regular.length+guests.vip.length)
   console.log (res)
   console.log (guests.vip.join("\n"))
   console.log (guests.regular.join("\n"))
}
solve(
   ['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]

   )