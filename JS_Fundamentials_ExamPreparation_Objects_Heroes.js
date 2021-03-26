function solve(data){
    let heroesNum = Number(data.shift());
    let heroes = {};
    for (let i=0; i<heroesNum; i++){
        //console.log (data[i])
       let [heroName, hp, mp] = data[i].split(" ");
       hp=Number(hp)
       mp = Number(mp)
       heroes[heroName] = {hp, mp}
    }
    data.splice(0, heroesNum)

    for (const line of data) {
        let [command,...tokens] = line.split(" - ")
        if (command == "CastSpell"){
            CastSpell(heroes,...tokens)
        } else if (command == "Recharge"){
            Recharge(heroes,...tokens)
        } else if (command == "TakeDamage"){
            TakeDamage(heroes,...tokens)
        }else if (command == "Heal"){
            Heal(heroes,...tokens)
        }
    }

    function CastSpell (heroes, heroName, MP, spellName) {
        MP = Number(MP)
        if(heroes[heroName].mp>=MP){
            heroes[heroName].mp=heroes[heroName].mp-MP
            console.log (`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mp} MP!`)
        } else {
            console.log (`${heroName} does not have enough MP to cast ${spellName}!`)
        }
    }
    function Recharge (heroes, heroName, recharge){
        recharge = Number(recharge)
        let oldValue = heroes[heroName].mp
        heroes[heroName].mp = Math.min(200, heroes[heroName].mp+recharge)
        console.log (`${heroName} recharged for ${heroes[heroName].mp-oldValue} MP!`)
    }   
    function TakeDamage(heroes, heroName, takeDamage, attackers){
        takeDamage=Number(takeDamage);
        if(takeDamage>=heroes[heroName].hp){
            console.log (`${heroName} has been killed by ${attackers}!`)
            delete heroes[heroName]
        } else {
            heroes[heroName].hp=heroes[heroName].hp-takeDamage
            console.log (`${heroName} was hit for ${takeDamage} HP by ${attackers} and now has ${heroes[heroName].hp} HP left!`)
        }
    }
 
    function Heal (heroes, heroName, amount) {
        amount = Number(amount)
        let oldValue = heroes[heroName].hp
        heroes[heroName].hp = Math.min(100, heroes[heroName].hp+amount)
        console.log (`${heroName} healed for ${heroes[heroName].hp-oldValue} HP!`)
    }

   let sortObj = Object.entries(heroes).sort(comapareHeroes)

   function comapareHeroes (a, b){
       let [aName, aInfo] = a;
       let [bName, bInfo] = b;
       
       let byHealthDesending = bInfo.hp-aInfo.hp
       if (byHealthDesending==0){
           return aName.localeCompare(bName)
       }
       return byHealthDesending
   }
  
   for (const line of sortObj) {
    console.log (line[0])
    console.log (`  HP: ${line[1].hp}`)
    console.log (`  MP: ${line[1].mp}`)
   }
}

solve (
    [
        '2',
        'Solmyr 85 120',
        'Kyrre 99 50',
        'Heal - Solmyr - 10',
        'Recharge - Solmyr - 50',
        'TakeDamage - Kyrre - 66 - Orc',
        'CastSpell - Kyrre - 15 - ViewEarth',
        'End'
      ]
      
)