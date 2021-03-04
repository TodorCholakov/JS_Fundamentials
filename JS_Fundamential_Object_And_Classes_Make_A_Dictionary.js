function solve (data){
   data.map(line=>{
      let[name, level, items] = line.split(" / ");
      //console.log (`${items}`)
     items = items.split(", ").sort((a, b)=>a.localeCompare(b)).join(", ")
     // console.log (`${items}`)
      return {
         name,
         level:Number(level),
         items
   }
})
.sort((a,b)=>a.level-b.level)
.forEach(hero => {
   console.log(`Hero: ${hero.name}`)
   console.log(`level => ${hero.level}`)
   console.log(`items => ${hero.items}`)
})
 
}
solve(
   [
      "Isacc / 25 / Apple, GravityGun",
      "Derek / 12 / BarrelVest, DestructionSword",
      "Hes / 1 / Desolator, Sentinel, Antara"
      ]
      
   )